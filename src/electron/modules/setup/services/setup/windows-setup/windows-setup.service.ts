import { app } from "electron";
import path from "path";
import { DefaultSetupService } from "../default-setup";
import { CommonConfiguration, ProcessService, WindowService } from "../../../../common";

export class WindowsSetupService extends DefaultSetupService {

  protected readonly _processService: ProcessService;
  protected readonly _windowService: WindowService;

  public constructor() {
    super();
    this._processService = new ProcessService();
    this._windowService = new WindowService();
  }

  public get isDuringInstallSetup(): boolean {
    return process.argv.includes("--squirrel-install");
  }

  public get isAfterInstallSetup(): boolean {
    return process.argv.includes("--squirrel-firstrun");
  }

  public get isBeforeUpdateSetup(): boolean {
    return process.argv.includes("--squirrel-obsolete");
  }

  public get isAfterUpdateSetup(): boolean {
    return process.argv.includes("--squirrel-updated");
  }

  public get isDuringUninstallSetup(): boolean {
    return process.argv.includes("--squirrel-uninstall");
  }

  public async install() {
    await this._openSetupWindow("install");
    await this._createDesktopShortcut();
    // close the app before Squirrel does preventively
    setTimeout(app.quit, 5000);
  }

  public async afterInstall() {
    await this._openSetupWindow("afterInstall");
  }

  public async beforeUpdate(): Promise<void> {
    await this._openSetupWindow("beforeUpdate");
  }

  public async afterUpdate(): Promise<void> {
    await this._openSetupWindow("afterUpdate");
  }

  public async uninstall(): Promise<void> {
    await this._openSetupWindow("uninstall");
    await this._removeDesktopShortcut();
    // close the app before Squirrel does to avoid incomplete uninstall
    setTimeout(app.quit, 5000);
  }

  protected async _openSetupWindow(stage: string): Promise<Electron.CrossProcessExports.BrowserWindow> {
    return this._windowService.open({
      window: {
        width: 800,
        height: 600,
        icon: CommonConfiguration.logoPath,
        webPreferences: {
          preload: CommonConfiguration.preloadPath,
          nodeIntegration: true,
        },
      },
      spa: {
        route: `/setup?stage=${stage}`,
        hotReload: process.argv.includes("--hot-reload"),
      },
    });
  }

  protected async _createDesktopShortcut() {
    const appExecutablePath = process.execPath;
    const updateExecutablePath = path.resolve(path.dirname(appExecutablePath), "..", "Update.exe");
    return this._processService.execute(updateExecutablePath, [`--createShortcut=${appExecutablePath}`], { detached: true });
  }

  protected async _removeDesktopShortcut() {
    const appExecutablePath = process.execPath;
    const updateExecutablePath = path.resolve(path.dirname(appExecutablePath), "..", "Update.exe");
    return this._processService.execute(updateExecutablePath, [`--removeShortcut=${appExecutablePath}`], { detached: true });
  }

}
