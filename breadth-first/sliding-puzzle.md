# Sliding Puzzle Problem (3×3 Board)

On a 3×3 board, there are eight tiles labeled 1 to 8, and an empty square represented by 0. A move consists of choosing 0 and swapping it with a 4-directionally adjacent number (left, right, up, or down).

The state of the board is solved if and only if the board is:

```plaintext
[[1, 2, 3],
 [4, 5, 6],
 [7, 8, 0]]
 ```

# Goal

Given the puzzle board, return the least number of moves required to reach the solved state

**Example 1**

Input:

```
board = [[1, 2, 3],
         [4, 5, 6],
         [7, 0, 8]]
```

Ouput: 1

Explanation: Swap 0 and 8 in one move.

**Example 2**

Input:

```
board = [[1, 2, 3],
         [0, 4, 6],
         [7, 5, 8]]
```

Output: 3

Explanation:

- After move 0: [[1,2,3], [0,4,6], [7,5,8]]
- After move 1: [[1,2,3], [4,0,6], [7,5,8]]
- After move 2: [[1,2,3], [4,5,6], [7,0,8]]
- After move 3: [[1,2,3], [4,5,6], [7,8,0]]


## Pseudocode

solvePuzzle(board)
  movesQueue = QUEUE()
  checkedMoves = SET()

  movesQueue.enqueue({ board, step })
  checkedMoves.add(board)

  WHILE movesQueue is not EMPTY
    currentMove = movesQueue.dequeue
    IF checkIfPuzzleSolved(currentMove)
      return currentMove.step

    FOR EACH nextBoard in findAllValidNextMoves(currentMove)
      IF not checkedMoves.has(nextBoard)
        movesQueue.enqueue({ nextBoard, step + 1 })
        checkedMoves.add(nextBoard)
  
  return -1

