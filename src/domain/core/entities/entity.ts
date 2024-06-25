import { UniqueEntityId } from '../../entities/value-objects/unique-entity-id';

export class Entity<T> {
  private _id: UniqueEntityId
  protected props: T

  get id() {
    return this._id
  }

  constructor({ id, props }: { id?: string; props: T }) {
    this._id = new UniqueEntityId({ value: id })
    this.props = props
  }
}
