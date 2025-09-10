import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MarketComponent } from './components/market/market.component';
import { VisionTestComponent } from './components/vision-test/vision-test.component';
import { ResultsComponent } from './components/results/results.component';
import { OffersComponent } from './components/offers/offers.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutUsComponent },
    { path: 'market', component: MarketComponent },
    { path: 'offers', component: OffersComponent },
    { path: 'test', component: VisionTestComponent },
    { path: 'results', component: ResultsComponent },
    { path: '**', redirectTo: '' }
];
