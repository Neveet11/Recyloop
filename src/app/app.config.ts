import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled', // Restaura la posición de desplazamiento al navegar
        anchorScrolling: 'enabled' // Habilita el desplazamiento a elementos con fragmentos
      })
    ),
    provideHttpClient()
  ]
};
