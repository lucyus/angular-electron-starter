import { ApplicationController, LifecycleService } from "./modules/main";
import { SetupController } from "./modules/setup";

LifecycleService.bootstrap(
  SetupController,
  ApplicationController
);
