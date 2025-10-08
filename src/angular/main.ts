import { bootstrapApplication } from '@angular/platform-browser';
import { mainConfig } from './modules/main/configurations';
import { MainRootComponent } from './modules/main/components';

bootstrapApplication(MainRootComponent, mainConfig)
  .catch((err) => console.error(err));
