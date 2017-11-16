const TreeNode = require('../util/TreeNode');
const printTree = require('../util/printTree');

/**
 * Re-construct a binary tree base on its pre-order and in-order traversal result
 * @param {String<Number>} preorder
 * @param {String<Number>} inorder
 * @param {TreeNode|NULL} 
 */
let reconstruct = (preorder = [], inorder = []) => {
  if (preorder.length != inorder.length || preorder.length === 0) {
    return null;
  }
  return reconstructInSection(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
};

/**
 * Re-construct a binary tree base on its pre-order and in-order traversal result
 * @param {String<Number>} preorder
 * @param {Number} pStart
 * @param {Number} pEnd
 * @param {String<Number>} inorder
 * @param {Number} iStart
 * @param {Number} iEnd
 * @param {TreeNode|NULL} 
 */
let reconstructInSection = (preorder, pStart, pEnd, inorder, iStart, iEnd) => {
  if (pStart > pEnd || iStart > iEnd)  {
    return null;
  }
  let rootVal = preorder[pStart];
  let root = new TreeNode(rootVal);
  let rootInOrderIndex = iStart;
  while (rootInOrderIndex <= iEnd && inorder[rootInOrderIndex] != rootVal) {
    ++rootInOrderIndex;
  }
  if (rootInOrderIndex > iEnd) {
    throw new Error('Can not construct tree due to index out of range');
  }
  root.left = reconstructInSection(
    preorder, pStart + 1, pStart + rootInOrderIndex - iStart, inorder, iStart, rootInOrderIndex - 1
  );
  root.right = reconstructInSection(
    preorder, pStart + rootInOrderIndex - iStart + 1, pEnd, inorder, rootInOrderIndex + 1, iEnd
  );
  return root;
};

let test = (preorder, inorder) => {
  console.log(`Pre-order: ${preorder.join()}`);
  console.log(`In-order: ${inorder.join()}`);
  console.log(`Reconstruced tree:`);
  let tree = reconstruct(preorder, inorder);
  printTree(tree);
};

test([1, 2, 4, 7, 3, 5, 6, 8], [4, 7, 2, 1, 5, 3, 8, 6]);

