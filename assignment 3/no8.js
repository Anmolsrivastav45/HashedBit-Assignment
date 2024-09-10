function digitalRoot(n) {
    // Ensure the input is a positive integer
    if (n < 0) {
        throw new Error('Input must be a positive integer');
    }
    
    while (n >= 10) {  // Continue until n is a single digit
        n = n.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
    }
    
    return n;
}

// Example usage:
console.log(digitalRoot(456));  // Output: 6
