interface Vehicle {
  year: Date;
  broken: boolean;
  color: string;
}

let oldCitroen = {
  year: new Date(),
  broken: true,
  color: 'red',
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.year, vehicle.broken, vehicle.color);
};
printVehicle(oldCitroen);
