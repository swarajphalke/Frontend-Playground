"use strict";
// User Defined Data Types ->
// User defined data types are the data types that are defined by the user.
// Array
// Tuples
// Functions (In next folder)
// Classes   (In next folder)
// Enums
// Array  
let arr = [1, 2, 3, 4, 5];
console.log(arr);
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
// Tuples
let t = [1, "hello", true, null];
console.log(t);
let t1 = [[1, "hello", true, null], [2, "world", false, null]];

console.log(t1);
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color.Red); // 0
console.log(Color);
