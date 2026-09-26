import { expect, it } from 'vitest'
import { hello, MSG } from '../src/index.js'

it('return Hello', () => {
  // Given
  const expected = MSG
  // When
  const result = hello()
  // Then
  expect(result).toBe(expected)
})
