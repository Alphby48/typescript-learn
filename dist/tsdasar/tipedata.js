"use strict";
// string
let nama = "adel";
console.log(nama);
// number
let num = 13;
console.log(num);
// boolean
let bol = true;
console.log(bol);
// any
const tipeAny = {
    id: 1,
    nama1: "fritzy",
};
console.log(tipeAny);
// Union
let yun = "eko";
console.log(yun);
yun = 13;
console.log(yun);
// menggunakan union
function proces(valued) {
    if (typeof valued === "string") {
        return valued;
    }
    else if (typeof valued === "number") {
        return valued + 2;
    }
    else {
        return !valued;
    }
}
console.log(proces("test"));
