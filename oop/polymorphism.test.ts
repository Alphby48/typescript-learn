class Employee1 {
  constructor(public name: string) {}
}

class Manager2 extends Employee1 {}

class VicePresident extends Manager2 {}

function sayName(employeee: Employee1): void {
  //Type Cast

  if (employeee instanceof VicePresident) {
    const vp = employeee as VicePresident;
    console.log(`hello vp ${vp.name}`);
  } else if (employeee instanceof Manager2) {
    const manager = employeee as Manager2;
    console.log(`hello manager ${manager.name}`);
  } else {
    console.log(`hello employee ${employeee.name}`);
  }
}

let employeee: Employee1 = new Employee1("Eko");
console.log(employeee);

employeee = new Manager2("eko");
console.log(employeee);

employeee = new VicePresident("sandhika");
console.log(employeee);

// support parameter polymorphosm
sayName(new Employee1("Eko Kurniawan"));
sayName(new Manager2("Shandika Galih"));
sayName(new VicePresident("Dea Afrizal"));