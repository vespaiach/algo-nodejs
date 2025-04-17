import Queue from '../linked-list/queue.js'

/**
 *
 * Puzzle 3x3 will be flattened to a 1D array of 9 elements for easier manipulation.
 * Each time a move is made, a new move object will be created to represent the new state of the board.
 * Each move object will have this properties:
 *
 * {
 * 		board: the current state of the board,
 * 		step: number of steps taken to reach this board state,
 * 		tracking: an array of zero's index histories used for debugging
 * }
 *
 */

export default function solvePuzzle(startBoard) {
  const board = flattenBoard(startBoard)
  const startMove = { board: board, step: 0, tracking: [board.indexOf(0)] }

  const movesQueue = new Queue()
  const checkedMoves = new Set()
  movesQueue.enqueue(startMove)
  checkedMoves.add(startMove.board.join(''))

  while (!movesQueue.isEmpty()) {
    const checkingMove = movesQueue.dequeue()
    if (isPuzzleSolved(checkingMove)) {
      return checkingMove.step
    }

    for (let move of findAllPosibleMoves(checkingMove)) {
      if (!checkedMoves.has(move.board.join(''))) {
        movesQueue.enqueue(move)
        checkedMoves.add(move.board.join(''))
      }
    }
  }

  return -1
}

function flattenBoard(board) {
  return board.reduce((acc, row) => acc.concat(row), [])
}

function isPuzzleSolved(move) {
  return '123456780' === move.board.join('')
}

function makeAMove(move, fromIndex, toIndex) {
  // copy array
  const newBoard = cloneArray(move.board)

  // swap position
  const temp = newBoard[fromIndex]
  newBoard[fromIndex] = newBoard[toIndex]
  newBoard[toIndex] = temp

  return { board: newBoard, step: move.step + 1, tracking: [...move.tracking, toIndex] }
}

function findAllPosibleMoves(move) {
  const indexOfZero = move.board.indexOf(0)
  const possibleMoves = []

  if (indexOfZero - 3 >= 0) {
    // Up
    possibleMoves.push(makeAMove(move, indexOfZero, indexOfZero - 3))
  }

  if (indexOfZero + 3 <= 8) {
    // Down
    possibleMoves.push(makeAMove(move, indexOfZero, indexOfZero + 3))
  }

  if ((indexOfZero % 3) - 1 >= 0) {
    // Left
    possibleMoves.push(makeAMove(move, indexOfZero, indexOfZero - 1))
  }

  if ((indexOfZero % 3) + 1 <= 2) {
    // Right
    possibleMoves.push(makeAMove(move, indexOfZero, indexOfZero + 1))
  }

  return possibleMoves
}

function cloneArray(arr) {
  return [...arr]
}
