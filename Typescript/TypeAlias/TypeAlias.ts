type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  department: string;
};

// Type Example
const Data: Person = {
  name: "John",
  age: 20,
};
console.log(Data);

// Type -> Intersection Example
type Ex1 = Person & Employee;
const Ex2: Ex1 = {
  name: "Swaraj",
  age: 20,
  employeeId: 1,
  department: "Science",
};
console.log(Ex2);

const Data2: Person & Employee = {
  name: "Siddharth",
  age: 20,
  employeeId: 2,
  department: "Commerce",
};
console.log(Data2);

// Type -> Union
type DateValue = string | number | boolean;
let myDate: DateValue;
myDate = "2025-04-24"; // ✅ valid
myDate = 1682372842; // ✅ valid
myDate = true; // ✅ valid
//myDate = {}; // ❌ invalid

type Dog = { name: string; breed: string };
type Cat = { name: string; color: string };
type Pet = Dog | Cat;
const myPet: Pet = {
    name:"tommy",
    color:"black"
}