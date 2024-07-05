class Validations extends Error {
  constructor(public message: string) {
    super(message);
  }
}

function double(val: number): number {
  if (val < 0) {
    throw new Validations("error ");
  }
  return val * 2;
}

try {
  const result = double(3);
  console.log(result);
} catch (e) {
  if (e instanceof Validations) {
    console.log(e.message);
  }
}
