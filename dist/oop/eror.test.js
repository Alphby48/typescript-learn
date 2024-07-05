"use strict";
class Validations extends Error {
    constructor(message) {
        super(message);
        this.message = message;
    }
}
function double(val) {
    if (val < 0) {
        throw new Validations("error ");
    }
    return val * 2;
}
try {
    const result = double(3);
    console.log(result);
}
catch (e) {
    if (e instanceof Validations) {
        console.log(e.message);
    }
}
