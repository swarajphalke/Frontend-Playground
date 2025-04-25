interface User {
  readonly address: string;
  name: string;
}

const noob: User = {
  address: "Wai",
  name: "Swaraj",
};

// noob.address="Pune"
noob.name="Viraj"
console.log(noob);
