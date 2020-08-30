interface Sortable {
  // will sort whatever data type as long as passes directions :
  length: number;
  compare(indexLeft: number, indexRight: number): boolean;
  swap(indexLeft: number, indexRight: number): void;
}
export class Sorter {
  constructor(public collection: Sortable) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          // swap
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
