import { Entity } from '../core/entities/entity'
import { UniqueEntityId } from './value-objects/unique-entity-id'

export interface StudentConstructorProps {
  name: string
}

export class Student extends Entity<StudentConstructorProps> {
  static create(props: StudentConstructorProps, id?: UniqueEntityId) {
    const student = new Student({ props, id })
    return student
  }
}
