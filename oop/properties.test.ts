class Customer {
  readonly id: number;
  name: string = "";
  age?: number;

  constructor(id: number, name: string) {
    (this.id = id), (this.name = name);
  }

  sayHello(name: string): void {
    console.log(`hello ${name}, my name is ${this.name}`);
  }
}

const customer: Customer = new Customer(1, "jhon");
customer.age = 12;

console.log(customer.id);

// method

customer.sayHello("eko");
