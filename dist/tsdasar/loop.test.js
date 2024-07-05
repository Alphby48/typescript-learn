"use strict";
// for
const namas = ["jokio", "fadil"];
for (let i = 0; i < namas.length; i++) {
    console.log(namas[i]);
}
for (const nama of namas) {
    console.log(nama);
}
for (const index in namas) {
    console.log(namas[index]);
}
// While
let numb = 0;
while (numb < 10) {
    console.log(numb);
    numb++;
}
// do while
do {
    console.log(numb);
    numb++;
} while (numb < 20);
// break and continue
let conter = 0;
do {
    conter++;
    if (conter == 10) {
        break;
    }
    if (conter % 2 == 0) {
        continue;
    }
    console.log(conter);
} while (true);
