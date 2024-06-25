import { randomUUID } from 'node:crypto'

export interface QuestionConstructorProps {
  id?: string
  title: string
  content: string
}

export class Question {
  public id: string
  public title: string
  public content: string

  constructor({ title, content, id }: QuestionConstructorProps) {
    this.id = id ?? randomUUID()
    this.title = title
    this.content = content
  }
}
