import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {environment} from './app/environment';
import {WebApp} from './app/web.component';

if (environment.production) {
  enableProdMode();
}

bootstrap(WebApp);
