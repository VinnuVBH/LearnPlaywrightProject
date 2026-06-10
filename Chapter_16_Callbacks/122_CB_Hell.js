// callback hell is test cases steps needs to be executed 1 after the other, so every step callback needs to be added
// open browser
// username
// password
// login button

function openBrowser(callback) {
    console.log("Opening the chrome browser");
    setTimeout(function () {
        callback();
    }, 1000)

}

function username(callback) {
    console.log("Entered username");
    setTimeout(function () {
        callback();
    }, 2000)

}

openBrowser(function () {
    username(function () {
        // so not used - so we use async and await in playwright
        // this is a pyramid of doom
    })
})