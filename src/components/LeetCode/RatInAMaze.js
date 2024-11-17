const maze = [
  [0, 0, 1, 1, 1],
  [0, 1, 0, 1, 1],
  [0, 0, 0, 1, 1],
  [0, 0, 1, 0, 1],
  [1, 0, 0, 0, 0],
];

const visited = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

const moves = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

const isValidPath = (x, y, maze, visited) => {
  if (
    x < 0 ||
    y < 0 ||
    x >= maze.length ||
    y >= maze.length ||
    visited[x][y] === 1
  ) {
    return false;
  }
  if (maze[x][y] === 1) {
    return false;
  }
  return true;
};

const res = [];
const findPath = (maze, x, y, visited) => {
  if (!isValidPath(x, y, maze, visited)) {
    return false;
  }
  if (x === maze.length - 1 && y === maze.length - 1) {
    return true;
  }
  visited[x][y] = 1;
  for (let move of moves) {
    if (isValidPath(x + move[0], y + move[1], maze, visited)) {
      const found = findPath(maze, x + move[0], y + move[1], visited);
      visited[x][y] = 0;
      if (found) {
        res.push([x + move[0], y + move[1]]);
        return true;
      }
    }
  }
};

findPath(maze, 0, 0, visited);
console.log(res);
