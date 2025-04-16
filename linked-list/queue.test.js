import { describe, test } from 'node:test'
import assert from 'node:assert'
import Queue from './queue.js'

describe('Queue - Basic Operations', () => {
  test('enqueue(value) / dequeue() - basis operators', () => {
    const queue = new Queue()
    queue.enqueue(1)
    assert.equal(queue.dequeue(), 1)
    assert.equal(queue.dequeue(), null) // Queue should be empty now
    assert.equal(queue.dequeue(), null)

    queue.enqueue(2)
    queue.enqueue(3)
    queue.enqueue(4)
    assert.equal(queue.dequeue(), 2)
    assert.equal(queue.dequeue(), 3)

    queue.enqueue(5)
    assert.equal(queue.dequeue(), 4)
    assert.equal(queue.dequeue(), 5)
    assert.equal(queue.dequeue(), null) // Queue should be empty again
    assert.equal(queue.dequeue(), null)
  })

	test('isEmpty() - should return true for an empty queue', () => {
		const queue = new Queue()
		assert.equal(queue.isEmpty(), true)
		queue.enqueue(1)
		assert.equal(queue.isEmpty(), false)
		queue.dequeue()
		assert.equal(queue.isEmpty(), true)
	})
	
	test('clear() - should empty the queue', () => {
		const queue = new Queue()
		queue.enqueue(1)
		queue.enqueue(2)
		assert.equal(queue.isEmpty(), false)
		queue.clear()
		assert.equal(queue.isEmpty(), true)
		assert.equal(queue.dequeue(), null) // Should still return null after clearing
	})
})
