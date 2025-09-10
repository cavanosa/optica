import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LucideAngularModule, Eye, ArrowRight, Shield, Clock, Award  } from 'lucide-angular';

@Component({
  selector: 'app-home',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  EyeIcon = Eye;
  ArrowRightIcon = ArrowRight;
  ShieldIcon = Shield;
  ClockIcon = Clock;
  AwardIcon = Award;

  constructor(private router: Router) {}

  startTest() {
    this.router.navigate(['/test']);
  }

}
