const team = [
  {
    id: 1,
    Name: "a",
    Email: "a_@gmail.com",
    Phone: "03459222222",
    isProgrammer: true,
    salary: 10000,
  },
  {
    id: 2,
    Name: "b",
    Email: "b_@gmail.com",
    Phone: "03459222222",
    isProgrammer: false,
    salary: 20000,
  },
  {
    id: 3,
    Name: "c",
    Email: "c_@gmail.com",
    Phone: "03459222222",
    isProgrammer: true,
    salary: 30000,
  },
  {
    id: 4,
    Name: "d",
    Email: "d_@gmail.com",
    Phone: "03459222222",
    isProgrammer: false,
    salary: 40000,
  },
];

console.table(team);

let totalSalary = team
  ?.filter((item) => item)
  .map((item) => item.salary)
  .reduce((acc, item) => acc + item);

console.log("The total salary of all employees:", totalSalary);
