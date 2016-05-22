import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';

import { NihNutritionAppComponent, environment } from './app/';
import { DataService } from './app/shared/data.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(NihNutritionAppComponent, [
  HTTP_PROVIDERS,
  DataService
]);