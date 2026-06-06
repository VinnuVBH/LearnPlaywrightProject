const user = {
    Name: "John",
    Age: 29,
    email: "abd@gmail.com"
};

console.log(user);
console.log(user.Name);
console.log(user["Age"]);

// Dynamic property access

const key = "Age";
console.log(user[key]);

// Adding/ Modifying Objects

user.City = "Bengaluru";
console.log(user);

// get description of a key

console.log(Object.getOwnPropertyDescriptor(user, "Name"));


