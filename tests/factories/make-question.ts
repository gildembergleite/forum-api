import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Question, QuestionConstructorProps } from '@/domain/entities/question'

export function makeQuestion(
  overrides: Partial<QuestionConstructorProps> = {},
) {
  const question = Question.create({
    title: 'Example slug test title',
    content: 'Example slug test content',
    authorId: new UniqueEntityId(),
    ...overrides,
  })

  return question
}
