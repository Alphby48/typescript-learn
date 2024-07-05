// array
const names: string[] = ["eko", "ujan"];
const angka: number[] = [1, 2, 3, 4];
console.info(names);
console.log(angka);

// read only
const hobbi: ReadonlyArray<string> = ["dedak", "katul"];

console.log(hobbi);

// tupple
const person: readonly [string, string, number] = ["dean", "aldi", 13];

console.log(person);
console.log(person[0]);
