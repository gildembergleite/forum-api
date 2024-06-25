import { Entity } from '../core/entities/entity'
import { UniqueEntityId } from './value-objects/unique-entity-id'

export interface AnswerConstructorProps {
  content: string
  instructorId: UniqueEntityId
  questionId: UniqueEntityId
  createdAt: Date
  updatedAt?: Date
}

export class Answer extends Entity<AnswerConstructorProps> {
  get content() {
    return this.props.content
  }

  constructor(props: AnswerConstructorProps, id?: string) {
    super({ id, props })
  }
}
