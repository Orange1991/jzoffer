let printTree = node => {
  let print = (node, prefix) => {
    if (node) {
      if (node.right) {
        print(node.right, prefix + '\t');
      }
      console.log(`${prefix}${node.val}`);
      if (node.left) {
        print(node.left, prefix + '\t');
      }
    }
  }
  print(node, '');
};

module.exports = printTree;

