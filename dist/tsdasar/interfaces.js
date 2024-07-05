const person1 = {
    id: 13,
    name: "michie",
    nib: "121212121",
    npwp: "34434343434",
};
person1.name = "anindya";
//person1.nib = "464664";
console.log(person1);
const add = (values1, values2) => {
    return values1 + values2;
};
console.log(add(2, 5));
const arr = ["gracie", "greesel", "alya"];
console.log(arr);
const dictionary = {
    name: "gendis",
};
console.log(dictionary);
// support extends interface
const employ = {
    id: "2",
    name: "christy",
    division: "member inti",
    kontrak: "belum graduation",
};
console.log(employ);
const halo = {
    name: "marsha",
    sayhello1: function (values) {
        return `hello ${values}, my name is ${this.name}`;
    },
};
// halo.sayhello1("azizi");
console.log(halo.sayhello1("azizi"));
const domain = {
    id: 1,
    name: "olla",
};
console.log(domain);
//type assertions
const peron = {
    id: 12,
    name: "jessi",
};
const peron1 = peron;
// terjadi eror karna interface gak sama
console.log(peron1);
export {};
