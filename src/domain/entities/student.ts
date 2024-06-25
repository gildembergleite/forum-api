import { Entity } from '../core/entities/entity'

export interface StudentConstructorProps {
  name: string
}

export class Student extends Entity<StudentConstructorProps> {
  constructor(props: StudentConstructorProps, id?: string) {
    super({ id, props })
  }
}
