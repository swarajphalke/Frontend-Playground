interface Vehicle {
  brand: string;
  start(): void;
}

const bike: Vehicle = {
  brand: "Pulsar",
  start() {
    console.log("Bike Started");
  },
};
console.log(bike);
