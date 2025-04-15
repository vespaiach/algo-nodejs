import { test, describe } from 'node:test'
import assert from 'node:assert'
import DynamicArray from './index.js'

describe('Dynamic Array - Basic Operations', () => {
  test('append(x) - should add an element to the end of the array', () => {
    const dArray = new DynamicArray()
    dArray.append(1)
    assert.deepEqual(dArray.__base, [1])
    dArray.append(2)
    assert.deepEqual(dArray.__base, [1, 2])
    dArray.append(3)
    assert.deepEqual(dArray.__base, [1, 2, 3, undefined])
    dArray.append(4)
    assert.deepEqual(dArray.__base, [1, 2, 3, 4])
    dArray.append(4)
    assert.deepEqual(dArray.__base, [1, 2, 3, 4, 4, undefined, undefined, undefined])
  })

  test('get(i) - should return the element at index i', () => {
    const dArray = new DynamicArray()
    dArray.append(3)
    dArray.append(2)
    dArray.append(1)

    assert.equal(dArray.get(0), 3)
    assert.equal(dArray.get(1), 2)
    assert.equal(dArray.get(2), 1)
  })

  test('get(i) - should return undefined if index is out of bounds', () => {
    const dArray = new DynamicArray()
    dArray.append(3)
    assert.strictEqual(dArray.get(0), 3)
    assert.strictEqual(dArray.get(1), undefined)
  })

  test('set(i, x) - should set the element at index i to x', () => {
    const dArray = new DynamicArray()
    dArray.append(1)
    dArray.append(2)
    dArray.append(3)
    dArray.set(1, 5)
    assert.deepEqual(dArray.__base, [1, 5, 3, undefined])
  })

  test('set(i, x) - should throw an error if index is out of bounds', () => {
    const dArray = new DynamicArray()
    try {
      dArray.set(2, 5)
    } catch (e) {
      assert.strictEqual(e instanceof Error, true)
    }

    dArray.append(1)
    try {
      dArray.set(2, 5)
    } catch (e) {
      assert.strictEqual(e instanceof Error, true)
    }
  })

  test('size() - should return the number of elements in the array', () => {
    const dArray = new DynamicArray()
    assert.strictEqual(dArray.size(), 0)
    dArray.append(1)
    assert.strictEqual(dArray.size(), 1)
    dArray.append(2)
    assert.strictEqual(dArray.size(), 2)
    dArray.append(3)
    assert.strictEqual(dArray.size(), 3)
  })

  test('popBack() - should remove the last element from the array and return it', () => {
    const dArray = new DynamicArray()
    dArray.append(1)
    dArray.append(2)
    dArray.append(3)
    assert.equal(dArray.popBack(), 3)
    assert.deepEqual(dArray.__base, [1, 2, undefined, undefined])
  })

  test('popBack() - should throw an error if the array is empty', () => {
    const dArray = new DynamicArray()
    try {
      dArray.popBack()
    } catch (e) {
      assert.equal(e instanceof Error, true)
    }
  })

  test('popBack() - should shrink the underline array to save space', () => {
    const dArray = new DynamicArray()
    for (let i = 0; i < 8; i++) {
      dArray.append(i + 1)
    }
    assert.deepEqual(dArray.__base, [1, 2, 3, 4, 5, 6, 7, 8])
    for (let i = 0; i < 6; i++) {
      dArray.popBack()
    }
    assert.deepEqual(dArray.__base, [1, 2, undefined, undefined])
  })

  test('pop(i) - should remove the element at index i and return it', () => {
    const dArray = new DynamicArray()
    dArray.append(1)
    dArray.append(2)
    dArray.append(3)
    dArray.append(4)
    assert.equal(dArray.pop(1), 2)
    assert.deepEqual(dArray.__base, [1, 3, 4, undefined])
    assert.equal(dArray.pop(0), 1)
    assert.deepEqual(dArray.__base, [3, 4, undefined, undefined])
    assert.equal(dArray.pop(1), 4)
    assert.deepEqual(dArray.__base, [3, undefined])
    assert.equal(dArray.pop(0), 3)
    assert.deepEqual(dArray.__base, [undefined, undefined])
  })

  test('pop(i) - should throw an error if index is out of bounds', () => {
    const dArray = new DynamicArray()
    try {
      dArray.pop(2)
    } catch (e) {
      assert.equal(e instanceof Error, true)
    }

    dArray.append(1)
    try {
      dArray.pop(2)
    } catch (e) {
      assert.equal(e instanceof Error, true)
    }
  })

  test('pop(i) - should shrink the underline array to save space', () => {
    const dArray = new DynamicArray()
    for (let i = 0; i < 10; i++) {
      dArray.append(i + 1)
    }
    assert.deepEqual(dArray.__base, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, undefined, undefined, undefined, undefined, undefined, undefined])
    for (let i = 0; i < 6; i++) {
      dArray.pop(0)
    }
    assert.deepEqual(dArray.__base, [7, 8, 9, 10, undefined, undefined, undefined, undefined])
  })

  test('contains(x) - should return true if the array contains x, false otherwise', () => {
    const dArray = new DynamicArray()
    dArray.append(1)
    dArray.append(2)
    dArray.append(3)
    assert.strictEqual(dArray.contains(2), true)
    assert.strictEqual(dArray.contains(4), false)
  })

  test('insert(i, x) - should insert x at index i', () => {
    const dArray = new DynamicArray()
    dArray.append(1)
    assert.deepEqual(dArray.__base, [1])
    dArray.insert(0, 3)
    assert.deepEqual(dArray.__base, [3, 1])
    dArray.insert(1, 2)
    assert.deepEqual(dArray.__base, [3, 2, 1, undefined])
  })

  test('insert(i, x) - should throw an error if index is out of bounds', () => {
    const dArray = new DynamicArray()
    dArray.append(1)
    try {
      dArray.insert(2, 5)
    } catch (e) {
      assert.strictEqual(e instanceof Error, true)
    }
  })

  test('remove(x) - should remove the first occurrence of x from the array', () => {
    const dArray = new DynamicArray()
    for (let i = 0; i < 9; i++) {
      dArray.append(1)
    }
    dArray.set(1, 2)
    dArray.append(2)
    assert.deepEqual(dArray.__base, [1, 2, 1, 1, 1, 1, 1, 1, 1, 2, undefined, undefined, undefined, undefined, undefined, undefined])
    dArray.remove(2)
    assert.deepEqual(dArray.__base, [1, 1, 1, 1, 1, 1, 1, 1, 2, undefined, undefined, undefined, undefined, undefined, undefined, undefined])
    dArray.remove(1)
    assert.deepEqual(dArray.__base, [1, 1, 1, 1, 1, 1, 1, 2, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined])
		dArray.remove(1)
    assert.deepEqual(dArray.__base, [1, 1, 1, 1, 1, 1, 2, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined])
		dArray.remove(1)
    assert.deepEqual(dArray.__base, [1, 1, 1, 1, 1, 2, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined])
		dArray.remove(1)
    assert.deepEqual(dArray.__base, [1, 1, 1, 1, 2, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined])
		dArray.remove(1)
    assert.deepEqual(dArray.__base, [1, 1, 1, 2, undefined, undefined, undefined, undefined])
		dArray.remove(1)
    assert.deepEqual(dArray.__base, [1, 1, 2, undefined, undefined, undefined, undefined, undefined])
		dArray.remove(1)
    assert.deepEqual(dArray.__base, [1, 2, undefined, undefined])
  })
})
