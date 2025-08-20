numCourses = 4;
prerequisites = [
  [1, 0],
  [2, 0],
  [3, 1],
  [3, 2],
];

var findOrder = function (numCourses, prerequisites) {
  let adjList = new Array(numCourses);
  adjList = Array.from(adjList, () => {
    return [];
  });
  const countList = new Array(numCourses).fill(0);

  //fill adjList
  prerequisites.forEach((prerequisite) => {
    adjList[prerequisite[1]].push(prerequisite[0]);
    countList[prerequisite[0]]++;
  });

  const queue = [];
  const res = [];
  // add courses which don't have dependencies to queue

  //   console.log(adjList, countList);

  countList.forEach((ele, index) => {
    if (ele === 0) {
      queue.push(index);
      ele = -2;
    }
  });

  while (queue.length !== 0) {
    const processingElement = queue.shift();
    res.push(processingElement);

    adjList[processingElement].forEach((ele) => {
      --countList[ele];
      if (countList[ele] === 0) queue.unshift(ele);
    });
  }

  if (res.length !== numCourses) {
    return [];
  }

  //   console.log(res);

  return res;
};

findOrder(numCourses, prerequisites);
