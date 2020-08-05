const crypto = require("crypto");

// rehearsing the basics of Big O.
function constant(n) {
  // this is constant this is bloody cool
  let remainder = n % 2;
  console.log(Math.log2(remainder));
}

function linear(n = Math.round(Math.random() * 20)) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

function exponential(n = 20) {
  for (let i = 1; i <= n; i++) {
    for (let x = 1; x <= n; x++) {
      console.log(i * x);
    }
  }
}

class Node {
  constructor() {
    this.data = crypto.randomBytes(10).toString("hex");
    this.next = null;
  }
  update(stuff) {
    this.next = stuff;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  append() {
    if (this.head === null) {
      return (this.head = new Node());
    }
    let current = this.head;
    while (true) {
      if (current.next === null) {
        current.next = new Node();
        break;
      }
      current = current.next;
    }
  }
  prepend() {
    if (!this.head) {
      return (this.head = new Node());
    }

    const newNode = new Node();
    newNode.update(this.head);
    console.log(this.head);
    this.head = newNode;
    console.log(newNode);
  }
  search(index) {
    if (!this.head) {
      return;
    }
    let count = 0;
    let current = this.head;
    while (true) {
      if (count === index && current) {
        return current;
      } else if (!current || count > index) {
        return;
      }

      current = current.next;
    }
  }
}

const list = new LinkedList();

list.prepend();
list.prepend();
list.prepend();

console.log(list.search(0));
