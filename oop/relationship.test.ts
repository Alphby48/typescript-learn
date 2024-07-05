class Personn {
  constructor(public name: string) {}
}

class Cust {
  constructor(public name: string) {}
}

const pers: Personn = new Cust("Eko");
console.log(pers.name);
