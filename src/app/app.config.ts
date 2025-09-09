import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { LucideAngularModule, ArrowUpRight, File, Home, Menu, UserCheck, StethoscopeIcon, EyeIcon} from 'lucide-angular'

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(LucideAngularModule.pick({ File, Home, Menu, UserCheck, ArrowUpRight, StethoscopeIcon, EyeIcon })),
    provideClientHydration(withEventReplay()),
    
  ]
};
