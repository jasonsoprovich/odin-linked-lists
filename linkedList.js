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

  head() {
    return this.head;
  }

  tail() {
    if (!this.head) return null;
    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    return current;
  }

  at(index) {
    if (index < 0 || !this.head) return null;
    let current = this.head;
    for(let i = 0; i < index; i++){
      current = current.next;
    }
    return current;
  }

  pop() {
    if (!this.head) return null;
    if (!this.head.next) {
      const popNode = this.head;
      this.head = null; 
      return popNode;
    }
    let current = this.head;
    let previous = null;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
    return current; 
  }

  contains(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  find(data) {
    let current = this.head;
    let i = 0;
    while (current) {
      if (current.data === data) {
        return i;
      }
      current = current.next;
      i++;
    }
    return null;
  }

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

  insertAt(data, index) {
    if (index < 0) return;
    if (index === 0) {
      this.prepend(data);
      return;
    }
    const newNode = new Node(data);
    let current = this.head;
    let previous = null;
    let i = 0;
    while (current && i < index) {
      previous = current;
      current = current.next;
      i++;
    }
    if (i < index) {
      this.append(data);
      return;
    }
    newNode.next = current;
    if (previous) {
      previous.next = newNode;
    } else {
      this.head = newNode;
    }
  }

  removeAt(index) {
    if (index < 0 || !this.head) return null;
    if (index === 0) {
      const removed = this.head;
      this.head = this.head.next;
      return removed;
    }
    let current = this.head;
    let previous = null;
    let i = 0;
    while (current && i < index) {
      previous = current;
      current = current.next;
      i++;
    }
    if (!current) return null;
    previous.next = current.next;
    return current;
  }
}
