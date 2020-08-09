const sequence = require("./sequence");

const stuff = sequence();

class Node {
  constructor(data = Math.round(Math.random() * 30)) {
    this.index = stuff.next().value;
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Bst {
  constructor() {
    this.root = null;
  }
  insert(node = new Node()) {
    // na the insert be this bruh
    if (!this.root) {
      return (this.root = node);
    }
    this.placeNode(this.root, node);
  }
  placeNode(root, node) {
    if (node.data > root.data) {
      if (root.right) {
        this.placeNode(root.right, node);
      } else {
        root.right = node;
      }
    } else if (node.data < root.data) {
      if (root.left) {
        this.placeNode(root.left, node);
      } else {
        root.left = node;
      }
    }
  }
  inOrder(node) {
    if (!node) {
      return;
    }
    console.log(node.data);
    this.inOrder(node.left);
    this.inOrder(node.right);
  }
}

const tree = new Bst();
tree.insert();
tree.insert();
tree.insert();
tree.insert();
tree.insert();
tree.insert();
tree.insert();
tree.insert();
tree.insert();
tree.insert();
tree.insert();
tree.insert();
tree.insert();
tree.insert();
tree.insert();
tree.insert();
tree.insert();
tree.insert();
tree.insert();
tree.insert();
tree.insert();

// console.log(tree);
tree.inOrder(tree.root);
