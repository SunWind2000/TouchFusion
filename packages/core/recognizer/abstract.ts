import { RECOGNIZER_TYPE, RECOGNIZER_STATE, INPUT_STATE } from '@/constants';
import { generateId, invokeArrayArg, isArray } from '@/utils';

import type { IManager, IRecognizer, InputData } from '@/types';
import type { IActions, RecognizerOptions } from '@/constants';

export abstract class Recognizer implements IRecognizer {
  protected abstract _type: RECOGNIZER_TYPE;
  protected manager: IManager | null;
  private _id: string;
  private _state: RECOGNIZER_STATE;
  private _options: RecognizerOptions;
  private simultaneous: Record<string, Recognizer>;
  private requireFails: Recognizer[];

  constructor(options: RecognizerOptions) {
    this._options = { ...options };
    this._id = generateId(this.type);
    this.manager = null;

    this._options.enable = this._options.enable ?? true;
    this._state = RECOGNIZER_STATE.Possible;
    this.simultaneous = {};
    this.requireFails = [];
  }

  get type(): RECOGNIZER_TYPE {
    return this._type;
  }

  get id(): string {
    return this._id;
  }

  get state(): RECOGNIZER_STATE {
    return this._state;
  }

  get options(): RecognizerOptions {
    return this._options;
  }

  get hasRequireFailures(): boolean {
    return this.requireFails.length > 0;
  }

  set state(state: RECOGNIZER_STATE) {
    this._state = state;
  }

  public set(options: RecognizerOptions) {
    this._options = { ...this._options, ...options };
    this.manager?.touchAction.update();
  }

  public canRecognizeWith(otherRecognizer: Recognizer): boolean {
    return !!this.simultaneous[otherRecognizer.id];
  }

  public recognizeWith(recognizer: Recognizer | Recognizer[]) {
    if (
      isArray(recognizer) &&
      invokeArrayArg(recognizer, 'recognizeWidth', this as Record<string, unknown>)
    ) {
      return this;
    }

    const otherRecognizer = this.getRecognizerByNameIfManager(recognizer as Recognizer, this);
    if (otherRecognizer && !this.simultaneous[otherRecognizer.id]) {
      this.simultaneous[otherRecognizer.id] = otherRecognizer;
      otherRecognizer.recognizeWith(this);
    }
    return this;
  }

  public dropRecognizeWith(recognizer: Recognizer | Recognizer[]) {
    if (
      isArray(recognizer) &&
      invokeArrayArg(recognizer, 'recognizeWidth', this as Record<string, unknown>)
    ) {
      return this;
    }

    const otherRecognizer = this.getRecognizerByNameIfManager(recognizer as Recognizer, this);
    if (otherRecognizer) {
      delete this.simultaneous[otherRecognizer.id];
    }
    return this;
  }

  public requireFailure(recognizer: Recognizer | Recognizer[]) {
    if (
      isArray(recognizer) &&
      invokeArrayArg(recognizer, 'requireFailure', this as Record<string, unknown>)
    ) {
      return this;
    }

    const otherRecognizer = this.getRecognizerByNameIfManager(recognizer as Recognizer, this);
    if (otherRecognizer && !this.requireFails.includes(otherRecognizer)) {
      this.requireFails.push(otherRecognizer);
      otherRecognizer.requireFailure(this);
    }
    return this;
  }

  public dropRequireFailure(recognizer: Recognizer | Recognizer[]) {
    if (
      isArray(recognizer) &&
      invokeArrayArg(recognizer, 'dropRequireFailure', this as Record<string, unknown>)
    ) {
      return this;
    }

    const otherRecognizer = this.getRecognizerByNameIfManager(recognizer as Recognizer, this);
    if (otherRecognizer) {
      const index = this.requireFails.indexOf(otherRecognizer);
      if (index > -1) {
        this.requireFails.splice(index, 1);
      }
    }
    return this;
  }

  private emit(data: InputData) {
    const emit = (event: RECOGNIZER_TYPE) => {
      this.manager?.emit(event, data);
    };

    emit(this.type);
  }

  protected tryEmit(data: InputData) {
    if (this.canEmit()) {
      this.emit(data);
    }
    this._state = RECOGNIZER_STATE.Failed;
  }

  private canEmit() {
    for (const item of this.requireFails) {
      if (
        item._state !== RECOGNIZER_STATE.Ended &&
        item._state !== RECOGNIZER_STATE.Possible
      ) {
        return false;
      }
    }
    return true;
  }

  public recognize(data: InputData) {
    const dataClone = { ...data };
    if (!this._options.enable) {
      this.reset();
      this._state = RECOGNIZER_STATE.Failed;
    }

    if (this._state & (RECOGNIZER_STATE.Ended | RECOGNIZER_STATE.Canceled | RECOGNIZER_STATE.Failed)) {
      this._state = RECOGNIZER_STATE.Possible;
    }

    this._state = this.process(dataClone);

    if (
      this._state & 
      (RECOGNIZER_STATE.Began | RECOGNIZER_STATE.Changed | RECOGNIZER_STATE.Ended | RECOGNIZER_STATE.Canceled)
    ) {
      this.tryEmit(dataClone);
    }
  }

  public abstract getTouchAction(): IActions[];

  public abstract reset(): void;

  public abstract process(inputData: InputData): RECOGNIZER_STATE;

  private getRecognizerByNameIfManager(otherRecognizer: Recognizer, recognizer: Recognizer) {
    if (recognizer.manager) {
      return recognizer.manager.get(otherRecognizer.type);
    }
    return otherRecognizer;
  }
}

export abstract class AttrRecognizer extends Recognizer {

  constructor(options: RecognizerOptions) {
    super(options);
  }

  public abstract getTouchAction(): IActions[];

  protected attrTest(inputData: InputData): boolean {
    const { pointers } = this.options;
    return pointers === 0 || inputData.pointers?.length === pointers;
  }

  public reset() {
    this.state = RECOGNIZER_STATE.Possible;
  }

  public process(inputData: InputData): RECOGNIZER_STATE {
    const { eventType } = inputData;

    const isRecognized = this.state & (RECOGNIZER_STATE.Began | RECOGNIZER_STATE.Changed);
    const isValid = this.attrTest(inputData);

    if (isRecognized && (eventType! & INPUT_STATE.Cancel || !isValid)) {
      return RECOGNIZER_STATE.Canceled;
    } else if (isRecognized || isValid) {
      if (eventType! & INPUT_STATE.End) {
        return RECOGNIZER_STATE.Ended;
      } else if (!(this.state & RECOGNIZER_STATE.Began)) {
        return RECOGNIZER_STATE.Began;
      }
      return RECOGNIZER_STATE.Changed;
    }

    return RECOGNIZER_STATE.Failed;
  }
}
