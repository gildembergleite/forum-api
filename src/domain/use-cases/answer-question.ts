import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Answer } from '@/domain/entities/answer'
import { AnswersRepository } from '@/domain/repositories/answers-repository'

export interface AnswerQuestionUseCaseRequest {
  authorId: string
  questionId: string
  content: string
}

export interface AnswerQuestionUseCaseResponse {
  answer: Answer
}

export class AnswerQuestionUseCase {
  private answersRepository: AnswersRepository

  constructor({ answersRepository }: { answersRepository: AnswersRepository }) {
    this.answersRepository = answersRepository
  }

  async execute({
    authorId,
    questionId,
    content,
  }: AnswerQuestionUseCaseRequest): Promise<AnswerQuestionUseCaseResponse> {
    const answer = Answer.create({
      authorId: new UniqueEntityId(authorId),
      questionId: new UniqueEntityId(questionId),
      content,
    })

    await this.answersRepository.create(answer)

    return { answer }
  }
}
