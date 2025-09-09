import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Award, Eye, Heart, Lightbulb, LucideAngularModule, Target, Users } from 'lucide-angular';

@Component({
  selector: 'app-about-us',
  imports: [ CommonModule, LucideAngularModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  EyeIcon = Eye
  UsersIcon = Users;
  AwardIcon = Award;
  HeartIcon = Heart;
  TargetIcon = Target;
  LightbulbIcon = Lightbulb;
}
