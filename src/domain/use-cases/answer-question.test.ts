import { InMemoryAnswersRepository } from 'tests/repositories/in-memory-answers-repository'
import { AnswerQuestionUseCase } from './answer-question'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: AnswerQuestionUseCase

describe('AnswerQuestion', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    sut = new AnswerQuestionUseCase({
      answersRepository: inMemoryAnswersRepository,
    })
  })

  test('create an answer', async () => {
    const { answer } = await sut.execute({
      authorId: 'author-id',
      questionId: 'question-id',
      content: 'This is the content of the answer',
    })

    expect(answer.authorId.toValue()).toEqual('author-id')
    expect(answer.questionId.toValue()).toEqual('question-id')
    expect(answer.content).toEqual('This is the content of the answer')
  })
})
