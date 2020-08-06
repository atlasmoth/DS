function* num() {
  let count = 0;
  while (true) {
    count++;
    yield count;
  }
}
const gen = num();

class Node {
  constructor() {
    this.value = gen.next().value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(node = new Node()) {
    if (!this.top) {
      this.top = node;
      return;
    }
    node.next = this.top;
    this.top = node;
  }
  pop() {
    if (!this.top) throw new Error("Empty Stack");
    let holder = this.top;
    this.top = holder.next;
    return holder;
  }
}

const stuff = new Stack();
stuff.push();
stuff.push();
stuff.push();
console.log(stuff.pop());
console.log(stuff.pop());
console.log(stuff.pop());
