import { Entity } from '../core/entities/entity'
import { Optional } from '../core/types/optional'
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

  static create(props: Optional<AnswerConstructorProps, 'createdAt'>, id?: UniqueEntityId) {
    const propsWithCreatedAt = {
      ...props,
      createdAt: new Date()
    }
    const answer = new Answer({ props: propsWithCreatedAt, id })
    return answer
  }
}
