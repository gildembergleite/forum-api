import { InMemoryQuestionsRepository } from 'tests/repositories/in-memory-questions-repository'
import { CreateQuestionUseCase } from './create-question'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: CreateQuestionUseCase

describe('CreateQuestion', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new CreateQuestionUseCase({
      questionsRepository: inMemoryQuestionsRepository,
    })
  })

  it('should be able to create a question', async () => {
    const { question } = await sut.execute({
      authorId: 'author-id',
      title: 'This is the title of the question',
      content: 'This is the content of the question',
    })

    expect(question.authorId.toValue()).toEqual('author-id')
    expect(question.title).toEqual('This is the title of the question')
    expect(question.content).toEqual('This is the content of the question')
  })
})
