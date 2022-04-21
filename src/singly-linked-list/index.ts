import { SinglyLinkedNode } from '../nodes';

export class SinglyLinkedList<T> {
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
   * Creates a SinglyLinkedList from
   * an array
   *
   * Time complexity: O(n)
   * Space complexity: O(n)
   *
   * @param {Array<P>} array
   *
   * @returns {SinglyLinkedList<P>}
   *
   */
  public static fromArray<P>(array: Array<P>): SinglyLinkedList<P> {
    const list = new SinglyLinkedList<P>();

    array.forEach(list.push.bind(list));

    return list;
  }

  /**
   * Retrieves the node at given index
   *
   * Time complexity: O(n)
   * Space complexity: O(1)
   *
   * @param {number} index
   *
   * @returns {ListNode<T> | null}
   */
  private getNode(index: number): SinglyLinkedNode<T> | null {
    if (index < 0 || index > this.size - 1 || this.size === 0) {
      return null;
    }

    let current = this.head;

    while (index > 0) {
      current = current?.next ?? null;

      index--;
    }

    return current;
  }

  /**
   * Retrieves the element at given index
   *
   * Time complexity: O(n)
   * Space complexity: O(1)
   *
   * @param {number} index
   *
   * @returns {T | null}
   */
  public get(index: number): T | null {
    return this.getNode(index)?.value ?? null;
  }

  /**
   * Inserts a new node on a specified position
   *
   * Time complexity: O(n)
   * Space complexity: O(1)
   *
   * @param {T} value
   * @param {number} index
   *
   * @returns {boolean}
   */
  public insert(value: T, index: number): boolean {
    if (index < 0 || index > this.size) {
      return false;
    }

    if (index === this.size) {
      this.push(value);

      return true;
    }

    if (index === 0) {
      this.unshift(value);

      return true;
    }

    const previous = this.getNode(index - 1);

    const newNode = new SinglyLinkedNode<T>(value);

    newNode.next = previous?.next ?? null;

    if (previous?.next) {
      previous.next = newNode;
    }

    this.size++;

    return true;
  }

  /**
   * Removes a node from the end of the list
   *
   * Time complexity: O(n)
   * Space complexity: O(1)
   *
   * @returns {T | null}
   */
  public pop(): T | null {
    if (this.size < 2) {
      const node = this.head;

      this.head = null;

      this.tail = null;

      this.size = Math.max(0, --this.size);

      return node?.value ?? null;
    } else {
      let current = this.head;

      let next = current?.next ?? null;

      while (next && next.next) {
        current = next;

        next = next.next;
      }

      this.tail = current;

      if (current?.next) {
        current.next = null;
      }

      this.size--;

      return next?.value ?? null;
    }
  }

  /**
   * Adds a node to the end of the list
   *
   * Time complexity: O(1)
   * Space complexity: O(1)
   *
   * @param {T} value
   *
   * @returns {number} the size of the list
   */
  public push(value: T): number {
    const newNode = new SinglyLinkedNode(value);

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
   * Removes a node at specified position
   *
   * Time complexity: O(n)
   * Space complexity: O(1)
   *
   * @param {number} index
   *
   * @returns {T | null}
   */
  public remove(index: number): T | null {
    if (index < 0 || index >= this.size) {
      return null;
    }

    if (index === 0) {
      return this.shift();
    }

    if (index === this.size - 1) {
      return this.pop();
    }

    const previous = this.getNode(index - 1);

    const toBeRemoved = previous?.next ?? null;

    if (previous?.next) {
      previous.next = toBeRemoved?.next ?? null;
    }

    if (toBeRemoved?.next) {
      toBeRemoved.next = null;
    }

    this.size--;

    return toBeRemoved?.value ?? null;
  }

  /**
   * Reverses the list
   *
   * Time complexity: O(n)
   * Space complexity: O(1)
   *
   * @returns {SinglyLinkedList<T>}
   */
  public reverse(): SinglyLinkedList<T> {
    if (this.size < 2) {
      return this;
    }

    let previous = this.head;

    let current = previous?.next ?? null;

    let next = null;

    // Set up the tail:
    if (this.head) {
      this.head.next = null;
    }

    this.tail = this.head;

    while (current) {
      next = current.next;

      // Reverse the pointer:
      current.next = previous;

      // Move forward:
      previous = current;
      current = next;
    }

    this.head = previous;

    return this;
  }

  /**
   * Updates the value of a node on a
   * provided position
   *
   * Time complexity: O(n)
   * Space complexity: O(1)
   *
   * @param {T} value
   * @param {number} index
   *
   * @returns {boolean}
   */
  public set(value: T, index: number): boolean {
    const node = this.getNode(index);

    if (node) {
      node.value = value;

      return true;
    } else {
      return false;
    }
  }

  /**
   * Removes a node from the beginning
   * of the list
   *
   * Time complexity: O(1)
   * Space complexity: O(1)
   *
   * @returns {T | null}
   */
  public shift(): T | null {
    const node = this.head;

    if (this.size < 2) {
      this.head = null;

      this.tail = null;

      this.size = 0;
    } else {
      this.head = this.head?.next ?? null;

      if (node?.next) {
        node.next = null;
      }

      this.size--;
    }

    return node?.value ?? null;
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
    let output = '';

    let current = this.head;

    while (current) {
      output += current.value;

      current = current.next;

      if (current) {
        output += '->';
      }
    }

    return output;
  }

  /**
   * Adds a new node to the beginning of the list
   *
   * Time complexity: O(1)
   * Space complexity: O(1)
   *
   * @returns {number} the size of the list
   */
  public unshift(value: T): number {
    const newNode = new SinglyLinkedNode(value);

    newNode.next = this.head;
    if (this.size === 0) {
      this.tail = newNode;
    }

    this.head = newNode;

    return ++this.size;
  }
}
