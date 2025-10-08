import { AbstractController } from "../../../common";
import { SetupService } from "../../services";

export class SetupController extends AbstractController {

  protected readonly _setupService: SetupService;

  public constructor() {
    super();
    this._setupService = new SetupService();
  }
  public async _run(): Promise<void> {
    return this._setupService.handleSetup();
  }

  public async _proceed(): Promise<boolean> {
    return !this._setupService.shouldSetup;
  }

}
