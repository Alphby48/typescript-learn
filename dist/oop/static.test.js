"use strict";
class Configuration {
}
Configuration.NAME = "Eko Kurniawan";
Configuration.VERSION = 1.3;
console.log(Configuration.NAME);
class MathUtill {
    static SUM(...values) {
        let total = 0;
        for (const val of values) {
            total += val;
        }
        return total;
    }
}
console.log(MathUtill.SUM(2, 3, 4));
