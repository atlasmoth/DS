const stuff = require("./sequence")();

class Node {
  constructor(data = stuff.next().value) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

class Bst {
  constructor() {
    this.root = null;
  }
  insert() {
    let node = new Node();
    if (!this.root) {
      this.root = node;
      return;
    }
    recurseBst(this.root, node);
  }
}

const obj = new Bst();
obj.insert();
obj.insert();
obj.insert();
obj.insert();
obj.insert();
obj.insert();
// console.log(obj);

function recurseBst(root, child) {
  if (child.data >= root.data) {
    if (root.right) {
      recurseBst(root.right, child);
    } else {
      root.right = child;
    }
  } else if (child.data < root.data) {
    if (root.left) {
      recurseBst(root.left, child);
    } else {
      root.left = child;
    }
  }
}

function inOrder(root) {
  if (!root) {
    return;
  }
  inOrder(root.left);
  console.log(root.data);
  inOrder(root.right);
}

// inOrder(obj.root);

function search(root, target) {
  if (target === root.data) {
    return root;
  } else if (target < root.data) {
    if (root.left) {
      search(root.left, target);
    } else {
      return;
    }
  } else if (target >= root.data) {
    if (root.right) {
      search(root.right, target);
    } else {
      return;
    }
  }
}

console.log(search(obj.root, 15));
