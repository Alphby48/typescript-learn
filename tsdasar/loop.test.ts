// for
const namas: string[] = ["jokio", "fadil"];

for (let i: number = 0; i < namas.length; i++) {
  console.log(namas[i]);
}

for (const nama of namas) {
  console.log(nama);
}

for (const index in namas) {
  console.log(namas[index]);
}

// While

let numb: number = 0;

while (numb < 10) {
  console.log(numb);
  numb++;
}

// do while

do {
  console.log(numb);
  numb++;
} while (numb < 20);

// break and continue

let conter: number = 0;

do {
  conter++;

  if (conter == 10) {
    break;
  }
  if (conter % 2 == 0) {
    continue;
  }
  console.log(conter);
} while (true);
