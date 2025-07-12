/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (inorder.length === 0 || postorder.length == 0) {
    return null;
  }

  const root = postorder[postorder.length - 1];
  let node = new TreeNode(root);

  const breakpointInorder = inorder.indexOf(root);
  const leftSliceInorder = inorder.slice(0, breakpointInorder);
  const rightSliceInorder = inorder.slice(breakpointInorder + 1);

  node.left = buildTree(
    leftSliceInorder,
    postorder.slice(0, leftSliceInorder.length)
  );
  node.right = buildTree(
    rightSliceInorder,
    postorder.slice(-rightSliceInorder.length - 1, -1)
  );

  return node;
};
