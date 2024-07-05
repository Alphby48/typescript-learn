class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Karyawan extends Person {
  departement: string;

  constructor(name: string, departement: string) {
    super(name);
    this.departement = departement;
  }
}

const karyawan = new Karyawan("gita", "generasi 6");

console.log(karyawan.name);
console.log(karyawan.departement);
