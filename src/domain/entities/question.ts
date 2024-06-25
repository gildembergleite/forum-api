import { Entity } from '../core/entities/entity'
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
  constructor(props: QuestionConstructorProps, id?: string) {
    super({ id, props })
  }
}
