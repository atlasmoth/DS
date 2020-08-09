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
  isEmpty() {
    return this.top ? false : true;
  }
  peek() {
    return this.top;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.lastVal = null;
  }
  enqueue(node = new Node()) {
    if (!this.front) {
      this.front = node;
      this.lastVal = this.front;
    }
    this.lastVal.next = node;
    let holder = this.lastVal;
    this.lastVal = holder.next;
  }
  dequeue() {
    if (!this.front) throw new Error("Empty queue");
    let holder = this.front;
    if (holder.next) {
      this.front = holder.next;
      return holder;
    } else {
      this.lastVal = null;
      this.front = holder.next;
      return holder;
    }
  }
  peek() {
    return this.front;
  }
  isEmpty() {
    return this.front ? false : true;
  }
}

const stuff = new Queue();
stuff.enqueue();
stuff.enqueue();
stuff.enqueue();
stuff.enqueue();
stuff.enqueue();

console.log(stuff.dequeue());
console.log(stuff.dequeue());
console.log(stuff.dequeue());
console.log(stuff.dequeue());
console.log(stuff.dequeue());

console.log(stuff);
console.log(stuff.isEmpty());
