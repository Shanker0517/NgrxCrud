import { reduce } from 'rxjs';
import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StoreModule, provideState, provideStore } from '@ngrx/store';
import { AssocaiteReducer } from './Store/AssociateStore/Associate.Reducer';
import { provideEffects } from '@ngrx/effects';
import { AssociateEffects } from './Store/AssociateStore/Associate.Effect';
import { HttpClientModule } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    provideStore(),
    provideState({ name: 'associate', reducer: AssocaiteReducer }),
    provideEffects(AssociateEffects),
    importProvidersFrom(HttpClientModule),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
