import { BinaryHeap } from "./src/binary-heap";

interface Item {
  value: number;
}

const bh = new BinaryHeap<Item>((a: Item, b: Item) => a.value > b.value);

bh.insert({ value: 41 });
bh.insert({ value: 39 });
bh.insert({ value: 33 });
bh.insert({ value: 18 });
bh.insert({ value: 27 });
bh.insert({ value: 12 });
bh.insert({ value: 55 });

console.log(bh);
console.log(bh.extract());
console.log(bh.extract());
console.log(bh + "");
