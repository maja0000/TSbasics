export class NumbersCollection {
  constructor(public data: number[]) {}

  // getter will work more as a property than a method
  // (collection.length)
  get length(): number {
    return this.data.length;
  }

  compare(indexLeft: number, indexRight: number): boolean {
    return this.data[indexLeft] > this.data[indexRight];
  }
  swap(indexLeft: number, indexRight: number): void {
    // swap
    const leftElement = this.data[indexLeft];
    this.data[indexLeft] = this.data[indexRight];
    this.data[indexRight] = leftElement;
  }
}
