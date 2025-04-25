var Dogg = /** @class */ (function () {
    function Dogg(name) {
        this.name = name;
    }
    Dogg.prototype.sound = function () {
        console.log("".concat(this.name, " says bhooh!"));
    };
    return Dogg;
}());
var myDog = new Dogg("Rex");
myDog.sound();
