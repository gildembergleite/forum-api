import { makeQuestion } from 'tests/factories/make-question'
import { InMemoryQuestionsRepository } from 'tests/repositories/in-memory-questions-repository'
import { DeleteQuestionUseCase } from './delete-question'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: DeleteQuestionUseCase

describe('Get Question By Slug', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()

    sut = new DeleteQuestionUseCase({
      questionsRepository: inMemoryQuestionsRepository,
    })
  })

  it('should be able to get a question by slug', async () => {
    Array.from({ length: 5 }).forEach(() => {
      const question = makeQuestion()
      inMemoryQuestionsRepository.create(question)
    })

    const deletedQuestion = inMemoryQuestionsRepository.questions[3]

    const initialQuestionsLength = inMemoryQuestionsRepository.questions.length

    const { question } = await sut.execute({
      questionId: deletedQuestion.id.toValue(),
    })

    const isQuestionExist = inMemoryQuestionsRepository.questions.some(
      (question) => question.id.toValue() === deletedQuestion.id.toValue(),
    )

    const isExcludedQuestion = initialQuestionsLength - 1 === 4

    expect(question).toBeTruthy()
    expect(question).toEqual(deletedQuestion)
    expect(isQuestionExist).toBe(false)
    expect(isExcludedQuestion).toBe(true)
  })
})
