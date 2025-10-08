import { AbstractController, CommonConfiguration, WindowService } from "../../../common";

export class ApplicationController extends AbstractController {

  protected readonly _windowService: WindowService;

  public constructor() {
    super();
    this._windowService = new WindowService();
  }

  protected async _run(): Promise<void> {
    await this._windowService.open({
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
        route: "/",
        hotReload: process.argv.includes("--hot-reload"),
      },
    });
  }

  protected async _proceed(): Promise<boolean> {
    return true;
  }

}
