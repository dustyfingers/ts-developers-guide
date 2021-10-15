import { Node } from './Node';

export class LinkedList {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;

      // we are literally returning void
      return;
    }

    let tail = this.head;

    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    if (!this.head) return 0;

    let length = 1;
    let node = this.head;

    while(node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  at(idx: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    let counter = 0;
    let node: Node | null = this.head;
    
    while(node) {
      if (counter === idx) return node;

      counter++;
      node = node.next;
    }

    throw new Error('Index out of bounds');
  }

  compare(idx: number): boolean {
    if (!this.head) throw new Error('List is empty');
    return this.at(idx).data > this.at(idx + 1).data;
  }

  swap(idx: number): void {
    const leftNode = this.at(idx);
    const rightNode = this.at(idx+1);

    const leftVal = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftVal;
  }

  print(): void {
    if (!this.head) return;

    let node: Node | null = this.head;

    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}