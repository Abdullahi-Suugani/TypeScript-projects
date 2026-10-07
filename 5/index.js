"use strict";
function echo(input) {
    return input;
}
const stringResult = echo("Hello TypeScript");
console.log("String:", stringResult);
const numberResult = echo(100);
console.log("Number:", numberResult);
const arrayResult = echo([10, 20, 30]);
console.log("Array:", arrayResult);
const objectResult = echo({
    id: 1,
    name: "Abdullahi",
});
console.log("Object:", objectResult);
const stringResponse = {
    status: "success",
    data: "Hello from API",
};
console.log("\nString API Result:");
console.log(stringResponse);
const userResponse = {
    status: "success",
    data: {
        id: 1,
        name: "Abdullahi",
    },
};
console.log("\nUser API Result:");
console.log(userResponse);
function first(items) {
    return items[0];
}
const firstNumber = first([10, 20, 30, 40]);
console.log("\nFirst Number:");
console.log(firstNumber);
const firstString = first(["React", "TypeScript", "Next.js"]);
console.log("\nFirst String:");
console.log(firstString);
const firstUser = first([
    {
        id: 1,
        name: "Abdullahi",
    },
    {
        id: 2,
        name: "Ahmed",
    },
]);
console.log("\nFirst User:");
console.log(firstUser);
