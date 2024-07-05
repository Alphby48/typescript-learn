function sayHello(nama?: string | null) {
  if (nama) {
    console.log(`hello ${nama}`);
  } else {
    console.log("hello");
  }
}

const nama1: string | undefined = undefined;

sayHello(nama1);
