import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/models/question.model';
import { ExamStore } from 'src/app/redux/exam.store';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss'], 
  providers: [ExamStore]
})
export class ExamComponent {

  currentQuestion$ = this.store.currentQuestion$;

  constructor(private store: ExamStore){
    this.store.state$.subscribe(state => console.log('state changed', state));

  }

  onReset() {
    this.store.reset();
  }

  onAnswer(answerIndex: number) {
    this.store.answerCurrentQuestion(answerIndex);
    this.store.log(`user answered ${answerIndex}`);
  }

  addNewQuestion() {
    this.store.addQuestion();
  }

}
