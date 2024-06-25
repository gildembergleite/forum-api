import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'

test('create an answer', () => {
  const answerQuestion = new AnswerQuestionUseCase()

  const answer = answerQuestion.execute({
    instructorId: 'instructor-id',
    questionId: 'question-id',
    content: 'This is the content of the answer',
  })

  expect(answer.content).toEqual('This is the content of the answer')
})
