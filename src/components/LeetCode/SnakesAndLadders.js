/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
  let simplifiedBoard = [];
  for (
    let i = board.length - 1, reverse = false;
    i >= 0;
    i--, reverse = !reverse
  ) {
    if (reverse) {
      for (let j = board[i].length - 1; j >= 0; j--) {
        simplifiedBoard.push(board[i][j]);
      }
    } else {
      for (let j = 0; j < board[i].length; j++) {
        simplifiedBoard.push(board[i][j]);
      }
    }
  }

  let queue = [[0, 0]];
  let visited = new Set();

  while (queue.length > 0) {
    let [currPos, distance] = queue.shift();

    if (currPos === simplifiedBoard.length - 1) {
      return distance;
    }

    for (let i = 1; i <= 6; i++) {
      if (currPos + i >= simplifiedBoard.length) {
        break;
      }
      let nextMove = currPos + i;

      if (simplifiedBoard[currPos + i] !== -1) {
        nextMove = simplifiedBoard[currPos + i] - 1;
      }
      if (!visited.has(nextMove)) {
        visited.add(nextMove);
        queue.push([nextMove, distance + 1]);
      }
    }
  }

  return -1;
};
