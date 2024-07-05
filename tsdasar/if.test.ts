// if statement
const values: number = 30;

if (values > 80) {
  console.log("good");
} else if (values > 60) {
  console.log("not bad");
} else if (values > 40) {
  console.log("nice try");
} else {
  console.log("fail");
}

// ternary operator

const nilai: number = 80;
const say: string = nilai >= 75 ? "congratulations" : "nice try";
console.log(say);

// switch statment
function sayname(nama: string): string {
  switch (nama) {
    case "eko":
      return "hi Eko";
    case "budi":
      return "hi Budi";
    default:
      return "hi";
  }
}
console.log(sayname("eko"));
console.log(sayname("joko"));
