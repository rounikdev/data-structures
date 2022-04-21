/**
 * @class SinglyLinkedNode<T>
 *
 * Used in SinglyLinkedList<T>, Stack<T> and Queue<T>
 */
export class SinglyLinkedNode<T> {
  next: SinglyLinkedNode<T> | null;

  value: T;

  constructor(value: T) {
    this.next = null;

    this.value = value;
  }
}
