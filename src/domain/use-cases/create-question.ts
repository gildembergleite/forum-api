import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Question } from '../entities/question'
import { QuestionsRepository } from '../repositories/questions-repository'

export interface CreateQuestionUseCaseRequest {
  authorId: string
  title: string
  content: string
}

export interface CreateQuestionUseCaseResponse {
  question: Question
}

export class CreateQuestionUseCase {
  private questionsRepository: QuestionsRepository

  constructor({
    questionsRepository,
  }: {
    questionsRepository: QuestionsRepository
  }) {
    this.questionsRepository = questionsRepository
  }

  async execute({
    authorId,
    title,
    content,
  }: CreateQuestionUseCaseRequest): Promise<CreateQuestionUseCaseResponse> {
    const question = Question.create({
      authorId: new UniqueEntityId(authorId),
      title,
      content,
    })

    await this.questionsRepository.create(question)

    return { question }
  }
}
