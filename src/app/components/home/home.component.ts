import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { LucideAngularModule, Eye, ArrowRight, Shield, Clock, Award  } from 'lucide-angular';

@Component({
  selector: 'app-home',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Output() startTest = new EventEmitter<void>();
  EyeIcon = Eye;
  ArrowRightIcon = ArrowRight;
  ShieldIcon = Shield;
  ClockIcon = Clock;
  AwardIcon = Award;

}
