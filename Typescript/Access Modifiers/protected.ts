class Employee {
  protected salary: number;

  constructor(salary: number) {
    this.salary = salary;
  }
}

class Manager extends Employee {
  showSalary() {
    console.log(`Managers salary : ${this.salary}`);
  }
}
const mgr = new Manager(50000);
mgr.showSalary();
// console.log(mgr.salary)