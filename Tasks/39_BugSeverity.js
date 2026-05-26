let bugImpactScore = 5;

if (bugImpactScore === 9 || bugImpactScore === 10) {
    console.log("Critical Bug (Block release)");
}
else if (bugImpactScore === 7 || bugImpactScore === 8) {
    console.log("High");
}
else if (bugImpactScore >= 4 && bugImpactScore <= 6) {
    console.log("Medium");
}
else if (bugImpactScore >= 1 && bugImpactScore <= 3) {
    console.log("Low");
}
else {
    console.log("Invalid Bug Impact Score");
}
