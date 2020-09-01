interface Sortable {
  length: number;
  compare(indexLeft: number, indexRight: number): boolean;
  swap(indexLeft: number, indexRight: number): void;
}
export abstract class Sorter {
  abstract compare(indexLeft: number, indexRight: number): boolean;
  abstract swap(indexLeft: number, indexRight: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          // swap
          this.swap(j, j + 1);
        }
      }
    }
  }
}
