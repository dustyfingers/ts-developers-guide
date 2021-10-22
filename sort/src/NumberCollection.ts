import { Sorter } from './Sorter';

export class NumberCollection extends Sorter {
  constructor(public data: number[]) {
    super(this.data);
  }

  get length(): number {
    return this.data.length;
  }

  compare(idx: number): boolean {
    return this.data[idx] > this.data[idx + 1];
  }

  swap(idx: number): void {
    const leftVal = this.data[idx];
    this.data[idx] = this.data[idx + 1];
    this.data[idx + 1] = leftVal;
  }
}

