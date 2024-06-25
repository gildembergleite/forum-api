import { Entity } from '../core/entities/entity'
import { UniqueEntityId } from '../core/entities/unique-entity-id'
import { Optional } from '../core/types/optional'
import { Slug } from './value-objects/slug'

export interface QuestionConstructorProps {
  title: string
  slug: Slug
  content: string
  studentId: UniqueEntityId
  bestAnswerId?: UniqueEntityId
  createdAt: Date
  updatedAt?: Date
}

export class Question extends Entity<QuestionConstructorProps> {
  get title() {
    return this.props.title
  }

  get slug() {
    return this.props.slug
  }

  get content() {
    return this.props.content
  }

  get studentId() {
    return this.props.studentId
  }

  get bestAnswerId() {
    return this.props.bestAnswerId
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  get isNew() {
    const startDate = new Date()
    const endDate = new Date(this.createdAt)
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000
    const differenceInMilliseconds = Math.abs(
      startDate.getTime() - endDate.getTime(),
    )
    const differenceInDays = differenceInMilliseconds / oneDayInMilliseconds

    return differenceInDays < 3
  }

  get excerpt() {
    return this.content.substring(0, 120).trim().concat('...')
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  set title(text: string) {
    this.props.title = text
    this.props.slug = Slug.createFromText({ text })
    this.touch()
  }

  set content(text: string) {
    this.props.content = text
    this.touch()
  }

  set bestAnswerId(bestAnswerId: UniqueEntityId | undefined) {
    this.props.bestAnswerId = bestAnswerId
    this.touch()
  }

  static create(
    props: Optional<QuestionConstructorProps, 'createdAt' | 'slug'>,
    id?: UniqueEntityId,
  ) {
    const propsWithCreatedAt = {
      ...props,
      slug: props.slug ?? Slug.createFromText({ text: props.title }),
      createdAt: new Date(),
    }
    const question = new Question({ props: propsWithCreatedAt, id })
    return question
  }
}
