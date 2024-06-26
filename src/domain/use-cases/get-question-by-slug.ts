import { Question } from '../entities/question'
import { QuestionsRepository } from '../repositories/questions-repository'

export interface GetQuestionBySlugUseCaseRequest {
  slug: string
}

export interface GetQuestionBySlugUseCaseResponse {
  question: Question
}

export class GetQuestionBySlugUseCase {
  private questionsRepository: QuestionsRepository
  constructor({
    questionsRepository,
  }: {
    questionsRepository: QuestionsRepository
  }) {
    this.questionsRepository = questionsRepository
  }

  async execute({
    slug,
  }: GetQuestionBySlugUseCaseRequest): Promise<GetQuestionBySlugUseCaseResponse> {
    const question = await this.questionsRepository.findBySlug(slug)

    if (!question) {
      throw new Error('Could not find question!')
    }

    return { question }
  }
}
