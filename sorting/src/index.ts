class Sorter {
  //   collection: number[];
  //   constructor(collection: number[]) {
  //     this.collection = collection;
  //   }
  // SAME AS
  constructor(public collection: number[] | string) {}
  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // array type guard
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const temp = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = temp;
          }
        }
        // string type guard
        if (typeof this.collection === 'string') {
        }
      }
    }
  }
}
const sorter = new Sorter([1, 2, 0, 9, 8, -10]);
sorter.sort();
console.log(sorter.collection);
