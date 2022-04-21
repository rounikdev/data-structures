import { Stack } from './index';

let stack: Stack<number>;

describe('Stack', () => {
  beforeEach(() => {
    stack = new Stack<number>();
  });

  it('Constructor creates right instance', () => {
    expect(stack).toBeInstanceOf(Stack);
    expect(stack).toHaveProperty('size', 0);
  });

  it('is iterable', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect([...stack]).toEqual([3, 2, 1]);
  });

  it('push', () => {
    stack.push(1);
    expect(stack).toHaveProperty('size', 1);

    stack.push(2);
    expect(stack).toHaveProperty('size', 2);
  });

  it('pop', () => {
    let value = stack.pop();
    expect(value).toBe(null);

    stack.push(1);
    stack.push(2);
    stack.push(3);

    value = stack.pop();
    expect(value).toBe(3);
    expect(stack).toHaveProperty('size', 2);

    value = stack.pop();
    expect(value).toBe(2);
    expect(stack).toHaveProperty('size', 1);

    value = stack.pop();
    expect(value).toBe(1);
    expect(stack).toHaveProperty('size', 0);

    value = stack.pop();
    expect(value).toBeNull();
  });

  it('toString', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack).toHaveProperty('size', 3);
    expect(stack.toString()).toBe('Stack <3,2,1>');
  });
});
