import { Answer } from '../entities/answer'
import { AnswerRepository } from '../repositories/answer-repository'

export interface AnswerQuestionUseCaseExecuteProps {
  instructorId: string
  questionId: string
  content: string
}

export class AnswerQuestionUseCase {
  private answerRepository: AnswerRepository

  constructor({ answerRepository }: { answerRepository: AnswerRepository }) {
    this.answerRepository = answerRepository
  }

  async execute({
    instructorId,
    questionId,
    content,
  }: AnswerQuestionUseCaseExecuteProps) {
    const answer = new Answer({ instructorId, questionId, content })

    await this.answerRepository.create(answer)

    return answer
  }
}
