"use strict";
class Personil {
    constructor(nama) {
        this.nama = nama;
    }
    sayHello(nama) {
        console.log(`hallo ${nama}. my name ${this.nama}`);
    }
}
const personil = new Personil("aditya");
personil.sayHello("ijat");
