import { Injectable } from '@angular/core';
import { TestAnswer } from '../model/test-answer';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  private answers: TestAnswer[] = [];

  setAnswers(answers: TestAnswer[]) {
    this.answers = answers;
  }

  getAnswers(): TestAnswer[] {
    return this.answers;
  }

  clear() {
    this.answers = [];
  }
}
