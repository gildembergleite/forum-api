import { Entity } from '../core/entities/entity'

export interface InstructorConstructorProps {
  name: string
}

export class Instructor extends Entity<InstructorConstructorProps> {
  constructor(props: InstructorConstructorProps, id?: string) {
    super({ id, props })
  }
}
