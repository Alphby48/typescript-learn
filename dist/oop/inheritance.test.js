"use strict";
class Employee {
    constructor(nama) {
        this.nama = nama;
    }
}
class Manager extends Employee {
}
class Director extends Manager {
}
const employ = new Employee("eko");
console.log(employ.nama);
const manager = new Manager("budi");
console.log(manager.nama);
