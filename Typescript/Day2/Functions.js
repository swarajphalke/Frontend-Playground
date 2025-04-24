// Types of Functions in TypeScript
// 1. Optional Parameter Function
// 2. Default Parameter Function
// 3. REST Parameter Function
// 4. Arrow Function
// Optional Parameter Function
function disp(id, name, email) {
    console.log("ID: " + id + " " + "Name: " + name);
    if (email) {
        console.log("Email: " + email);
    }
}
disp(1, "Swaraj");
console.log("-----------------");
disp(1, "Swaraj", "swaraj@gmail.com");
// Default Parameter Function
function data(name, state) {
    if (state === void 0) { state = "Maharashtra"; }
    console.log("Name: " + name + " " + "State: " + state);
}
data("John");
data("Alice", "Madhya Pradesh");
