function correctfn(sentence, wrong, correct) {
    // Using replace() to replace the first occurrence of the wrong word
    return sentence.replace(wrong, correct);
}

// Example usage:
let sentence = "I love programming in Pyhton";
let correctedSentence = correctfn(sentence, "Pyhton", "Python");
console.log(correctedSentence);  // Output: "I love programming in Python"
