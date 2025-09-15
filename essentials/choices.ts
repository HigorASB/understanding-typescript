// enum Role {
//   Admin,
//   Editor,
//   Guest,
// }

// let userRole: Role;

// userRole = Role.Admin;

type Role = "Admin" | "Editor" | "Guest";
type User = {
  name: string;
  age: number;
  role: Role;
  permission: string[];
};

// let userRole: "Admin" | "Editor" | "Guest";
let userRole: Role;

userRole = "Editor";

let possibleResults: [1 | -1, 1 | -1]; // [1, -1]

possibleResults = [1, -1];

function access(role: Role): void {
  if (role === "Admin") {
    console.log("Access granted.");
    return;
  }
  console.log("Access denied.");
}

access("Admin");
access("Guest");
