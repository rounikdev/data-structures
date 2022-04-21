import { SinglyLinkedNode } from '../nodes';

export class Stack<T> {
  private head: SinglyLinkedNode<T> | null;

  size: number;

  constructor() {
    this.head = null;

    this.size = 0;
  }

  /**
   * Implement the iterable protocol
   */
  *[Symbol.iterator]() {
    let current = this.head;

    while (current) {
      yield current.value;

      current = current.next;
    }
  }

  /**
   * Removes element from the top of the stack
   *
   * Time complexity: O(1)
   * Space complexity: O(1)
   *
   * @param {T} value
   *
   * @returns {number}
   */
  pop(): T | null {
    if (this.size === 0) {
      return null;
    }

    const node = this.head;

    this.head = node?.next ?? null;

    this.size--;

    return node?.value ?? null;
  }

  /**
   * Adds element to the top of the stack
   *
   * Time complexity: O(1)
   * Space complexity: O(1)
   *
   * @param {T} value
   *
   * @returns {number} the size of the queue
   */
  push(value: T): number {
    const newNode = new SinglyLinkedNode<T>(value);

    newNode.next = this.head;

    this.head = newNode;

    return ++this.size;
  }

  /**
   * Overrides the generic toString method
   *
   * Time complexity: O(n)
   * Space complexity: O(n)
   *
   *@returns {string}
   */
  public toString(): string {
    let output = 'Stack <';

    let current = this.head;

    while (current) {
      output += current.value;

      current = current.next;

      if (current) {
        output += ',';
      } else {
        output += '>';
      }
    }

    return output;
  }
}
