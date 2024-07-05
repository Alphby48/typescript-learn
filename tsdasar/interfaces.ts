import { tambah } from "../src/employ.inter";
import { Seller } from "../src/seller.interfaces";

const person1: Seller = {
  id: 13,
  name: "michie",
  nib: "121212121",
  npwp: "34434343434",
};

person1.name = "anindya";
//person1.nib = "464664";
console.log(person1);

// function interfaces

interface addFunction {
  (values1: number, values2: number): number;
}

const add: addFunction = (values1: number, values2: number): number => {
  return values1 + values2;
};

console.log(add(2, 5));

// indexable interfaces

interface stringArray {
  [index: number]: string;
}

const arr: stringArray = ["gracie", "greesel", "alya"];

console.log(arr);

// interfaces for non number index

interface StringDictionary {
  [key: string]: string;
}

const dictionary: StringDictionary = {
  name: "gendis",
};
console.log(dictionary);

// support extends interface

const employ: tambah = {
  id: "2",
  name: "christy",
  division: "member inti",
  kontrak: "belum graduation",
};

console.log(employ);

// function on interface

interface Hello {
  name: string;
  sayhello1(values: string): string;
}

const halo: Hello = {
  name: "marsha",
  sayhello1: function (values: string): string {
    return `hello ${values}, my name is ${this.name}`;
  },
};

// halo.sayhello1("azizi");

console.log(halo.sayhello1("azizi"));

// intersection types

interface hasId {
  id: number;
}

interface hasName {
  name: string;
}

type Domain = hasId & hasName;

const domain: Domain = {
  id: 1,
  name: "olla",
};

console.log(domain);

//type assertions

const peron: any = {
  id: 12,
  name: "jessi",
};

const peron1: Hello = peron as Hello;
// terjadi eror karna interface gak sama
console.log(peron1);
