export default class Queue {
  #head = null
  #tail = null

  static #Node = class {
    constructor(value, next) {
      this.value = value
      this.next = next
    }
  }

  enqueue(value) {
    const node = new Queue.#Node(value, null)
    if (this.#head === null) {
      this.#head = this.#tail = node
    } else {
      this.#tail.next = node
      this.#tail = node
    }
  }

  dequeue() {
    if (this.#head === null) return null // Queue is empty

    const result = this.#head.value
    this.#head = this.#head.next
    if (this.#head === null) {
      this.#tail = null
    }
    return result
  }
  
  isEmpty() {
    return this.#head === null;
  }
  
  clear() {
    this.#head = null;
    this.#tail = null;
  }
}
