import { randomUUID } from 'node:crypto'
import { Slug } from './value-objects/slug'

export interface QuestionConstructorProps {
  id?: string
  title: string
  slug: Slug
  content: string
  studentId: string
}

export class Question {
  public id: string
  public title: string
  public slug: Slug
  public content: string
  public studentId: string

  constructor({
    id,
    title,
    slug,
    content,
    studentId,
  }: QuestionConstructorProps) {
    this.id = id ?? randomUUID()
    this.title = title
    this.slug = slug
    this.content = content
    this.studentId = studentId
  }
}
