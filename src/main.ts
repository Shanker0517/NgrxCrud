import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideStore } from '@ngrx/store';

bootstrapApplication(AppComponent,appConfig
//   {providers: [
//     provideRouter(routes),
//     provideClientHydration(),
//     provideAnimationsAsync(),
//     provideAnimationsAsync(),
//     provideStore()
// ]}
)
  .catch((err) => console.error(err));
