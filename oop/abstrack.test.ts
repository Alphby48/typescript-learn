abstract class Custom {
  readonly id: number;
  abstract name: string;

  constructor(id: number) {
    this.id = id;
  }

  abstract saycall(name: string): void;
}

class regular extends Custom {
  name: string;

  constructor(id: number, nama: string) {
    super(id);
    this.name = nama;
  }

  saycall(name: string): void {
    console.log(`hello ${name} i'm is ${this.name}`);
  }
}

const Regular = new regular(12, "Eko");
Regular.saycall("Dea");
console.log(Regular.id);
