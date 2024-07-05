class Developer {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello(name: string): void {
    console.log(`hai ${name} saya ${this.name} seorang developer`);
  }
}

class ProductManager extends Developer {
  sayHello(name: string): void {
    super.sayHello(name);
    console.log(`hai ${name} saya ${this.name} seorang Product Mananger`);
  }
}

const developer = new Developer("Jesslyn");
developer.sayHello("aditya");

const productManager = new ProductManager("sandhika galih");
productManager.sayHello("eko");
