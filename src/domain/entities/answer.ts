import { Entity } from '../core/entities/entity'

export interface AnswerConstructorProps {
  content: string
  instructorId: string
  questionId: string
}

export class Answer extends Entity<AnswerConstructorProps> {
  get content() {
    return this.props.content
  }

  constructor(props: AnswerConstructorProps, id?: string) {
    super({ id, props })
  }
}
