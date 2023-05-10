import { ComponentStore, tapResponse } from "@ngrx/component-store";
import { ExamState, INITIAL_EXAM_STATE } from "./exam.state";
import { Injectable } from "@angular/core";
import { Answer } from "../models/answer.model";
import { Observable, map, switchAll, switchMap, tap } from "rxjs";
import { QuestionGeneratorService } from "../services/question-generator.service";

@Injectable()
export class ExamStore extends ComponentStore<ExamState> {

    constructor(private generator: QuestionGeneratorService) {
        super(INITIAL_EXAM_STATE);
    }

    readonly questions$ = this.select(state => state.questions);
    readonly answers$ = this.select(state => state.answers);
    readonly indexOfCurrentQuestion$ = this.select(this.answers$, all => all.length);
    readonly currentQuestion$ = this.select(this.questions$, this.indexOfCurrentQuestion$, 
        (all, index) => all[index]);

    readonly reset = this.updater(() => INITIAL_EXAM_STATE);
    readonly answerCurrentQuestion = this.updater((state, answerIndex: number) => {
        const currentQuestion = state.questions[state.answers.length];

        const newAnswer: Answer = {
            userAnswer: answerIndex, 
            isCorrect: answerIndex === currentQuestion.correctAnswer
        }

        const newState: ExamState = {
            ...state, 
            answers: [...state.answers, newAnswer]
        }
        return newState;
    });

    readonly log = this.effect((txt$: Observable<string>) => txt$.pipe(
        map(val => val.toUpperCase()), 
        tapResponse({
            next: val => console.log('We are logging ', val), 
            error: err => console.log('There was an error: ', err), 
            finalize: () => console.log('Finalizing the effet log')
        })
    ));

    readonly addQuestion = this.effect(($: Observable<void>) => $.pipe(
        tapResponse({
            next: _ => this.patchState({loadingNewQuestion: true}), 
            error: err => {}
        }),
        map(_ => this.generator.randomizeQuestion()), 
        switchAll(), 
        tapResponse({
            next: question => this.patchState(state => ({questions: [...state.questions, question], loadingNewQuestion: false})), 
            error: err => console.warn('Failed to create new question'), 
            finalize: () => this.patchState({loadingNewQuestion: false})
        })
    ));
}