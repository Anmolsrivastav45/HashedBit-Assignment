function countWords(paragraph) {
    // Trim leading and trailing whitespace and split the paragraph into words
    let words = paragraph.trim().split(/\s+/);
    
    // Return the number of words
    return words.length;
}

// Example usage:
let paragraph = "This is a sample paragraph with several words.";
console.log(countWords(paragraph));  // Output: 7
