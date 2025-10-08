import { Injectable } from '@angular/core';
import { ElectronService } from '../electron';
import { SafeElectronService } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  public constructor(
    protected readonly _electronService: ElectronService
  ) { }

  public isElectron(electronService?: ElectronService): electronService is SafeElectronService {
    return (electronService || this._electronService).isAvailable();
  }

  public isBrowser(): boolean {
    return !!window && !this.isElectron();
  }

}
