let word_1 = "wts";
let word_2 = "saw";

let w1 = word_1.toLowerCase().split("").sort().join();
let w2 = word_2.toLowerCase().split("").sort().join();

console.log(w1);
console.log(w2);

if (w1 === w2) {
    console.log(word_1, " + ", word_2, " are anagrams");
}
else console.log(word_1, " + ", word_2, " are not anagrams");
