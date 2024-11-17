const arr = [1, [2], [3, [4]]];

const flat = (arr, counter = 1, res = []) => {
  arr.forEach((ele) => {
    if (counter && Array.isArray(ele)) {
      flat(ele, counter - 1, res);
    } else {
      res.push(ele);
    }
  });

  return res;
};

console.log(flat(arr));
// [1, 2, 3, [4]]
console.log(flat(arr, 1));
// [1, 2, 3, [4]]
console.log(flat(arr, 2));
// [1, 2, 3, 4]
