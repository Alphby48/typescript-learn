"use strict";
class Customer {
    constructor(id, name) {
        this.name = "";
        (this.id = id), (this.name = name);
    }
    sayHello(name) {
        console.log(`hello ${name}, my name is ${this.name}`);
    }
}
const customer = new Customer(1, "jhon");
customer.age = 12;
console.log(customer.id);
// method
customer.sayHello("eko");
