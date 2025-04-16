## Breadth-First Search Example

Imagine you need help fixing your bike. You start by asking your friends if they can assist. If none of them are able to help, you expand your search by reaching out to their friends. You continue this process, level by level, until you find someone who can fix your bike.

**Step by step process**

1. Start with your friends list:

Alice
John

2. Ask Alice, but she doesn't know. Add Alice's friends to the list:

~~Alice~~
John
Rosy (Alice's friend)
Dan (Alice's friend)

3. Ask John, but he also doesn't know. Add John's friends to the list:

~~Alice~~
~~John~~
Rosy (Alice's friend)
Dan (Alice's friend)
Mary (John's friend)
Tom (John's friend)

4. Ask Rosy (Alice's friend), but she doesn't know. Add Rosy's friend to the list:

~~Alice~~
~~John~~
~~Rosy~~
Dan (Alice's friend)
Mary (John's friend)
Tom (John's friend)
Dave (Rosy's friend)

5. Ask Dan (Alice's friend), and he knows how to fix your bike! Stop searching.

**Note**: 
- Friends are added to the list in order—whoever is added first will be asked first.
- Duplicate friends are not added. If John is also Alice's friend, we don’t add him again when Alice’s friends are listed.

## Visual Representation of Relationship Graph

```
You --> Alice --> Rosy --> Dave
  \           \
   \           --> Dan
    \
     --> John --> Mary
               \
                --> Tom
```

- Each person is represented as a vertex (node).
- Each relationship is represented as an edge (connection) between two vertices.

**Vertices (Nodes)**: {You, Alice, John, Rosy, Dan, Dave, Mary, Tom}
**Edges (Connections)**:
You  	→ Alice
You  	→ John
Alice → Rosy
Alice → Dan
Rosy 	→ Dave
John 	→ Mary
John 	→ Tom

## Key principles of Breadth-First Search

1. **Explores Level by Level** – BFS visits all neighbors of a node before moving to the next level of nodes. This ensures the shortest path.

2. **Uses a Queue** – The algorithm relies on a queue data structure to keep track of nodes that need to be visited. The first node added is processed first (FIFO: First-In, First-Out).

3. **Marks Nodes as Visited** – To prevent revisiting nodes and entering infinite loops.

4. **Optimal for Shortest Path in Unweighted Graphs** – BFS guarantees the shortest path to a target node because it explores the closest nodes first.

5. **Non-Recursive Implementation** – Unlike Depth-First Search (DFS), which can be implemented using recursion, BFS is typically implemented iteratively using a queue.

6. **Works for Various Structures** – BFS can be used on both trees and graphs. In graphs, it handles cycles by ensuring nodes are only visited once.

## Pseudocode

```
BFS(graph, startNode):
  searchingQueue = new QUEUE()
  visitedNodes = new SET()

  searchingQueue.enqueue(startNode)
  visitedNodes.add(startNode)

  WHILE searchingQueue IS NOT empty:
		currentNode = searchingQueue.dequeue()

		IF checkIfConditionMet(currentNode):
			RETURN currentNode
		
		FOR EACH neighborNode IN graph[currentNode]:
			IF neighborNode NOT IN visitedNodes:
				searchingQueue.enqueue(neighborNode)
				visitedNodes.add(neighborNode)
	
	RETURN null  # Indicating no node met the condition
```

## Data structure to store graph

- The graph is stored using an Adjacency List (recommended for BFS).
- A simple Adjacency List can be implemented using a hash table:
  + Keys are nodes (vertices).
  + Values are lists of neighboring nodes.

## Runtime

- O(V + E): V is number of vertex (node); E is number of edge (connection)
