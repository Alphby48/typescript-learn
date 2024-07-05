"use strict";
class Custom {
    constructor(id) {
        this.id = id;
    }
}
class regular extends Custom {
    constructor(id, nama) {
        super(id);
        this.name = nama;
    }
    saycall(name) {
        console.log(`hello ${name} i'm is ${this.name}`);
    }
}
const Regular = new regular(12, "Eko");
Regular.saycall("Dea");
console.log(Regular.id);
