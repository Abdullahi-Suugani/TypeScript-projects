let names: string[] = ["Abdullahi", "Ahmed", "Mohamed"];

let grades: number[] = [85, 90, 75, 95];

let status: boolean[] = [true, false, true];

console.log("Names:", names);
console.log("Grades:", grades);
console.log("Status:", status);

names.push("Ali");
grades.push(88);
status.push(false);

console.log("\nAfter pushing correct values:");
console.log("Names:", names);
console.log("Grades:", grades);
console.log("Status:", status);

let products: string[] = ["Phone", "Laptop"];

console.log("\nProducts:", products);

products.push("Tablet");

console.log("After adding Tablet:", products);

// Tuple:
// First item  = city name -> string
// Second item = latitude   -> number
// Third item  = longitude  -> number

let location2: [string, number, number] = ["Nairobi", 89, 112];

console.log("Location 2:", location2);
