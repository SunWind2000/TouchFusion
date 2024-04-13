import { IManagerOptions } from './types';

export enum STOP_TYPE {
  Stop = 1,
  ForceStop = 2
}

export const DEFAULT_OPTIONS: IManagerOptions = {
  domEvents: false,
  touchActions: ['compute'],
  enable: true,
  preventDefault: false,
  stopPropagation: false,
  stopImmediatePropagation: false,
  inputTarget: null,
  cssProps: {
    userSelect: 'none',
    touchAction: 'none'
  }
};

