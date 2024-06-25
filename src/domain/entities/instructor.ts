import { Entity } from '../../core/entities/entity'
import { UniqueEntityId } from '../../core/entities/unique-entity-id'

export interface InstructorConstructorProps {
  name: string
}

export class Instructor extends Entity<InstructorConstructorProps> {
  get name() {
    return this.props.name
  }

  static create(props: InstructorConstructorProps, id?: UniqueEntityId) {
    const instructor = new Instructor({ props, id })
    return instructor
  }
}
