export class NumberCollection {
  constructor(public data: number[]) {}

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

