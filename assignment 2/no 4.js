function sumOfProducts(n1, n2) {
    // Convert both numbers to strings for easier manipulation
    const str1 = n1.toString();
    const str2 = n2.toString();
    
    // Calculate the maximum length of the two numbers
    const maxLength = Math.max(str1.length, str2.length);
    
    // Pad the shorter number with leading zeros
    const paddedStr1 = str1.padStart(maxLength, '0');
    const paddedStr2 = str2.padStart(maxLength, '0');
    
    let sum = 0;
  
    // Iterate over the digits from right to left and calculate the sum of products
    for (let i = 0; i < maxLength; i++) {
      sum += parseInt(paddedStr1[i]) * parseInt(paddedStr2[i]);
    }
  
    return sum;
  }
  
  // Example usage
  console.log(sumOfProducts(6, 34));   // Output: 24
  console.log(sumOfProducts(123, 456)); // Output: 32 (1*4 + 2*5 + 3*6)
  console.log(sumOfProducts(12, 1234)); // Output: 14 (0*1 + 1*2 + 2*3 + 0*4)
  