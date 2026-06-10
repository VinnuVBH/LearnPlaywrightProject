// callback with parameters

function getMessage(name, callback) {
    console.log("Message from " + name);
    let number = 35746;
    let status = "Sent";
    callback(name, number, status);
}

getMessage("Bob", function (name, number, status) {
    console.log("Message recieved from " + name + " and status is " + status + " who's number is " + number);

})

// Sync question

let bugs = ["UI glitch", "API timeout", "Wrong redirect"];

bugs.forEach(function (bug, i) {
    console.log("Bug#" + (i + 1) + " : " + bug);

})

console.log("Total bugs: " + bugs.length);
