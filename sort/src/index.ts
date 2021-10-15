class Sorter {
  // shorter way of writing constructors
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {

        // if collection is an array of numbers
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j+1]) {
            const temp = this.collection[j];
            this.collection[j] = this.collection[j+1];
            this.collection[j+1] = temp;
          }
        }

        // if collection is a string
        // this doubling is bad practice
        // if (typeof this.collection === 'string') {
        //   if (this.collection[j] > this.collection[j+1]) {
        //     const temp = this.collection[j];
        //     // this wont work with strings
        //     this.collection[j] = this.collection[j+1];
        //     this.collection[j+1] = temp;
        //   }
        // }

        // typeof varName === 'string' etc is for primitives
        // varName instanceof Array etc is for every other value created with a constructor function

      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
console.log(sorter.collection);
sorter.sort();
console.log(sorter.collection);