let config = {};

config.browser = "Chrome";
config.timeout = 2000;
config.testName = "Login";

console.log(config);

if (config.browser === "Chrome") {
    console.log("Further execution continues");

}

delete config.browser; // deleting a key

if (config.browser === "Chrome") {
    console.log("Further execution continues");

}