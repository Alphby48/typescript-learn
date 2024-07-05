"use strict";
// function
function sayHello2(name) {
    return `hello ${name}`;
}
console.log(sayHello2("flora"));
// menggunakan tipe data void
function sayHello3() {
    console.log("name");
}
console.log(sayHello3());
// suport default value
function sayHello4(name = "cok") {
    return `hello ${name}`;
}
console.log(sayHello4("asu"));
console.log(sayHello4());
// support rest parameter
function sprtRest(...values) {
    let total = 0;
    for (const value of values) {
        total += value;
    }
    return total;
}
console.log(sprtRest(1, 2, 3, 4, 5));
// optional parameter
function optional(val1, val2) {
    return `halo ${val1} ${val2}`;
}
console.log(optional("abdul"));
function callMe(values) {
    if (typeof values === "string") {
        return values.toUpperCase();
    }
    else if (typeof values === "number") {
        return values * 10;
    }
}
console.log(callMe("adel"));
console.log(callMe(14));
//function as parameter
function panggil(nama, filter) {
    return `hello ${filter(nama)}`;
}
function toUpper(nama) {
    return nama.toUpperCase();
}
console.log(panggil("oniel", toUpper));
// anonymous function
function sayHello5(name, func) {
    return `Hello ${func(name)}. Welcome`;
}
console.log(sayHello5("indah", (name) => name.toUpperCase()));
