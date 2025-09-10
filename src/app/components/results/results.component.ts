import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Calendar, CircleCheck, Eye, LucideAngularModule, TriangleAlert } from 'lucide-angular';
import { TestAnswer } from '../../model/test-answer';
import { ResultAnalysis } from '../../model/result-analysis';
import { TestService } from '../../services/test.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-results',
  imports: [CommonModule, LucideAngularModule ],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  answers: TestAnswer[] = [];
  
  constructor(private testService: TestService, private router: Router) {}

  ngOnInit() {
    this.answers = this.testService.getAnswers();
  }

  restart() {
    this.testService.clear();
    this.router.navigate(['/']); // vuelve al home
  }


  Math = Math;

  EyeIcon = Eye;
  AlertTriangleIcon = TriangleAlert;
  CheckCircleIcon = CircleCheck;
  CalendarIcon = Calendar;

  get totalScore(): number {
    return this.answers.reduce((sum, answer) => sum + answer.score, 0);
  }

  get maxScore(): number {
    return this.answers.length * 3;
  }

  get scorePercentage(): number {
    return (this.totalScore / this.maxScore) * 100;
  }

  get result(): ResultAnalysis {
    if (this.scorePercentage <= 20) {
      return {
        level: 'Excelente',
        color: 'text-green-600',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        icon: CircleCheck,
        message: 'Tus resultados sugieren que tu visión está en excelente estado.',
        recommendation: 'Se recomienda mantener revisiones regulares cada 1-2 años para preservar tu salud visual.',
        urgency: 'low'
      };
    } else if (this.scorePercentage <= 40) {
      return {
        level: 'Bueno',
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        icon: Eye,
        message: 'Tus resultados sugieren que tu visión está generalmente bien, pero podrían existir algunas áreas de mejora.',
        recommendation: 'Te recomendamos programar una consulta con nuestro optometrista para una evaluación más detallada.',
        urgency: 'medium'
      };
    } else {
      return {
        level: 'Atención Requerida',
        color: 'text-orange-600',
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-200',
        icon: TriangleAlert,
        message: 'Tus resultados sugieren que podrías tener un problema de visión que requiere atención profesional.',
        recommendation: 'Recomendamos encarecidamente agendar una cita con nuestro optometrista lo antes posible para un examen completo.',
        urgency: 'high'
      };
    }
  }

  getResultCardClass(): string {
    return `${this.result.bgColor} ${this.result.borderColor} border-2 rounded-2xl p-8 mb-6`;
  }

  getActionButtonClass(): string {
    const baseClass = 'px-8 py-4 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200';
    return this.result.urgency === 'high' 
      ? `${baseClass} bg-orange-600 hover:bg-orange-700`
      : `${baseClass} bg-blue-600 hover:bg-blue-700`;
  }

   restartTest() {
    this.testService.clear();
    this.router.navigate(['/']); // vuelve al home
  }

}