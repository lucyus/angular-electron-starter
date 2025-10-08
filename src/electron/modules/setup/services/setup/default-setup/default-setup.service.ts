import { app } from "electron";
import { AbstractSetupService } from "../abstract-setup";

export class DefaultSetupService extends AbstractSetupService {

  public constructor() {
    super();
  }

  public get isBeforeInstallSetup(): boolean {
    return false;
  }

  public get isDuringInstallSetup(): boolean {
    return false;
  }

  public get isAfterInstallSetup(): boolean {
    return false;
  }

  public get isBeforeUpdateSetup(): boolean {
    return false;
  }

  public get isDuringUpdateSetup(): boolean {
    return false;
  }

  public get isAfterUpdateSetup(): boolean {
    return false;
  }

  public get isBeforeUninstallSetup(): boolean {
    return false;
  }

  public get isDuringUninstallSetup(): boolean {
    return false;
  }

  public get isAfterUninstallSetup(): boolean {
    return false;
  }

  public async beforeInstall(): Promise<void> {
    app.quit();
  }

  public async install(): Promise<void> {
    app.quit();
  }

  public async afterInstall(): Promise<void> {
    app.quit();
  }

  public async beforeUpdate(): Promise<void> {
    app.quit();
  }

  public async update(): Promise<void> {
    app.quit();
  }

  public async afterUpdate(): Promise<void> {
    app.quit();
  }

  public async beforeUninstall(): Promise<void> {
    app.quit();
  }

  public async uninstall(): Promise<void> {
    app.quit();
  }

  public async afterUninstall(): Promise<void> {
    app.quit();
  }

}
