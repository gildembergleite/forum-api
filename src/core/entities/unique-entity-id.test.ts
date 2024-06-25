import { validate as isUUID, v4 as uuid } from 'uuid'
import { describe, expect, it } from 'vitest'
import { UniqueEntityId } from './unique-entity-id'

describe('create UniqueEntityId', () => {
  it('should generate a unique UUID when value is not provided', () => {
    const entityId = new UniqueEntityId()
    expect(isUUID(entityId.toValue())).toBe(true)
  })

  it('should use the given value when specified', () => {
    const generateUUID = uuid()
    const entityId = new UniqueEntityId(generateUUID)
    expect(entityId.toValue()).toBe(generateUUID)
  })

  it('should return the correct value using the getter', () => {
    const entityId = new UniqueEntityId()
    expect(isUUID(entityId.toValue())).toBe(true)
  })
})
