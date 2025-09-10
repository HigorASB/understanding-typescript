let userName: string;
let userAge = 38;

userName = "Max";

function add(a: number, b = 0): number {
  return a + b;
}

console.log(add(3, 5));
