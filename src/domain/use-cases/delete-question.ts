import { Question } from '../entities/question'
import { QuestionsRepository } from '../repositories/questions-repository'

export interface DeleteQuestionUseCaseRequest {
  questionId: string
}

export interface DeleteQuestionUseCaseResponse {
  question: Question | null
}

export class DeleteQuestionUseCase {
  private questionsRepository: QuestionsRepository

  constructor({
    questionsRepository,
  }: {
    questionsRepository: QuestionsRepository
  }) {
    this.questionsRepository = questionsRepository
  }

  async execute({
    questionId,
  }: DeleteQuestionUseCaseRequest): Promise<DeleteQuestionUseCaseResponse> {
    const question =
      await this.questionsRepository.deleteByQuestionId(questionId)

    if (!question) {
      throw new Error('Could not find question!')
    }

    return { question }
  }
}
