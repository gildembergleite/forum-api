import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Question, QuestionConstructorProps } from '@/domain/entities/question'
import { Slug } from '@/domain/entities/value-objects/slug'

export function makeQuestion(
  overrides: Partial<QuestionConstructorProps> = {},
) {
  const question = Question.create({
    title: 'Example slug test title',
    slug: Slug.createFromText({ text: 'example-slug-test' }),
    content: 'Example slug test content',
    authorId: new UniqueEntityId(),
    ...overrides,
  })

  return question
}
