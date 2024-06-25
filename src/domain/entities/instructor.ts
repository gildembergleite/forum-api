import { randomUUID } from 'node:crypto'

export interface InstructorConstructorProps {
  id?: string
  name: string
}

export class Instructor {
  public id: string
  public name: string

  constructor({ name, id }: InstructorConstructorProps) {
    this.id = id ?? randomUUID()
    this.name = name
  }
}
