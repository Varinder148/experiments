const grid = [
  ["1", "1", "1"],
  ["0", "1", "0"],
  ["1", "1", "1"],
];

var numIslands = function (grid) {
  let count = 0;

  const traverse = (i, j) => {
    if (
      i < 0 ||
      i > grid?.length ||
      j < 0 ||
      j > grid[j]?.length ||
      !grid?.[i]?.[j] ||
      grid?.[i]?.[j] === "0" ||
      grid?.[i]?.[j] === -1
    ) {
      return;
    }
    // console.log(grid);
    grid[i][j] = -1;
    traverse(i + 1, j);
    traverse(i, j + 1);
    traverse(i, j - 1);
    traverse(i - 1, j);
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        console.log(grid);
        traverse(i, j);
        count++;
      }
    }
  }
  console.log(count);
  return count;
};

numIslands(grid);
