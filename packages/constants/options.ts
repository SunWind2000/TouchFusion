import { IActions } from './touch-action';

export interface ManagerOptions {
  domEvents?: boolean;
  touchActions?: IActions[];
  enable?: boolean;
  inputTarget?: Element | null;
  cssProps?: {
    userSelect?: string;
    touchSelect?: string;
    touchCallout?: string;
    contentZooming?: string;
    userDrag?: string;
    tapHighlightColor?: string;
  };
}

export const DEFAULT_OPTIONS: ManagerOptions = {
  domEvents: false,
  touchActions: ['compute'],
  enable: true,
  inputTarget: null,
  cssProps: {
    userSelect: 'none',
    touchSelect: 'none',
    touchCallout: 'none',
    contentZooming: 'none',
    userDrag: 'none',
    tapHighlightColor: 'rgba(0, 0, 0, 0)'
  }
};
