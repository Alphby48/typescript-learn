// function
function sayHello2(name: string): string {
  return `hello ${name}`;
}

console.log(sayHello2("flora"));

// menggunakan tipe data void
function sayHello3(): void {
  console.log("name");
}
console.log(sayHello3());

// suport default value
function sayHello4(name: string = "cok"): string {
  return `hello ${name}`;
}

console.log(sayHello4("asu"));
console.log(sayHello4());

// support rest parameter
function sprtRest(...values: number[]): number {
  let total = 0;
  for (const value of values) {
    total += value;
  }
  return total;
}

console.log(sprtRest(1, 2, 3, 4, 5));

// optional parameter
function optional(val1: string, val2?: string) {
  return `halo ${val1} ${val2}`;
}

console.log(optional("abdul"));

// function overloading
function callMe(values: string): string;
function callMe(values: number): number;
function callMe(values: any): any {
  if (typeof values === "string") {
    return values.toUpperCase();
  } else if (typeof values === "number") {
    return values * 10;
  }
}

console.log(callMe("adel"));
console.log(callMe(14));

//function as parameter

function panggil(nama: string, filter: (nama: string) => string): string {
  return `hello ${filter(nama)}`;
}

function toUpper(nama: string) {
  return nama.toUpperCase();
}

console.log(panggil("oniel", toUpper));

// anonymous function
function sayHello5(name: string, func: (name: string) => string): string {
  return `Hello ${func(name)}. Welcome`;
}

console.log(sayHello5("indah", (name: string): string => name.toUpperCase()));
