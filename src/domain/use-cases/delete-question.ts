import { Question } from '../entities/question'
import { QuestionsRepository } from '../repositories/questions-repository'

export interface DeleteQuestionUseCaseRequest {
  questionId: string
  authorId: string
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
    authorId,
  }: DeleteQuestionUseCaseRequest): Promise<DeleteQuestionUseCaseResponse> {
    const question = await this.questionsRepository.findById(questionId)

    if (!question) {
      throw new Error('Could not find question!')
    }

    if (authorId !== question.authorId.toValue()) {
      throw new Error('Not allowed!')
    }

    await this.questionsRepository.delete(question)

    return { question }
  }
}
