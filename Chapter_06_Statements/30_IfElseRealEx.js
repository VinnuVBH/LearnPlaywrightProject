let userName = "Vinnu";
let password = "WinVinnu";
let isAccountLocked = true;

if (isAccountLocked) {
    if (userName === "Vinnu" && password === "WinVinnu") {
        console.log("Welcome Vinnu! You have successfully logged in.");
    }
    else {
        console.log("Login failed. Please check your username, password, and account status.");
    }
}
else {
    console.log("Your account is not locked. Please secure it first");
}

