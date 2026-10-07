interface User {
  username: string;
  password: string;
  email?: string;
  readonly id: number;
}

function login(user: User): void {
  console.log("Logging in...");
  console.log("Username:", user.username);
  console.log("Password:", user.password);

  if (user.email) {
    console.log("Email:", user.email);
  }

  console.log("User ID:", user.id);
}

const user1: User = {
  id: 1,
  username: "abdullahi",
  password: "123456",
};

login(user1);

const user2: User = {
  id: 2,
  username: "ahmed",
  password: "123456",
  email: "ahmed@email.com",
};

login(user2);

const user3: User = {
  id: 3,
  username: "mohamed",
  password: "123456",
};

login(user3);

const user4: User = {
  id: 4,
  username: "ali",
  password: "123456",
  email: "ali@email.com",
};

console.log("\nBefore changing user:");
console.log(user4);

user4.username = "ali_updated";
user4.password = "newpassword";

console.log("\nAfter changing username and password:");
console.log(user4);
