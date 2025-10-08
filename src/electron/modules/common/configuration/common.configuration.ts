import path from 'path';

export class CommonConfiguration {

  public static readonly ELECTRON_SOURCE_PATH = path.resolve(__dirname, '../../../../electron/');
  public static readonly BROWSER_SOURCE_PATH = path.resolve(__dirname, '../../../../browser/');
  public static logoPath = path.resolve(CommonConfiguration.BROWSER_SOURCE_PATH, 'favicon.ico');
  public static indexPath = path.resolve(CommonConfiguration.BROWSER_SOURCE_PATH, 'index.html');
  public static preloadPath = path.resolve(CommonConfiguration.ELECTRON_SOURCE_PATH, 'preload.js');

  private constructor() { }

}
