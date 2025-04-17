import { test, describe } from 'node:test'
import assert from 'node:assert'
import solvePuzzle from './sliding-puzzle.js'

describe('Sliding Puzzle Tests', () => {
  test('Zero move to solve', () => {
    const startBoard = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 0]
    ]
    assert.equal(solvePuzzle(startBoard), 0)
  })

  test('One move to solve', () => {
    const startBoard = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 0, 8]
    ]
    assert.equal(solvePuzzle(startBoard), 1)
  })

  test('Two moves to solve', () => {
    const startBoard = [
      [1, 2, 3],
      [4, 0, 6],
      [7, 5, 8]
    ]
    assert.equal(solvePuzzle(startBoard), 2)
  })

  test('Three moves to solve', () => {
    const startBoard = [
      [1, 2, 3],
      [0, 4, 6],
      [7, 5, 8]
    ]
    assert.equal(solvePuzzle(startBoard), 3)
  })

  test('Four moves to solve', () => {
    const startBoard = [
      [1, 2, 0],
      [4, 6, 3],
      [7, 5, 8]
    ]
    assert.equal(solvePuzzle(startBoard), 4)
  })

  test('Seven moves to solve', () => {
    const startBoard = [
      [4, 1, 3],
      [7, 2, 5],
      [8, 0, 6]
    ]
    assert.equal(solvePuzzle(startBoard), 7)
  })

  test('Twenty two moves to solve', () => {
    const startBoard = [
      [5, 6, 0],
      [4, 1, 2],
      [3, 8, 7]
    ]
    assert.equal(solvePuzzle(startBoard), 22)
  })
})

