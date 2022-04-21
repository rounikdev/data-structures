import { Queue } from './index';

let queue: Queue<number>;

describe('Queue', () => {
  beforeEach(() => {
    queue = new Queue<number>();
  });

  it('Constrictor creates right instance', () => {
    expect(queue).toBeInstanceOf(Queue);
    expect(queue).toHaveProperty('size', 0);
  });

  it('is iterable', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect([...queue]).toEqual([1, 2, 3]);
  });

  it('enqueue', () => {
    queue.enqueue(1);
    expect(queue).toHaveProperty('size', 1);

    queue.enqueue(2);
    expect(queue).toHaveProperty('size', 2);
  });

  it('dequeue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    let value = queue.dequeue();
    expect(value).toBe(1);
    expect(queue).toHaveProperty('size', 2);

    value = queue.dequeue();
    expect(value).toBe(2);
    expect(queue).toHaveProperty('size', 1);

    value = queue.dequeue();
    expect(value).toBe(3);
    expect(queue).toHaveProperty('size', 0);

    value = queue.dequeue();
    expect(value).toBeNull();
  });

  it('toString', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue).toHaveProperty('size', 3);
    expect(queue.toString()).toBe('Queue <1,2,3>');
  });
});
