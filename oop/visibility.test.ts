class Counter {
  protected counter: number = 0;

  public increment(val: number): void {
    this.counter += val;
  }
  public getIncrement(): number {
    return this.counter;
  }
}

class DoubleConter extends Counter {
  public increment(): void {
    this.counter += 2;
  }
}
const konter = new Counter();
konter.increment(6);

// console.log(konter.getIncrement());

const doubleConter = new DoubleConter();
doubleConter.increment();

console.log(doubleConter.getIncrement());
