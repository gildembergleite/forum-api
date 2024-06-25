import { randomUUID } from 'node:crypto'

export interface QuestionConstructorProps {
  id?: string
  title: string
  content: string
  studentId: string
}

export class Question {
  public id: string
  public title: string
  public content: string
  public studentId: string

  constructor({ id, title, content, studentId }: QuestionConstructorProps) {
    this.id = id ?? randomUUID()
    this.title = title
    this.content = content
    this.studentId = studentId
  }
}
