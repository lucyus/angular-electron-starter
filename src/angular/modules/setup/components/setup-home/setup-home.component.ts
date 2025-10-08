import { Component, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ElectronService, PlatformService } from '../../../common';

@Component({
  selector: 'setup-home',
  templateUrl: './setup-home.component.html',
  styleUrl: './setup-home.component.scss'
})
export class SetupHomeComponent implements OnInit, OnDestroy {

  protected _subscriptions: Subscription[];

  public stage: WritableSignal<string | undefined>;
  public readonly browserUrl: string;
  public isElectron: boolean;
  public readonly electronAppExecPath?: string;

  constructor(
    protected _activatedRoute: ActivatedRoute,
    protected readonly _electron: ElectronService,
      protected readonly _platform: PlatformService,
  ) {
    this._subscriptions = [];
    this.stage = signal(undefined);
    this.isElectron = false;
    this.browserUrl = window.location.href;
    if (this._platform.isElectron(this._electron)) {
      this.isElectron = true;
      this.electronAppExecPath = this._electron.api.process().execPath;
    }
  }

  public ngOnInit(): void {
    this._subscriptions.push(
      this._activatedRoute.queryParams.subscribe((params) => {
        this.stage.set(params["stage"]);
      }),
    );
  }

  public ngOnDestroy(): void {
    for (const subscription of this._subscriptions) {
      subscription.unsubscribe();
    }
  }

}
