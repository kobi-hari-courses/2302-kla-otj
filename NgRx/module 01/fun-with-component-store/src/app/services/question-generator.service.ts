import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionGeneratorService {

  constructor() { }

  delay(millis: number): Promise<void> {
    return new Promise(res => setTimeout(res, millis));
  }

  async randomizeQuestion(): Promise<Question> {
    const i = Math.ceil(Math.random() * 9);
    const j = Math.ceil(Math.random() * 9);

    const caption = `How much is ${i} * ${j}`;
    const answers = new Array(4).fill(i * j);

    const correct = Math.floor(Math.random() * 4);
    const offset = Math.ceil(Math.random() * 3) + 1;
    for (let n = 0; n < 4; n++) {
      answers[n] = i * j + (n - correct) * offset;
    }

    await this.delay(3000);

    return {
      caption, 
      answers, 
      correctAnswer: correct
    }
    
  }
}
