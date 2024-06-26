import { makeQuestion } from 'tests/factories/make-question'
import { InMemoryQuestionsRepository } from 'tests/repositories/in-memory-questions-repository'
import { GetQuestionBySlugUseCase } from './get-question-by-slug'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: GetQuestionBySlugUseCase

describe('Get Question By Slug', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()

    sut = new GetQuestionBySlugUseCase({
      questionsRepository: inMemoryQuestionsRepository,
    })
  })

  it('should be able to get a question by slug', async () => {
    const newQuestion = makeQuestion()
    inMemoryQuestionsRepository.create(newQuestion)

    const { question } = await sut.execute({ slug: newQuestion.slug.value })

    expect(question.title).toEqual(newQuestion.title)
  })
})
