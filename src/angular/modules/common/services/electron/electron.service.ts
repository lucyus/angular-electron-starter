import { Injectable } from '@angular/core';
import { ElectronApi, SafeElectronService } from '../../../common';

@Injectable({
  providedIn: 'root'
})
export class ElectronService {

  protected _api: ElectronApi | undefined;

  public constructor() {
    this._api = window.electron;
  }

  public get api(): ElectronApi | undefined {
    return this._api;
  }

  public isAvailable(): this is SafeElectronService {
    return !!this.api;
  }

}
