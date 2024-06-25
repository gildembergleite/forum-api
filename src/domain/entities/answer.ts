import { Entity } from '../core/entities/entity'
import { UniqueEntityId } from '../core/entities/unique-entity-id'
import { Optional } from '../core/types/optional'

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

  get instructorId() {
    return this.props.instructorId
  }

  get questionId() {
    return this.props.questionId
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  static create(
    props: Optional<AnswerConstructorProps, 'createdAt'>,
    id?: UniqueEntityId
  ) {
    const propsWithCreatedAt = {
      ...props,
      createdAt: new Date()
    }
    const answer = new Answer({ props: propsWithCreatedAt, id })
    return answer
  }
}
