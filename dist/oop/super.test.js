"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Karyawan extends Person {
    constructor(name, departement) {
        super(name);
        this.departement = departement;
    }
}
const karyawan = new Karyawan("gita", "generasi 6");
console.log(karyawan.name);
console.log(karyawan.departement);
