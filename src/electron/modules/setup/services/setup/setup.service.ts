import { AbstractSetupService } from './abstract-setup';
import { DefaultSetupService, MacOsSetupService, UnixSetupService, WindowsSetupService } from '.';

export class SetupService {

  protected _delegate: AbstractSetupService;

  public constructor() {
    const platform = process.platform;
    switch (platform) {
      case 'win32':
      case 'cygwin':
        this._delegate = new WindowsSetupService();
        break;
      case 'darwin':
        this._delegate = new MacOsSetupService();
        break;
      case 'linux':
      case 'freebsd':
      case 'openbsd':
      case 'sunos':
      case 'aix':
      case 'netbsd':
      case 'haiku':
      case 'android':
        this._delegate = new UnixSetupService();
        break;
      default:
        this._delegate = new DefaultSetupService();
        break;
    }
  }

  public get shouldSetup(): boolean {
    return this._delegate.shouldSetup;
  }

  public async handleSetup() {
    this._delegate.handleSetup();
  }

}
