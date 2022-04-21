import { SinglyLinkedList } from './index';

let sll: SinglyLinkedList<number>;

describe('SinglyLinkedList', () => {
  beforeEach(() => {
    sll = new SinglyLinkedList<number>();
  });

  it('Constrictor creates right instance', () => {
    expect(sll).toBeInstanceOf(SinglyLinkedList);
    expect(sll).toHaveProperty('size', 0);
  });

  it('is iterable', () => {
    sll.push(1);
    sll.push(2);
    sll.push(3);

    expect([...sll]).toEqual([1, 2, 3]);
  });

  it('static fromArray', () => {
    sll = SinglyLinkedList.fromArray([1, 2, 3]);

    expect(sll.toString()).toBe('1->2->3');
  });

  it('push', () => {
    sll.push(1);
    expect(sll).toHaveProperty('size', 1);

    sll.push(2);
    expect(sll).toHaveProperty('size', 2);
  });

  it('pop', () => {
    sll.push(1);
    sll.push(2);
    sll.push(3);

    let node = sll.pop();
    expect(node).toBe(3);
    expect(sll).toHaveProperty('size', 2);

    node = sll.pop();
    expect(node).toBe(2);
    expect(sll).toHaveProperty('size', 1);

    node = sll.pop();
    expect(node).toBe(1);
    expect(sll).toHaveProperty('size', 0);

    node = sll.pop();
    expect(node).toBe(null);
  });

  it('unshift', () => {
    sll.unshift(1);
    expect(sll).toHaveProperty('size', 1);

    sll.unshift(2);
    expect(sll).toHaveProperty('size', 2);
  });

  it('shift', () => {
    sll.unshift(1);
    sll.unshift(2);

    let node = sll.shift();
    expect(node).toBe(2);
    expect(sll).toHaveProperty('size', 1);

    node = sll.shift();
    expect(node).toBe(1);
    expect(sll).toHaveProperty('size', 0);

    node = sll.shift();
    expect(node).toBe(null);
  });

  it('toString', () => {
    sll.push(1);
    sll.push(2);
    sll.push(3);

    expect(sll).toHaveProperty('size', 3);
    expect(sll.toString()).toBe('1->2->3');
  });

  it('get', () => {
    sll.push(1);
    sll.push(2);
    sll.push(3);

    expect(sll.get(-1)).toBe(null);
    expect(sll.get(3)).toBe(null);

    expect(sll.get(0)).toBe(1);
    expect(sll.get(1)).toBe(2);
    expect(sll.get(2)).toBe(3);
  });

  it('insert', () => {
    sll.push(1);
    sll.push(2);
    sll.push(3);

    expect(sll.insert(4, -1)).toBe(false);
    expect(sll.insert(4, 4)).toBe(false);

    expect(sll.insert(4, 3)).toBe(true);
    expect(sll).toHaveProperty('size', 4);
    expect(sll.toString()).toBe('1->2->3->4');

    expect(sll.insert(0, 0)).toBe(true);
    expect(sll).toHaveProperty('size', 5);
    expect(sll.toString()).toBe('0->1->2->3->4');

    expect(sll.insert(7, 2)).toBe(true);
    expect(sll).toHaveProperty('size', 6);
    expect(sll.toString()).toBe('0->1->7->2->3->4');
  });

  it('remove', () => {
    sll.push(1);
    sll.push(2);
    sll.push(3);

    expect(sll.remove(-1)).toBe(null);
    expect(sll.remove(4)).toBe(null);

    expect(sll.remove(1)).toBe(2);
    expect(sll).toHaveProperty('size', 2);

    expect(sll.remove(1)).toBe(3);
    expect(sll).toHaveProperty('size', 1);

    expect(sll.remove(0)).toBe(1);
    expect(sll).toHaveProperty('size', 0);
  });

  it('set', () => {
    sll.push(1);
    sll.push(2);
    sll.push(3);

    expect(sll.set(7, -1)).toBe(false);
    expect(sll.set(7, 3)).toBe(false);

    expect(sll.set(7, 2)).toBe(true);

    expect(sll.set(7, 0)).toBe(true);

    expect(sll).toHaveProperty('size', 3);
  });

  it('reverse', () => {
    sll.push(1);
    expect(sll.reverse().toString()).toBe('1');

    sll.push(2);
    sll.push(3);
    sll.push(4);
    sll.push(5);

    expect(sll.toString()).toBe('1->2->3->4->5');

    sll.reverse();
    expect(sll.toString()).toBe('5->4->3->2->1');
  });
});
