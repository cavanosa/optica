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
    NavigationComponent,
    HomeComponent,
    VisionTestComponent,
    ResultsComponent,
    AboutUsComponent,
    MarketComponent,
    OffersComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'optica';
  currentView: 'home' | 'about' | 'market' | 'offers' | 'test' | 'results' = 'home';
  answers: TestAnswer[] = [];

  startTest() {
    this.answers = [];
    this.currentView = 'test';
  }

  completeTest(testAnswers: TestAnswer[]) {
    this.answers = testAnswers;
    this.currentView = 'results';
  }

  resetToHome() {
    this.currentView = 'home';
    this.answers = [];
  }

  navigateTo(view: 'home' | 'about' | 'market' | 'offers') {
    this.currentView = view;
    this.answers = [];
  }
}
