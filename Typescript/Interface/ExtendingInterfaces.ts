interface Men {
  name: string;
  age: number;
}
interface Manager extends Men {
  ManagerId: number;
}


const emp: Manager = {
  name: "Swaraj",
  age: 20,
  ManagerId: 101,
};

console.log(emp);
