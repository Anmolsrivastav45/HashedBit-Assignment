let string = 'INDIA';
let arr = string.split('');  // Convert string to array of characters

// Using splice to replace part of the array with new characters
arr.splice(3, 2, 'O', 'N', 'E', 'S', 'I', 'A');  // At index 3, remove 2 elements and insert new ones

let result = arr.join('');  // Join the array back into a string
console.log(result);  // Output: 'INDONESIA'
