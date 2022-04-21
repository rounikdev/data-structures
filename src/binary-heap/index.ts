import { swap } from '@helpers';

import { Comparator } from '../types';

export class BinaryHeap<T> {
  private comparator: Comparator<T>;

  private values: T[];

  public size: number;

  constructor(comparator: Comparator<T>) {
    if (typeof comparator !== 'function') {
      throw new Error(
        `Comparator must be a function: Comparator<T> = (a: T, b: T) => boolean`
      );
    }

    this.comparator = comparator;

    this.size = 0;

    this.values = [];
  }

  /**
   * Returns the root element without extracting it.
   *
   * NB: Don't modify if it's an object
   *
   * Time complexity: O(1)
   * Space complexity: O(1)
   *
   * @returns {T | null}
   */
  public root(): T | null {
    return this.values[0] || null;
  }

  /**
   * Finds the right spot for a newly added element
   *
   * Time complexity: O(logN)
   * Space complexity: O(1)
   *
   */
  private bubbleUp(): void {
    let currentIndex = this.values.length - 1;

    let parentIndex = Math.floor((currentIndex - 1) / 2);

    while (parentIndex >= 0) {
      if (
        this.comparator(this.values[currentIndex], this.values[parentIndex])
      ) {
        swap(this.values, currentIndex, parentIndex);

        currentIndex = parentIndex;

        parentIndex = Math.floor((currentIndex - 1) / 2);
      } else {
        break;
      }
    }
  }

  /**
   * Finds the right place for the temporary root
   *
   * Time complexity: O(logN)
   * Space complexity: O(1)
   *
   */
  private sinkDown(): void {
    const length = this.values.length;

    let currentIndex = 0;

    const current = this.values[currentIndex];

    let leftChildIndex = 2 * currentIndex + 1;

    let leftChild = this.values[leftChildIndex];

    let rightChildIndex = leftChildIndex + 1;

    let rightChild = this.values[rightChildIndex];

    while (leftChildIndex < length) {
      if (rightChildIndex < length) {
        const indexToCompare = this.comparator(rightChild, leftChild)
          ? rightChildIndex
          : leftChildIndex;

        const elementToCompare = this.values[indexToCompare];

        if (this.comparator(elementToCompare, current)) {
          swap(this.values, currentIndex, indexToCompare);

          currentIndex = indexToCompare;
        } else {
          break;
        }
      } else {
        if (this.comparator(leftChild, current)) {
          swap(this.values, currentIndex, leftChildIndex);

          currentIndex = leftChildIndex;
        } else {
          break;
        }
      }

      leftChildIndex = 2 * currentIndex + 1;

      leftChild = this.values[leftChildIndex];

      rightChildIndex = leftChildIndex + 1;

      rightChild = this.values[rightChildIndex];
    }
  }

  /**
   * Extract the root element and set a new one.
   *
   * Time complexity: O(logN)
   * Space complexity: O(1)
   *
   * @returns {T | null}
   */
  public extract(): T | null {
    let value = null;

    switch (this.size) {
      case 0:
        break;

      case 1:
        value = this.values.pop();

        break;

      default:
        swap(this.values, 0, this.size - 1);

        value = this.values.pop();

        this.sinkDown();
    }

    this.size = Math.max(0, --this.size);

    return value ?? null;
  }

  /**
   * Add element to the heap
   *
   * Time complexity: O(logN)
   * Space complexity: O(1)
   *
   * @param {T} value
   *
   * @returns {number} the size of the heap
   */

  public insert(value: T): number {
    this.values.push(value);

    this.bubbleUp();

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
    return `BinaryHeap ${this.values.toString()}`;
  }
}
