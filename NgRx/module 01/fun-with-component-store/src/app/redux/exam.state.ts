import { ALL_QUESTIONS } from "../models/all-questions";
import { Answer } from "../models/answer.model";
import { Question } from "../models/question.model";

export interface ExamState {
    readonly questions: Question[];
    readonly answers: Answer[];
    readonly loadingNewQuestion: boolean;
}

export const INITIAL_EXAM_STATE: ExamState = {
    questions: ALL_QUESTIONS, 
    answers: [], 
    loadingNewQuestion: false
}