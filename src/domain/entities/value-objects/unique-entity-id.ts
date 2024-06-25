import { v4 as uuid } from 'uuid';

export class UniqueEntityId {
  private value: string

  toValue() {
    return this.value
  }

  constructor({ value }: { value?: string }) {
    this.value = value ?? uuid()
  }
}