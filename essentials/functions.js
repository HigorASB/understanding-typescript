function add(a, b) {
    return a + b;
}
function log(message) {
    console.log(message);
}
function logAndThrow(errorMessage) {
    console.log(errorMessage);
    throw new Error(errorMessage);
}
try {
    logAndThrow("Never returns.");
}
catch (error) { }
function performJob(cb) {
    // ...
    cb("Job done.");
}
performJob(log);
var user = {
    name: "Max",
    age: 39,
    greet: function () {
        return "Hello! My name is ".concat(this.name);
    },
};
console.log(user.greet());
