export type OpenWindowOptions = {
  window?: Electron.BrowserWindowConstructorOptions,
  spa?: {
    route?: string
    hotReload?: boolean
  }
};
