"use strict";
function sayHello(nama) {
    if (nama) {
        console.log(`hello ${nama}`);
    }
    else {
        console.log("hello");
    }
}
const nama1 = undefined;
sayHello(nama1);
