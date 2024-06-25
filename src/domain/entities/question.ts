import { Entity } from '../core/entities/entity'
import { Optional } from '../core/types/optional'
import { Slug } from './value-objects/slug'
import { UniqueEntityId } from './value-objects/unique-entity-id'

export interface QuestionConstructorProps {
  title: string
  slug: Slug
  content: string
  studentId: UniqueEntityId
  bestAnswerId?: UniqueEntityId
  createdAt: Date
  updatedAt?: Date
}

export class Question extends Entity<QuestionConstructorProps> {
  static create(props: Optional<QuestionConstructorProps, 'createdAt'>, id?: UniqueEntityId) {
    const propsWithCreatedAt = {
      ...props,
      createdAt: new Date()
    }
    const question = new Question({ props: propsWithCreatedAt, id })
    return question
  }
}
