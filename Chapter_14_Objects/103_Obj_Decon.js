const s1 = { name: "Vinn", age: 28 };
console.log(s1.name);

// Object decostruction or, picking key values out

const { name } = s1;
console.log(name);

// renaming variables

const { name: userName, age: userAge } = s1
console.log(userAge);

console.log(s1.Country); // Undefines

// default values

const { Country = "India" } = s1; // means, if s1 contains COuntry, give that value, if it does not contain Country give this value
console.log(Country);

console.log(s1); // Country will not be added to s1
