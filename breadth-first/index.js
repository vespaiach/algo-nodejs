import Queue from '../linked-list/queue.js'

export default function breadthFirstSearch(graph, startNode, isConditionMet) {
  const searchingQueue = new Queue()
  const visitedNodes = new Set()

  searchingQueue.enqueue(startNode)
  visitedNodes.add(startNode)

  while(!searchingQueue.isEmpty()) {
    const currentNode = searchingQueue.dequeue()
    if (isConditionMet(currentNode)) {
      return currentNode
    }

    for(let node of graph[currentNode]) {
      if (!visitedNodes.has(node)) {
        searchingQueue.enqueue(node)
      }
    }
  }

  return null
}
