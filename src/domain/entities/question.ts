import { Entity } from '../core/entities/entity'
import { Slug } from './value-objects/slug'

export interface QuestionConstructorProps {
  title: string
  slug: Slug
  content: string
  studentId: string
}

export class Question extends Entity<QuestionConstructorProps> {
  constructor(props: QuestionConstructorProps, id?: string) {
    super({ id, props })
  }
}
