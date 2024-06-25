import { randomUUID } from "node:crypto"

export interface StudentConstructorProps {
  id?: string
  name: string
}

export class Student {
  public id: string
  public name: string

  constructor({ name, id }: StudentConstructorProps) {
    this.id = id ?? randomUUID()
    this.name = name
  }
}