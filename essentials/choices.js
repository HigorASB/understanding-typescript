// enum Role {
//   Admin,
//   Editor,
//   Guest,
// }
// let userRole: "Admin" | "Editor" | "Guest";
var userRole;
userRole = "Editor";
var possibleResults; // [1, -1]
possibleResults = [1, -1];
function access(role) {
  if (role === "Admin") {
    console.log("Access granted.");
    return;
  }
  console.log("Access denied.");
}
access("Admin");
access("Guest");
