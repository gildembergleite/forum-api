import { Answer } from '@/domain/entities/answer'
import { AnswersRepository } from '@/domain/repositories/answers-repository'
import { AnswerQuestionUseCase } from './answer-question'

const mockAnswersRepository: AnswersRepository = {
  create: async (answer: Answer) => {
    console.log(answer)
  },
}

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase({
    answersRepository: mockAnswersRepository,
  })

  const answer = await answerQuestion.execute({
    authorId: 'author-id',
    questionId: 'question-id',
    content: 'This is the content of the answer',
  })

  expect(answer.content).toEqual('This is the content of the answer')
})
