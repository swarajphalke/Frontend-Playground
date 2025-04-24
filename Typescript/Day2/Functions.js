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
// REST Parameter Function
function addNo() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < n.length; i++) {
        sum = sum + n[i];
    }
    return sum;
}
console.log("Sum of numbers: " + addNo(1, 2, 3, 4, 5));
console.log("Sum of numbers: " + addNo(10, 20, 30, 40, 50, 60));
// Arrow Function
var show = function (name) {
    console.log("Hello " + name);
};
show("Swaraj");
