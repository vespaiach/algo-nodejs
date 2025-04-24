import { test } from 'node:test'
import { generateValidStringsWithBacktracking, generateValidStringsWithBFS } from './print-valid-strings.js'

test('print valid strings with backtracking', () => {
  const startingCharacters = ['a', 'b', 'c']
  const nextCharacterMap = {
    a: ['b', 'c'],
    b: ['a'],
    c: ['a', 'b']
  }
  const n = 4

  generateValidStringsWithBacktracking(startingCharacters, nextCharacterMap, n)
})

test('print valid strings with BFS', () => {
  const startingCharacters = ['a', 'b', 'c']
  const nextCharacterMap = {
    a: ['b', 'c'],
    b: ['a'],
    c: ['a', 'b']
  }
  const n = 4

  generateValidStringsWithBFS(startingCharacters, nextCharacterMap, n)
})