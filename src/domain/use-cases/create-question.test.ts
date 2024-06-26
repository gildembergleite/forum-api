import { Question } from '../entities/question'
import { QuestionsRepository } from '../repositories/questions-repository'
import { CreateQuestionUseCase } from './create-question'

const mockQuestionsRepository: QuestionsRepository = {
  create: async (question: Question) => {
    console.log(question)
  },
}

test('create a question', async () => {
  const createQuestion = new CreateQuestionUseCase({
    questionsRepository: mockQuestionsRepository,
  })

  const { question } = await createQuestion.execute({
    authorId: 'author-id',
    title: 'This is the title of the question',
    content: 'This is the content of the question',
  })

  expect(question.authorId.toValue()).toEqual('author-id')
  expect(question.title).toEqual('This is the title of the question')
  expect(question.content).toEqual('This is the content of the question')
})
