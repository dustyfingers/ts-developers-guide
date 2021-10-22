export interface Sortable {
  length: number;
  compare(idx: number): boolean;
  swap(idx: number): void;
}

export class Sorter {

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j)) this.swap(j);
        // typeof varName === 'string' etc is for primitives
        // varName instanceof Array etc is for every other value created with a constructor function
      }
    }
  }
}