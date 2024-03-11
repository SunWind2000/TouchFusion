class TouchFusionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TouchFusionError';

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, TouchFusionError);
    }
  }
}

export const throwError = (message: string): never => {
  throw new TouchFusionError(message);
};

export const throwWarning = (message: string): void => {
  console.warn(`[TouchFusionWarning]: ${message}`);
};
