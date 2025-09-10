import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { TestAnswer } from './model/test-answer';
import { VisionTestComponent } from './components/vision-test/vision-test.component';
import { ResultsComponent } from './components/results/results.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MarketComponent } from './components/market/market.component';
import { OffersComponent } from './components/offers/offers.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    NavigationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ojo x Ojo';
}
