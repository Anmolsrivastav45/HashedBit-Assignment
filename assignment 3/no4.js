let str = "This is a sample string with vowels and consonants";
str = str.toLowerCase();  // Convert the string to lowercase for easier comparison

let vowels = ['a', 'e', 'i', 'o', 'u'];
let vowelCount = 0;
let consonantCount = 0;

for (let char of str) {
    if (vowels.includes(char)) {
        vowelCount++;
    } else if (char >= 'a' && char <= 'z') {  // Check if the character is a consonant (alphabet letter)
        consonantCount++;
    }
}

console.log("Vowels:", vowelCount);
console.log("Consonants:", consonantCount);
