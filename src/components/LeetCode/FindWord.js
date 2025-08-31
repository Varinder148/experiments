/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let visited = new Array(board.length);
  visited = Array.from(visited, () => new Array(board[0].length).fill(0));

  let recurse = (i, j, count) => {
    if (count === word.length) {
      return true;
    }

    if (i < 0 || j < 0 || i >= board.length || j >= board[i].length) {
      return false;
    }

    // console.log(count, board[i][j], word[count])

    let down, right, up, left;

    if (board[i][j] === word[count] && !visited[i][j]) {
      visited[i][j] = 1;
      down = recurse(i + 1, j, count + 1);
      right = recurse(i, j + 1, count + 1);
      up = recurse(i - 1, j, count + 1);
      left = recurse(i, j - 1, count + 1);

      visited[i][j] = 0;
    }

    return down || right || up || left;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (recurse(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};
