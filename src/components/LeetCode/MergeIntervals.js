var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let stack = intervals[0];
  let flagNewInterval = false;
  const res = [];
  intervals.push([]);
  intervals.slice(1).forEach((interval) => {
    const peek = stack?.[stack.length - 1];
    if (peek >= interval[0] && peek <= interval[1]) {
      stack.pop();
      stack.push(interval[1]);
    } else if (peek > interval[0] && peek > interval[1]) {
      //   res.push(stack);
      //   return;
    } else {
      res.push(stack);
      stack = interval;
    }
    console.log(res, "------------", stack);
  });

  //   if (stack.length) {
  //     res.push(stack);
  //   }

  return res;
};

const intervals1 = [
  [1, 4],
  [2, 3],
];

const intervals = [
  [1, 3],
  [2, 5],
  [6, 10],
  [15, 18],
];
merge(intervals1);
