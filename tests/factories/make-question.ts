import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Question, QuestionConstructorProps } from '@/domain/entities/question'
import { faker } from '@faker-js/faker'

export function makeQuestion(
  overrides: Partial<QuestionConstructorProps> = {},
) {
  const question = Question.create({
    title: faker.lorem.paragraph(),
    content: faker.lorem.paragraphs(5),
    authorId: new UniqueEntityId(),
    ...overrides,
  })

  return question
}
