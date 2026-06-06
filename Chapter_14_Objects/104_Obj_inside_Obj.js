const user = {
    name: "John",
    address: {
        city: "NYC"
    }
}

console.log(user.address.city);

const { city } = user.address;
console.log(city);
