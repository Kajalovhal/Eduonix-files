/*//1. Find the longest word in a sentence without using functions.
let sentence = "This is my sentence.";
let words = sentence.split(" "); // Split the sentence into words
let longestWord = ""; // Initialize the longest word variable

for (let i = 0; i < words.length; i++) {
    let word = words[i];

    
    if (word.length > longestWord.length) {
        longestWord = word;
    }
}

console.log("Longest word:", longestWord); //longest word : sentence

//2. Check if two strings are anagrams of each other without using functions.

let word1 = "listen";
let word2 = "silent";
word1 = word1.replace(/\s/g, "").toLowerCase();
word2 = word2.replace(/\s/g, "").toLowerCase();

if (word1.length !== word2.length) {
    console.log("The words are not anagrams.");
} else {
    const charCount1 = {}; 
    const charCount2 = {}; 

    for (let char of word1) {
        charCount1[char] = (charCount1[char] || 0) + 1;
    }

    for (let char of word2) {
        charCount2[char] = (charCount2[char] || 0) + 1;
    }

    let areAnagrams = true;
    for (let char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            areAnagrams = false;
            break;
        }
    }

    if (areAnagrams) {
        console.log("The words are anagrams.");
    } else {
        console.log("The words are not anagrams.");
    }
}
*/
//3. Replace all occurrences of a given substring with another substring in a string without using functions.