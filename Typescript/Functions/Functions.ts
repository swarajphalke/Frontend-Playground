// Types of Functions in TypeScript
// 1. Optional Parameter Function
// 2. Default Parameter Function
// 3. REST Parameter Function
// 4. Arrow Function

// Optional Parameter Function
function disp(id: number, name: string, email?: string): void {
  console.log("ID: " + id + " " + "Name: " + name);
  if (email) {
    console.log("Email: " + email);
  }
}
disp(1, "Swaraj");
console.log("-----------------");
disp(1, "Swaraj", "swaraj@gmail.com");


// Default Parameter Function
function data(name: string, state: string = "Maharashtra") {
  console.log("Name: " + name + " " + "State: " + state);
}
data("John");
data("Alice", "Madhya Pradesh");


// REST Parameter Function
function addNo(...n: number[]): number {
  let i: number;
  let sum: number = 0;
  for (i = 0; i < n.length; i++) {
    sum = sum + n[i];
  }
  return sum;
}
console.log("Sum of numbers: " + addNo(1, 2, 3, 4, 5));
console.log("Sum of numbers: " + addNo(10, 20, 30, 40, 50, 60));


// Arrow Function
let show = (name:string) =>{
    console.log("Hello " + name);
}
show("Swaraj");
