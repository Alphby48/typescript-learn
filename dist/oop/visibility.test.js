"use strict";
class Counter {
    constructor() {
        this.counter = 0;
    }
    increment(val) {
        this.counter += val;
    }
    getIncrement() {
        return this.counter;
    }
}
class DoubleConter extends Counter {
    increment() {
        this.counter += 2;
    }
}
const konter = new Counter();
konter.increment(6);
// console.log(konter.getIncrement());
const doubleConter = new DoubleConter();
doubleConter.increment();
console.log(doubleConter.getIncrement());
