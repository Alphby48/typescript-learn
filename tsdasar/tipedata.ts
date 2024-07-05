// string
let nama: string = "adel";
console.log(nama);

// number

let num: number = 13;
console.log(num);

// boolean
let bol: boolean = true;
console.log(bol);

// any

const tipeAny: any = {
  id: 1,
  nama1: "fritzy",
};

console.log(tipeAny);

// Union

let yun: number | string | boolean = "eko";
console.log(yun);
yun = 13;
console.log(yun);

// menggunakan union

function proces(valued: number | string | boolean) {
  if (typeof valued === "string") {
    return valued;
  } else if (typeof valued === "number") {
    return valued + 2;
  } else {
    return !valued;
  }
}

console.log(proces("test"));
