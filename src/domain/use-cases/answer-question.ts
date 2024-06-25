import { Answer } from '../entities/answer'

export interface AnswerQuestionUseCaseExecuteProps {
  instructorId: string
  questionId: string
  content: string
}

export class AnswerQuestionUseCase {
  execute({ content }: AnswerQuestionUseCaseExecuteProps) {
    const answer = new Answer({ content })

    return answer
  }
}
