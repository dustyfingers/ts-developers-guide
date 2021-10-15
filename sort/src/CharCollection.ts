export class CharCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(idx: number): boolean {
    return this.data[idx].toLowerCase() > this.data[idx + 1].toLowerCase();
  }

  swap(idx: number): void {
    const strArray = this.data.split('');
    const leftVal = strArray[idx];
    strArray[idx] = strArray[idx + 1];
    strArray[idx + 1] = leftVal;

    this.data = strArray.join('');
  }
}