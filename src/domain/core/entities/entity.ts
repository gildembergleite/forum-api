import { UniqueEntityId } from '../../entities/value-objects/unique-entity-id';

export class Entity<T> {
  private _id: UniqueEntityId
  protected props: T

  get id() {
    return this._id
  }

  constructor({ id, props }: { props: T; id?: UniqueEntityId }) {
    this._id = id ?? new UniqueEntityId()
    this.props = props
  }
}
