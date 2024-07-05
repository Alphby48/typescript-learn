class Configuration {
  static NAME: string = "Eko Kurniawan";
  static VERSION: number = 1.3;
}

console.log(Configuration.NAME);

class MathUtill {
  static SUM(...values: number[]): number {
    let total: number = 0;
    for (const val of values) {
      total += val;
    }
    return total;
  }
}

console.log(MathUtill.SUM(2, 3, 4));
