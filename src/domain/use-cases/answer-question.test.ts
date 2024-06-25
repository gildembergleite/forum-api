import { Answer } from '@/domain/entities/answer'
import { AnswerRepository } from '@/domain/repositories/answer-repository'
import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'

const mockAnswerRepository: AnswerRepository = {
  create: async (answer: Answer) => {
    console.log(answer)
  },
}

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase({
    answerRepository: mockAnswerRepository,
  })

  const answer = await answerQuestion.execute({
    instructorId: 'instructor-id',
    questionId: 'question-id',
    content: 'This is the content of the answer',
  })

  expect(answer.content).toEqual('This is the content of the answer')
})
