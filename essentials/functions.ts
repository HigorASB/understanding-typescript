function add(a: number, b: number): number {
  return a + b;
}

function log(message: string): void {
  console.log(message);
}

function logAndThrow(errorMessage: string): never {
  console.log(errorMessage);
  throw new Error(errorMessage);
}

try {
  logAndThrow("Never returns.");
} catch (error) {}

function performJob(cb: (message: string) => void) {
  // ...
  cb("Job done.");
}

performJob(log);

type User = {
  name: string;
  age: number;
  greet: () => string;
};

let user: User = {
  name: "Max",
  age: 39,
  greet() {
    return `Hello! My name is ${this.name}`;
  },
};

console.log(user.greet());
