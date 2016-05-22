import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { NihNutritionAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(NihNutritionAppComponent, [HTTP_PROVIDERS]);