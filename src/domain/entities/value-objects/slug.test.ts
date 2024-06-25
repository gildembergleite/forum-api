import { expect, test } from 'vitest'
import { Slug } from './slug'

test('build slug by text', () => {
  const slug = Slug.createFromText({
    text: '  An ,# . `` example__ te.xt@@@  ',
  })

  expect(slug.value).toEqual('an-example-text')
})
