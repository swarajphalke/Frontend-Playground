class Car {
  public model: string;
  constructor(model: string) {
    this.model = model;
  }
}
const car1 = new Car("Toyota");
console.log(car1.model);
