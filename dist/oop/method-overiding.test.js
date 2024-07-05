"use strict";
class Developer {
    constructor(name) {
        this.name = name;
    }
    sayHello(name) {
        console.log(`hai ${name} saya ${this.name} seorang developer`);
    }
}
class ProductManager extends Developer {
    sayHello(name) {
        super.sayHello(name);
        console.log(`hai ${name} saya ${this.name} seorang Product Mananger`);
    }
}
const developer = new Developer("Jesslyn");
developer.sayHello("aditya");
const productManager = new ProductManager("sandhika galih");
productManager.sayHello("eko");
