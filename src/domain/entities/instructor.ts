import { Entity } from '../core/entities/entity'
import { UniqueEntityId } from './value-objects/unique-entity-id'

export interface InstructorConstructorProps {
  name: string
}

export class Instructor extends Entity<InstructorConstructorProps> {
  static create(props: InstructorConstructorProps, id?: UniqueEntityId) {
    const instructor = new Instructor({ props, id })
    return instructor
  }
}
