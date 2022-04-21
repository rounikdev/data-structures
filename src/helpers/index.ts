/**
 * Swaps two elements of an array
 *
 * @param array
 * @param a index of the first elements
 * @param b index of the second element
 */
export const swap = (array: unknown[], a: number, b: number): void => {
  [array[a], array[b]] = [array[b], array[a]];
};
