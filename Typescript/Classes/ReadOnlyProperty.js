var student = /** @class */ (function () {
    function student(roll) {
        this.rollNumber = roll;
    }
    student.prototype.showRoll = function () {
        console.log("Roll No : ".concat(this.rollNumber));
    };
    return student;
}());
var s1 = new student(101);
s1.showRoll();
// s1.rollNumber=120
