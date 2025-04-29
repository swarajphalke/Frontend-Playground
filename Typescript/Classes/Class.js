var Person1 = /** @class */ (function () {
    function Person1(name, age) {
        this.name = name;
        this.age = age;
    }
    Person1.prototype.greet = function () {
        console.log(this.name + " " + this.age);
    };
    return Person1;
}());
var o1 = new Person1("Swaraj", 21);
o1.greet();
