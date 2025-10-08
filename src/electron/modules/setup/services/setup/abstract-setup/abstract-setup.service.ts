export abstract class AbstractSetupService {

  public constructor() { }

  public abstract get isBeforeInstallSetup(): boolean;
  public abstract get isDuringInstallSetup(): boolean;
  public abstract get isAfterInstallSetup(): boolean;
  public abstract get isBeforeUpdateSetup(): boolean;
  public abstract get isDuringUpdateSetup(): boolean;
  public abstract get isAfterUpdateSetup(): boolean;
  public abstract get isBeforeUninstallSetup(): boolean;
  public abstract get isDuringUninstallSetup(): boolean;
  public abstract get isAfterUninstallSetup(): boolean;

  public get shouldSetup(): boolean {
    return this.isBeforeInstallSetup
      || this.isDuringInstallSetup
      || this.isAfterInstallSetup
      || this.isBeforeUpdateSetup
      || this.isDuringUpdateSetup
      || this.isAfterUpdateSetup
      || this.isBeforeUninstallSetup
      || this.isDuringUninstallSetup
      || this.isAfterUninstallSetup;
  }

  public abstract beforeInstall(): Promise<void>;
  public abstract install(): Promise<void>;
  public abstract afterInstall(): Promise<void>;
  public abstract beforeUpdate(): Promise<void>;
  public abstract update(): Promise<void>;
  public abstract afterUpdate(): Promise<void>;
  public abstract beforeUninstall(): Promise<void>;
  public abstract uninstall(): Promise<void>;
  public abstract afterUninstall(): Promise<void>;

  public async handleSetup(): Promise<void> {
    if (this.isBeforeInstallSetup) return this.beforeInstall();
    if (this.isDuringInstallSetup) return this.install();
    if (this.isAfterInstallSetup) return this.afterInstall();
    if (this.isBeforeUpdateSetup) return this.beforeUpdate();
    if (this.isDuringUpdateSetup) return this.update();
    if (this.isAfterUpdateSetup) return this.afterUpdate();
    if (this.isBeforeUninstallSetup) return this.beforeUninstall();
    if (this.isDuringUninstallSetup) return this.uninstall();
    if (this.isAfterUninstallSetup) return this.afterUninstall();
  }

}
