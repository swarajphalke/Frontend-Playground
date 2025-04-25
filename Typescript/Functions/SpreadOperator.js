"use strict";
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let arr3 = [11, 22, 33, ...arr1, ...arr2];
console.log(arr3);
let obj1 = { rollNo: 1, name: "Swaraj" };
let obj2 = { rollNo: 2, name: "Mayuresh" };
let obj3 = Object.assign(Object.assign({}, obj1), obj2);
console.log(obj3);
