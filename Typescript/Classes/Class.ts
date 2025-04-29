class Person1 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(this.name + " " + this.age);
  }
}

const o1 = new Person1("Swaraj", 21);
o1.greet();
