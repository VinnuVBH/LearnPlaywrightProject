let browser = "OOps";

switch (browser) {
    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("This is a Chromium Project based browser");
        break;
    case "Firefox":
        console.log("This is a Mozilla Project based browser");
        break;
    case "Safari":
        console.log("This is a Apple browser - uses JavaScriptCore engine");
        break;
    default:
        console.log("Unknown browser");
}
