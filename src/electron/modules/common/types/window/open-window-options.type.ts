import type Electron from 'electron';

export type OpenWindowOptions = {
  window?: Electron.BrowserWindowConstructorOptions,
  spa?: {
    route?: string
    hotReload?: boolean
  }
};
