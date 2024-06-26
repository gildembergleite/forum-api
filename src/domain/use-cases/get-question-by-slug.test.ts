import { InMemoryQuestionsRepository } from 'tests/repositories/in-memory-questions-repository'
import { Slug } from '../entities/value-objects/slug'
import { CreateQuestionUseCase } from './create-question'
import { GetQuestionBySlugUseCase } from './get-question-by-slug'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let createQuestionUseCase: CreateQuestionUseCase
let sut: GetQuestionBySlugUseCase

describe('Get Question By Slug', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()

    createQuestionUseCase = new CreateQuestionUseCase({
      questionsRepository: inMemoryQuestionsRepository,
    })

    sut = new GetQuestionBySlugUseCase({
      questionsRepository: inMemoryQuestionsRepository,
    })
  })

  it('should be able to get a question by slug', async () => {
    const { question: newQuestion } = await createQuestionUseCase.execute({
      title: 'Example slug test title',
      content: 'Example slug test content',
      authorId: 'author-id',
    })

    const slug = Slug.createFromText({ text: newQuestion.title }).value

    const { question } = await sut.execute({ slug })

    expect(question.title).toEqual(newQuestion.title)
  })
})
