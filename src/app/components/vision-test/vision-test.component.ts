import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { LucideAngularModule, ChevronLeft, ChevronRight } from 'lucide-angular';
import { TestAnswer } from '../../model/test-answer';
import { TestQuestion } from '../../model/test-question';
import { TestService } from '../../services/test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vision-test',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './vision-test.component.html',
  styleUrl: './vision-test.component.css'
})
export class VisionTestComponent {

  Math = Math;

  currentQuestion = 0;
  answers: TestAnswer[] = [];

  ChevronLeftIcon = ChevronLeft;
  ChevronRightIcon = ChevronRight;

  questions: TestQuestion[] = [
    {
      id: 1,
      title: "Prueba de Agudeza Visual - Letras Grandes",
      description: "¿Puedes leer claramente las letras que se muestran?",
      image: `
        <div class="flex flex-col items-center justify-center h-40 bg-white rounded-lg border-2 border-gray-200">
          <div class="text-6xl font-bold text-black tracking-wider">
            E F P
          </div>
        </div>
      `,
      options: [
        { text: "Veo todas las letras claramente", score: 0 },
        { text: "Veo las letras pero algo borrosas", score: 1 },
        { text: "Solo veo algunas letras", score: 2 },
        { text: "No puedo distinguir las letras", score: 3 }
      ]
    },
    {
      id: 2,
      title: "Prueba de Agudeza Visual - Letras Medianas",
      description: "¿Qué tan claramente puedes ver estas letras más pequeñas?",
      image: `
        <div class="flex flex-col items-center justify-center h-40 bg-white rounded-lg border-2 border-gray-200">
          <div class="text-4xl font-bold text-black tracking-wider mb-2">
            T O Z
          </div>
          <div class="text-3xl font-bold text-black tracking-wider">
            L P E D
          </div>
        </div>
      `,
      options: [
        { text: "Veo todas las letras perfectamente", score: 0 },
        { text: "Veo la mayoría, algunas borrosas", score: 1 },
        { text: "Solo veo las letras de arriba", score: 2 },
        { text: "No distingo las letras claramente", score: 3 }
      ]
    },
    {
      id: 3,
      title: "Prueba de Contraste",
      description: "¿Puedes distinguir claramente los círculos grises del fondo?",
      image: `
        <div class="flex items-center justify-center h-40 bg-gray-100 rounded-lg border-2 border-gray-200">
          <div class="grid grid-cols-3 gap-4">
            <div class="w-8 h-8 bg-gray-300 rounded-full"></div>
            <div class="w-8 h-8 bg-gray-400 rounded-full"></div>
            <div class="w-8 h-8 bg-gray-500 rounded-full"></div>
            <div class="w-8 h-8 bg-gray-600 rounded-full"></div>
            <div class="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div class="w-8 h-8 bg-gray-800 rounded-full"></div>
          </div>
        </div>
      `,
      options: [
        { text: "Veo todos los círculos claramente", score: 0 },
        { text: "Veo la mayoría de los círculos", score: 1 },
        { text: "Solo veo los círculos más oscuros", score: 2 },
        { text: "No puedo distinguir los círculos", score: 3 }
      ]
    },
    {
      id: 4,
      title: "Prueba de Letras Pequeñas",
      description: "¿Puedes leer el texto pequeño que aparece abajo?",
      image: `
        <div class="flex flex-col items-center justify-center h-40 bg-white rounded-lg border-2 border-gray-200">
          <div class="text-2xl font-bold text-black tracking-wider mb-4">
            D F P O T E C
          </div>
          <div class="text-lg font-bold text-black tracking-wider mb-3">
            F E L O P Z D
          </div>
          <div class="text-base font-bold text-black tracking-wide">
            P E D F C Z F
          </div>
        </div>
      `,
      options: [
        { text: "Leo todas las líneas sin problema", score: 0 },
        { text: "Leo las dos primeras líneas bien", score: 1 },
        { text: "Solo leo la línea superior claramente", score: 2 },
        { text: "No puedo leer ninguna línea claramente", score: 3 }
      ]
    },
    {
      id: 5,
      title: "Prueba de Formas Geométricas",
      description: "¿Puedes identificar claramente las formas que se muestran?",
      image: `
        <div class="flex items-center justify-center h-40 bg-white rounded-lg border-2 border-gray-200">
          <div class="grid grid-cols-4 gap-6">
            <div class="w-8 h-8 bg-blue-600 rounded-full"></div>
            <div class="w-8 h-8 bg-green-600"></div>
            <div class="w-8 h-8 bg-red-600 transform rotate-45"></div>
            <div class="w-8 h-8 bg-yellow-600"></div>
          </div>
        </div>
      `,
      options: [
        { text: "Veo todas las formas y colores claramente", score: 0 },
        { text: "Veo las formas pero los colores se ven apagados", score: 1 },
        { text: "Solo distinguo algunas formas", score: 2 },
        { text: "No puedo distinguir las formas claramente", score: 3 }
      ]
    },
    {
      id: 6,
      title: "Prueba de Visión de Detalle",
      description: "¿Puedes ver los pequeños detalles en el siguiente patrón?",
      image: `
        <div class="flex items-center justify-center h-40 bg-white rounded-lg border-2 border-gray-200">
          <div class="text-center">
            <div class="text-xs font-mono text-black leading-tight mb-2">
              ■ ■ □ ■ □ ■ ■<br/>
              □ ■ ■ □ ■ □ ■<br/>
              ■ □ ■ ■ □ ■ □<br/>
              □ ■ □ ■ ■ □ ■
            </div>
            <div class="text-sm text-gray-600">Patrón de cuadros</div>
          </div>
        </div>
      `,
      options: [
        { text: "Veo todos los cuadros y el patrón claramente", score: 0 },
        { text: "Veo los cuadros pero el patrón se ve borroso", score: 1 },
        { text: "Solo veo algunos cuadros", score: 2 },
        { text: "No puedo distinguir el patrón", score: 3 }
      ]
    }
  ];

  get progress(): number {
    return ((this.currentQuestion + 1) / this.questions.length) * 100;
  }

  get question(): TestQuestion {
    return this.questions[this.currentQuestion];
  }





  constructor(private testService: TestService, private router: Router) {}

  handleAnswer(answer: string, score: number): void {
    const newAnswer: TestAnswer = {
      question: this.currentQuestion + 1,
      answer,
      score
    };

    const updatedAnswers = [...this.answers.filter(a => a.question !== this.currentQuestion + 1), newAnswer];
    this.answers = updatedAnswers;

    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++;
    } else {
      // Guardamos las respuestas en el servicio
      this.testService.setAnswers(updatedAnswers);

      // Navegamos a results
      this.router.navigate(['/results']);
    }
  }

  goToPrevious(): void {
    if (this.currentQuestion > 0) this.currentQuestion--;
  }
}
