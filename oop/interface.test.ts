// support inheritance
interface HasName {
  nama: string;
}

interface CanSayHello {
  sayHello(nama: string): void;
}

class Personil implements HasName, CanSayHello {
  nama: string;

  constructor(nama: string) {
    this.nama = nama;
  }

  sayHello(nama: string): void {
    console.log(`hallo ${nama}. my name ${this.nama}`);
  }
}

const personil = new Personil("aditya");

personil.sayHello("ijat");
