import { test, expect, describe } from 'node:test'

describe('Dynamic Array - Basic Operations', () => {
  test('append(x) - should add an element to the end of the array', () => {
    const dArray = new DynamicArray()
    dArray.append(1)
    expect(dArray.__base).toBe([1])
    dArray.append(2)
    expect(dArray.__base).toBe([1, 2])
  })

  test('get(i) - should return the element at index i', () => {
    const dArray = new DynamicArray()
    dArray.append(3)
    dArray.append(2)
    dArray.append(1)
    expect(dArray.get(0)).toBe(3)
    expect(dArray.get(1)).toBe(2)
    expect(dArray.get(2)).toBe(1)
  })

  test('get(i) - should return undefined if index is out of bounds', () => {
    const dArray = new DynamicArray()
    dArray.append(3)
    expect(dArray.get(0)).toBe(3)
    expect(dArray.get(1)).toBeUndefined()
  })

  test('set(i, x) - should set the element at index i to x', () => {
    const dArray = new DynamicArray()
    dArray.append(1)
    dArray.append(2)
    dArray.append(3)
    dArray.set(1, 5)
    expect(dArray.__base).toBe([1, 5, 3])
  })

  test('set(i, x) - should throw an error if index is out of bounds', () => {
    const dArray = new DynamicArray()
    dArray.append(1)
    try {
      dArray.set(2, 5)
    } catch (e) {
      expect(e).toBeInstanceOf(Error)
    }
  })

  test('size() - should return the number of elements in the array', () => {
    const dArray = new DynamicArray()
    expect(dArray.size()).toBe(0)
    dArray.append(1)
    expect(dArray.size()).toBe(1)
    dArray.append(2)
    expect(dArray.size()).toBe(2)
    dArray.append(3)
    expect(dArray.size()).toBe(3)
  })

  test('popBack() - should remove the last element from the array and return it', () => {
    const dArray = new DynamicArray()
    dArray.append(1)
    dArray.append(2)
    dArray.append(3)
    expect(dArray.popBack()).toBe(3)
    expect(dArray.__base).toBe([1, 2])
  })

	test('popBack() - should return undefined if the array is empty', () => {
		const dArray = new DynamicArray()
		expect(dArray.popBack()).toBeUndefined()
	})

	test('pop(i) - should remove the element at index i and return it', () => {
		const dArray = new DynamicArray()
		dArray.append(1)
		dArray.append(2)
		dArray.append(3)
		expect(dArray.pop(1)).toBe(2)
		expect(dArray.__base).toBe([1, 3])
	})

	test('pop(i) - should throw an error if index is out of bounds', () => {
		const dArray = new DynamicArray()
		dArray.append(1)
		try {
			dArray.pop(2)
		} catch (e) {
			expect(e).toBeInstanceOf(Error)
		}
	})

	test('contains(x) - should return true if the array contains x, false otherwise', () => {
		const dArray = new DynamicArray()
		dArray.append(1)
		dArray.append(2)
		dArray.append(3)
		expect(dArray.contains(2)).toBe(true)
		expect(dArray.contains(4)).toBe(false)
	})

	test('insert(i, x) - should insert x at index i', () => {
		const dArray = new DynamicArray()
		dArray.append(1)
		dArray.append(3)
		dArray.insert(1, 20)
		expect(dArray.__base).toBe([1, 20, 3])
	})

	test('insert(i, x) - should throw an error if index is out of bounds', () => {
		const dArray = new DynamicArray()
		dArray.append(1)
		try {
			dArray.insert(2, 5)
		} catch (e) {
			expect(e).toBeInstanceOf(Error)
		}
	})

	test('remove(x) - should remove the first occurrence of x from the array', () => {
		const dArray = new DynamicArray()
		dArray.append(1)
		dArray.append(2)
		dArray.append(2)
		dArray.append(3)
		dArray.remove(2)
		expect(dArray.__base).toBe([1, 2, 3])
	})
})
