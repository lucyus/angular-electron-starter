import { Component } from '@angular/core';
import { ElectronService, PlatformService } from '../../../common';

@Component({
  selector: 'main-home',
  templateUrl: './main-home.component.html',
  styleUrl: './main-home.component.scss'
})
export class MainHomeComponent {

  public readonly platformName: string;
  public readonly platformVersion: string;
  public readonly browserUrl: string;
  public readonly electronAppExecPath?: string;

  constructor(
    protected readonly _electron: ElectronService,
    protected readonly _platform: PlatformService,
  ) {
    this.browserUrl = window.location.href;
    if (this._platform.isElectron(this._electron)) {
      this.platformName = "Electron";
      this.platformVersion = this._electron.api.process().versions["electron"]!;
      this.electronAppExecPath = this._electron.api.process().execPath;
    }
    else if (this._platform.isBrowser()) {
      this.platformName = "Browser";
      this.platformVersion = "";
    }
    else {
      this.platformName = "Unknown";
      this.platformVersion = "";
    }
  }

}
