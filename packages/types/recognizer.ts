import type {
  RECOGNIZER_TYPE, 
  RecognizerOptions, 
  IActions, 
  RECOGNIZER_STATE 
} from '@/constants';
import type { Input } from '@/types';
import type { Recognizer } from '@/core/recognizer';

export interface IRecognizer {
  id: string
  options: RecognizerOptions;
  type: RECOGNIZER_TYPE;
  hasRequireFailures: boolean;
  canRecognizeWith: (otherRecognizer: Recognizer) => boolean;
  set: (options: RecognizerOptions) => void;
  getTouchAction: () => IActions;
  recognizeWith: (recognizer: Recognizer | Recognizer[]) => Recognizer;
  dropRecognizeWith: (recognizer: Recognizer | Recognizer[]) => Recognizer;
  requireFailure: (recognizer: Recognizer | Recognizer[]) => Recognizer;
  dropRequireFailure: (recognizer: Recognizer | Recognizer[]) => Recognizer;
  recognize: (data: Input) => void;
  reset: () => void;
  process: (inputData: Input) => RECOGNIZER_STATE;
}
