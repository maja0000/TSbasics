// genetic interface

interface ReportableItem {
  //   year: Date;
  //   broken: boolean;
  //   color: string;
  summary(): string;
}

let oldCitroen = {
  year: new Date(),
  broken: true,
  color: 'red',
  summary(): string {
    return `Color is ${this.color}`;
  },
};
let drink = {
  year: new Date(),
  carbonated: true,
  color: 'brown',
  summary(): string {
    return `My drinks color is ${this.color}`;
  },
};

// reusable function for both
const printSummary = (item: ReportableItem): void => {
  //   console.log(vehicle.year, vehicle.broken, vehicle.color);
  console.log(item.summary);
};
printSummary(oldCitroen);
printSummary(drink);
