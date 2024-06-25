import { randomUUID } from 'node:crypto'

export interface AnswerConstructorProps {
  id?: string
  content: string
}

export class Answer {
  public id: string
  public content: string

  constructor({ content, id }: AnswerConstructorProps) {
    this.id = id ?? randomUUID()
    this.content = content
  }
}
