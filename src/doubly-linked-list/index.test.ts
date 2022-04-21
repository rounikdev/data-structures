import { DoublyLinkedList } from './index';

let dll: DoublyLinkedList<number>;

describe('DoublyLinkedList', () => {
  beforeEach(() => {
    dll = new DoublyLinkedList<number>();
  });

  it('Constrictor creates right instance', () => {
    expect(dll).toBeInstanceOf(DoublyLinkedList);
    expect(dll).toHaveProperty('size', 0);
  });

  it('is iterable', () => {
    dll.push(1);
    dll.push(2);
    dll.push(3);

    expect([...dll]).toEqual([1, 2, 3]);
  });

  it('static fromArray', () => {
    dll = DoublyLinkedList.fromArray([1, 2, 3]);

    expect(dll.toString()).toBe('1<->2<->3');
  });

  it('push', () => {
    dll.push(1);
    expect(dll).toHaveProperty('size', 1);

    dll.push(2);
    expect(dll).toHaveProperty('size', 2);
  });

  it('pop', () => {
    dll.push(1);
    dll.push(2);
    dll.push(3);

    let node = dll.pop();
    expect(node).toBe(3);
    expect(dll).toHaveProperty('size', 2);

    node = dll.pop();
    expect(node).toBe(2);
    expect(dll).toHaveProperty('size', 1);

    node = dll.pop();
    expect(node).toBe(1);
    expect(dll).toHaveProperty('size', 0);

    node = dll.pop();
    expect(node).toBe(null);
  });

  it('unshift', () => {
    dll.unshift(1);
    expect(dll).toHaveProperty('size', 1);

    dll.unshift(2);
    expect(dll).toHaveProperty('size', 2);
  });

  it('shift', () => {
    dll.unshift(1);
    dll.unshift(2);

    let node = dll.shift();
    expect(node).toBe(2);
    expect(dll).toHaveProperty('size', 1);

    node = dll.shift();
    expect(node).toBe(1);
    expect(dll).toHaveProperty('size', 0);

    node = dll.shift();
    expect(node).toBe(null);
  });

  it('toString', () => {
    dll.push(1);
    dll.push(2);
    dll.push(3);

    expect(dll).toHaveProperty('size', 3);
    expect(dll.toString()).toBe('1<->2<->3');
  });

  it('get', () => {
    dll.push(1);
    dll.push(2);
    dll.push(3);

    expect(dll.get(-1)).toBe(null);
    expect(dll.get(3)).toBe(null);

    expect(dll.get(0)).toBe(1);
    expect(dll.get(1)).toBe(2);
    expect(dll.get(2)).toBe(3);
  });

  it('insert', () => {
    dll.push(1);
    dll.push(2);
    dll.push(3);

    expect(dll.insert(4, -1)).toBe(false);
    expect(dll.insert(4, 4)).toBe(false);

    expect(dll.insert(4, 3)).toBe(true);
    expect(dll).toHaveProperty('size', 4);
    expect(dll.toString()).toBe('1<->2<->3<->4');

    expect(dll.insert(0, 0)).toBe(true);
    expect(dll).toHaveProperty('size', 5);
    expect(dll.toString()).toBe('0<->1<->2<->3<->4');

    expect(dll.insert(7, 2)).toBe(true);
    expect(dll).toHaveProperty('size', 6);
    expect(dll.toString()).toBe('0<->1<->7<->2<->3<->4');
  });

  it('remove', () => {
    dll.push(1);
    dll.push(2);
    dll.push(3);

    expect(dll.remove(-1)).toBe(null);
    expect(dll.remove(4)).toBe(null);

    expect(dll.remove(1)).toBe(2);
    expect(dll).toHaveProperty('size', 2);

    expect(dll.remove(1)).toBe(3);
    expect(dll).toHaveProperty('size', 1);

    expect(dll.remove(0)).toBe(1);
    expect(dll).toHaveProperty('size', 0);
  });

  it('set', () => {
    dll.push(1);
    dll.push(2);
    dll.push(3);

    expect(dll.set(7, -1)).toBe(false);
    expect(dll.set(7, 3)).toBe(false);

    expect(dll.set(7, 2)).toBe(true);

    expect(dll.set(7, 0)).toBe(true);

    expect(dll).toHaveProperty('size', 3);
  });

  it('reverse', () => {
    dll.push(1);
    expect(dll.reverse().toString()).toBe('1');

    dll.push(2);
    dll.push(3);
    dll.push(4);
    dll.push(5);

    expect(dll.toString()).toBe('1<->2<->3<->4<->5');

    dll.reverse();
    expect(dll.toString()).toBe('5<->4<->3<->2<->1');
  });
});
