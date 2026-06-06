// Old way of creating class and object it is never used

const user = {
    firstName: "Vinu",
    lastName: "B H",
    get fullName() {
        return this.firstName + " " + this.lastName;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
};

console.log(user.fullName);
console.log(user.fullName = "John doe");
