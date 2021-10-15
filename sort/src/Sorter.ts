import { NumberCollection } from "./NumberCollection";

export class Sorter {
  // shorter way of writing constructors
  constructor(public collection: NumberCollection) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j)) this.collection.swap(j);

        // typeof varName === 'string' etc is for primitives
        // varName instanceof Array etc is for every other value created with a constructor function

      }
    }
  }
}