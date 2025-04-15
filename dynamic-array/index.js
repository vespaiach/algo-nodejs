export default class DynamicArray {
  __base
  #_size = 0 // This private field stores the size of the dynamic array
  #_capacity = 1 // This private field stores the capacity of the dynamic array

  constructor() {
    this.__base = this.#createAndInitArray(this.#_capacity)
  }

  append(x) {
    this.#ensureNumber(x)

    if (this.#_size >= this.#_capacity) {
      this.#doubleArrayCapacity()
    }
    this.__base[this.#_size] = x
    this.#_size++
  }

  #doubleArrayCapacity() {
    this.#_capacity *= 2
    const tempArray = this.#createAndInitArray(this.#_capacity)
    for (let i = 0; i < this.#_size; i++) {
      tempArray[i] = this.__base[i]
    }
    this.__base = tempArray
  }

  get(i) {
    if (i < 0 || i >= this.#_size) {
      return undefined
    }
    return this.__base[i]
  }

  set(i, x) {
    this.#ensureNumber(x)

    if (i < 0 || i >= this.#_size) {
      throw new Error('Index out of bounds')
    }
    this.__base[i] = x
  }

  size() {
    return this.#_size
  }

  popBack() {
    if (this.#_size === 0) {
      throw new Error('Array is empty')
    }
    const lastElement = this.__base[this.#_size - 1]
    this.__base[this.#_size - 1] = undefined // Clear the last element
    this.#_size--

    this.#shrinkArrayIfNeeded()

    return lastElement
  }

  pop(i) {
    if (i < 0 || i >= this.#_size) {
      throw new Error('Index out of bounds')
    }
    const element = this.__base[i]
    for (let j = i; j < this.#_size - 1; j++) {
      this.__base[j] = this.__base[j + 1]
    }
    this.__base[this.#_size - 1] = undefined // Clear the last element
    this.#_size--

    this.#shrinkArrayIfNeeded()

    return element
  }

  contains(x) {
    this.#ensureNumber(x)
    for (let i = 0; i < this.#_size; i++) {
      if (this.__base[i] === x) {
        return true
      }
    }
    return false
  }

  insert(i, x) {
    this.#ensureNumber(x)
    if (i < 0 || i > this.#_size) {
      throw new Error('Index out of bounds')
    }
    if (this.#_size + 1 > this.#_capacity) {
      this.#doubleArrayCapacity()
    }

    let nextValue = x
    for (let j = i; j < this.#_size; j++) {
      const tempValue = this.__base[j]
      this.__base[j] = nextValue
      nextValue = tempValue
    }
    this.__base[this.#_size] = nextValue
    this.#_size++
  }

	remove(x) {
		this.#ensureNumber(x)
		let foundIndex
		for(let i = 0; i < this.#_size; i++) {
			if (this.__base[i] === x) {
				foundIndex = i;
				break;
			}
		}

		if (foundIndex !== undefined) {
			this.pop(foundIndex)
		}
	}

  #ensureNumber(i) {
    if (typeof i !== 'number') {
      throw new Error('Value must be a number')
    }
  }

  #createAndInitArray(size) {
    const tempArray = new Array(size)
    for (let i = 0; i < size; i++) {
      tempArray[i] = undefined
    }
    return tempArray
  }

  #shrinkArrayIfNeeded() {
    const twentyFivePercent = Math.floor(this.#_capacity * 0.25)
    if (twentyFivePercent && this.#_size <= twentyFivePercent) {
      this.#_capacity /= 2
      const tempArray = this.#createAndInitArray(this.#_capacity)
      for (let i = 0; i < this.#_size; i++) {
        tempArray[i] = this.__base[i]
      }
      this.__base = tempArray
    }
  }
}
