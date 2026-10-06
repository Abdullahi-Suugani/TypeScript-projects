function fullName(first: string, last: string): string {
  return first + " " + last;
}

console.log("Full Name:", fullName("Abdullahi", "Abdi"));

function registerUser(
  username: string,
  isAdmin?: boolean,
  language: string = "en",
): void {
  console.log("Username:", username);
  console.log("Is Admin:", isAdmin);
  console.log("Language:", language);
}

registerUser("abdullahi", true, "en");

registerUser("ahmed");

registerUser("mohamed", false, "so");

function average(...scores: number[]): number {
  if (scores.length === 0) {
    return 0;
  }

  const total = scores.reduce((sum, score) => sum + score, 0);

  return total / scores.length;
}

console.log("\nAverage 3 scores:", average(80, 90, 100));
console.log("Average 4 scores:", average(75, 85, 90, 95));
console.log("Average 5 scores:", average(70, 80, 90, 85, 95));
console.log("Average with no scores:", average());
