let input = 400;
if (input >= 200 && input < 300) {
    console.log("Success");
}
else if (input >= 300 && input < 400) {
    console.log("Redirection");
}
else if (input >= 400 && input < 500) {
    console.log("Client Error");
}
else if (input >= 500 && input < 600) {
    console.log("Server Error");
}
else {
    console.log("Invalid HTTP Status Code");
}