const makeNode = (val, left, right) => ({ val, left, right });

function makeTree() {
  const root = makeNode(Math.round(Math.random() * 100));
  // building binary search tree
  const updateTree = (obj, val) => {
    if (val >= obj.val) {
      if (obj.right) {
        updateTree(obj.right, val);
      } else {
        obj.right = makeNode(val);
      }
    } else {
      if (obj.left) {
        updateTree(obj.left, val);
      } else {
        obj.left = makeNode(val);
      }
    }
  };
  return { root, updateTree };
}

const tree = makeTree();
tree.updateTree(tree.root, Math.round(Math.random() * 100));
tree.updateTree(tree.root, Math.round(Math.random() * 100));
tree.updateTree(tree.root, Math.round(Math.random() * 100));
tree.updateTree(tree.root, Math.round(Math.random() * 100));
tree.updateTree(tree.root, Math.round(Math.random() * 100));
tree.updateTree(tree.root, Math.round(Math.random() * 100));
tree.updateTree(tree.root, Math.round(Math.random() * 100));
tree.updateTree(tree.root, Math.round(Math.random() * 100));
tree.updateTree(tree.root, Math.round(Math.random() * 100));
tree.updateTree(tree.root, Math.round(Math.random() * 100));
tree.updateTree(tree.root, Math.round(Math.random() * 100));
tree.updateTree(tree.root, Math.round(Math.random() * 100));

console.log(tree.root);
