import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { NihNutritionAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(NihNutritionAppComponent);

