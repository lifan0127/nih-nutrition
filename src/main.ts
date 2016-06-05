import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';

// import { ModalWindowService } from './app/shared/modal-window.service';
import { NihNutritionAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(NihNutritionAppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS
  // ModalWindowService
]);