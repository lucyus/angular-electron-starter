import { app } from "electron";
import { AbstractController } from "../../../common";

export class LifecycleService {

  private constructor() { }

  public static async bootstrap(...ControllerClasses: (new() => AbstractController)[]) {
    try {
      await app.whenReady();
      for (const ControllerClass of ControllerClasses) {
        const controller = new ControllerClass();
        const canProceed = await controller.start();
        if (!canProceed) return;
      }
    }
    catch (error) {
      console.error(error);
      process.exit(1);
    }
  }

}
