import breadthFirstSearch from './index.js'
import { test, describe } from 'node:test'
import assert from 'node:assert'


describe('Who can fix my bike?', () => {
	test('Dan can do it', () => {

		const friendGraphs = {
		  You: ['Alice', 'John'],
		  Alice: ['Rosy', 'Dan'],
		  John: ['Mary', 'Tom'],
		  Rosy: ['Dave'],
		  Dan: [],
		  Mary: [],
		  Tom: [],
		  Dave: []
		};

		function onlyDanCanFixIt(name) {
		  	return name === 'Dan'
		}

		console.log(breadthFirstSearch(friendGraphs, 'You', onlyDanCanFixIt), 'Dan')
		assert.equal(breadthFirstSearch(friendGraphs, 'You', onlyDanCanFixIt), 'Dan')
	})
})
