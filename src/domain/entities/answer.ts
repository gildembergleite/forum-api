import { randomUUID } from 'node:crypto'

export interface AnswerConstructorProps {
  id?: string
  content: string
  instructorId: string
  questionId: string
}

export class Answer {
  public id: string
  public content: string
  public instructorId: string
  public questionId: string

  constructor({
    id,
    content,
    instructorId,
    questionId,
  }: AnswerConstructorProps) {
    this.id = id ?? randomUUID()
    this.content = content
    this.instructorId = instructorId
    this.questionId = questionId
  }
}
