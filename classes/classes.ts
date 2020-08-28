class Vehicle {
  protected sound(): void {
    console.log('brum brum');
  }
}
class Bike extends Vehicle {
  private speed(): void {
    console.log('not so fast');
  }
  startDriving(): void {
    this.speed();
    this.sound();
  }
}
// modifyiers - by default public
// private  - can't use from outside
// protected - can use in child classes but nowhere else

const bike = new Bike();
bike.speed();
// console.log(bike);
