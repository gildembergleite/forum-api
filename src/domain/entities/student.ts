import { Entity } from '../core/entities/entity'
import { UniqueEntityId } from '../core/entities/unique-entity-id'

export interface StudentConstructorProps {
  name: string
}

export class Student extends Entity<StudentConstructorProps> {
  get name() {
    return this.props.name
  }

  static create(props: StudentConstructorProps, id?: UniqueEntityId) {
    const student = new Student({ props, id })
    return student
  }
}
