/**
 * @class DoublyLinkedNode<T>
 *
 * Used in DoublyLinkedList<T>
 */
export class DoublyLinkedNode<T> {
  next: DoublyLinkedNode<T> | null;

  prev: DoublyLinkedNode<T> | null;

  value: T;

  constructor(value: T) {
    this.next = null;

    this.prev = null;

    this.value = value;
  }
}
