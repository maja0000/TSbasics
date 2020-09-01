import { Sorter } from './Sorter';

export class StringCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }
  compare(indexLeft: number, indexRight: number): boolean {
    return (
      this.data[indexLeft].toLowerCase() > this.data[indexRight].toLowerCase()
    );
  }
  swap(indexLeft: number, indexRight: number): void {
    const arr = this.data.split('');

    const leftElement = arr[indexLeft];
    arr[indexLeft] = arr[indexRight];
    arr[indexRight] = leftElement;
    this.data = arr.join('');
  }
}
