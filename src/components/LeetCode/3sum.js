const nums = [-1, 0, 1, 2, -1, -4];

// [-4, -1, -1, 0, 1, 2]

const threeSum = (nums) => {
  if (nums.length < 3) {
    return [];
  }

  let i = 0,
    j = 1,
    k = nums.length - 1;

  nums.sort((a, b) => a - b);

  let res = [];
  let set = new Set();

  while (i <= nums.length - 3) {
    while (j < k) {
      if (nums[j] + nums[k] === -nums[i]) {
        if (!set.has(`${nums[i]}_${nums[j]}_${nums[k]}`)) {
          set.add(`${nums[i]}_${nums[j]}_${nums[k]}`);
          res.push([nums[i], nums[j], nums[k]]);
        }
        j++;
        k--;
      } else if (nums[j] + nums[k] > -nums[i]) {
        k--;
      } else if (nums[j] + nums[k] < -nums[i]) {
        j++;
      }
    }
    i++;
    j = i + 1;
    k = nums.length - 1;
  }

  console.log(res);
};

threeSum(nums);
