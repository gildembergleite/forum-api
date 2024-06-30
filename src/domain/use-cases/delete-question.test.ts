import { UniqueEntityId } from '@/core/entities/unique-entity-id'
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
    const MAX_LENGTH = 10

    Array.from({ length: MAX_LENGTH }).forEach(() => {
      const question = makeQuestion()
      inMemoryQuestionsRepository.create(question)
    })

    const randomIndex = Math.floor(Math.random() * (MAX_LENGTH - 0 + 1)) + 0
    const deletedQuestion = inMemoryQuestionsRepository.questions[randomIndex]

    const { question } = await sut.execute({
      questionId: deletedQuestion.id.toValue(),
      authorId: deletedQuestion.authorId.toValue(),
    })

    expect(question).toBeTruthy()
    expect(question).toEqual(deletedQuestion)
    expect(inMemoryQuestionsRepository.questions).toHaveLength(MAX_LENGTH - 1)
  })

  it('should not be able to delete from another author user', async () => {
    const newQuestion = makeQuestion({
      authorId: new UniqueEntityId('author-id'),
    })

    await inMemoryQuestionsRepository.create(newQuestion)

    async function deleteQuestion() {
      return await sut.execute({
        questionId: newQuestion.id.toValue(),
        authorId: 'author-id-2',
      })
    }

    expect(deleteQuestion()).rejects.toBeInstanceOf(Error)
  })
})
