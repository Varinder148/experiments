const rootArr = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
  p = 7,
  q = 4;

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const generateTreeFromArray = (rootArr) => {
  if (!rootArr.length) return null;
  const root = new TreeNode(rootArr[0]);
  const queue = [root];
  let i = 1;
  while (queue.length && i < rootArr.length) {
    const current = queue.shift();
    if (rootArr[i] !== null && rootArr[i] !== undefined) {
      current.left = new TreeNode(rootArr[i]);
      queue.push(current.left);
    }
    i++;
    if (i < rootArr.length && rootArr[i] !== null && rootArr[i] !== undefined) {
      current.right = new TreeNode(rootArr[i]);
      queue.push(current.right);
    }
    i++;
  }
  return root;
};

const root = generateTreeFromArray(rootArr);

const lowestCommonAncestor = (root, p, q) => {
  if (!root) {
    return null;
  }

  if (root.val === p) {
    return root;
  }
  if (root.val === q) {
    return root;
  }

  const right = lowestCommonAncestor(root.right, p, q);
  const left = lowestCommonAncestor(root.left, p, q);

  if (left && right) {
    return root;
  } else if (right) {
    return right;
  } else if (left) {
    return left;
  } else {
    return null;
  }
};

console.log(lowestCommonAncestor(root, p, q));
