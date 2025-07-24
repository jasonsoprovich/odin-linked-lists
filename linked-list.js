import Node from './node.js';

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  size() {
    let listSize = 0;
    let current = this.head;
    while (current) {
      listSize++;
      current = current.next;
    }
    return listSize;
  }

  head() {}

  tail() {}

  at(index) {}

  pop() {}

  contains(data) {}

  find(data) {}

  toString() {
    let output = '';
    let current = this.head;

    while (current) {
      output += `( ${current.data} ) -> `;
      current = current.next;
    }
    output += 'null';
    return output;
  }

  insertAt(data, index) {}

  removeAt(index) {}
}
