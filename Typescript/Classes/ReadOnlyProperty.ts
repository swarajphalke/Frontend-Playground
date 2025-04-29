class student {
  readonly rollNumber: number;

  constructor(roll: number) {
    this.rollNumber = roll;
  }

  showRoll() {
    console.log(`Roll No : ${this.rollNumber}`);
  }
}

const s1 = new student(101);
s1.showRoll();
// s1.rollNumber=120
