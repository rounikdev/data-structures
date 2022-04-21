import { SinglyLinkedNode } from '../nodes';

export class Queue<T> {
  private head: SinglyLinkedNode<T> | null;

  private tail: SinglyLinkedNode<T> | null;

  size: number;

  constructor() {
    this.head = null;

    this.size = 0;

    this.tail = null;
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
   * Removes and returns the first element
   * in the queue
   *
   * Time complexity: O(1)
   * Space complexity: O(1)
   *
   * @returns {T | null}
   */
  dequeue(): T | null {
    let value = null;

    switch (this.size) {
      case 0:
        break;
      case 1:
        value = this.head?.value ?? null;

        this.head = null;

        this.tail = null;

        break;
      default:
        value = this.head?.value ?? null;

        this.head = this.head?.next ?? null;
    }

    this.size = Math.max(0, --this.size);

    return value;
  }

  /**
   * Adds element to the end of the queue
   *
   * Time complexity: O(1)
   * Space complexity: O(1)
   *
   * @param {T} value
   *
   * @returns {number}
   */
  enqueue(value: T): number {
    const newNode = new SinglyLinkedNode<T>(value);

    if (this.size === 0) {
      this.head = newNode;

      this.tail = newNode;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
      }

      this.tail = newNode;
    }

    return ++this.size;
  }

  /**
   * Overrides the generic toString method
   *
   * Time complexity: O(n)
   * Space complexity: O(n)
   *
   * @returns {string}
   */
  public toString(): string {
    let output = 'Queue <';

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
