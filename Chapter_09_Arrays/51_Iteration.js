let browsers = ["Chrome", "Firefox", "Safari", "Opera", "Edge"];
console.log(browsers);

browsers.pop();
console.log(browsers);

let removed = browsers.shift();
console.log(browsers);
console.log(removed);

// iterating using for

for (let i = 0; i < browsers.length; i++) {
    console.log(browsers[i]);
    if (browsers[i] === "Safari") {
        browsers.splice(i, 1, "Unknown");
    }
}
console.log(browsers);