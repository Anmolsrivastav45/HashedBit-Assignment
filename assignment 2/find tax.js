function findTax(salary) {
    let tax;
  
    switch (true) {
      case (salary > 0 && salary <= 500000):
        tax = 0; // No tax for salary up to 500,000
        break;
        
      case (salary > 500000 && salary <= 1000000):
        tax = salary * 0.10; // 10% tax for salary between 500,001 and 1,000,000
        break;
  
      case (salary > 1000000 && salary <= 1500000):
        tax = salary * 0.20; // 20% tax for salary between 1,000,001 and 1,500,000
        break;
  
      case (salary > 1500000):
        tax = salary * 0.30; // 30% tax for salary above 1,500,000
        break;
  
      default:
        tax = "Invalid salary"; // Handles negative or invalid input
    }
  
    return tax;
  }
  
  // Example usage:
  console.log(findTax(400000));  // Output: 0
  console.log(findTax(750000));  // Output: 75000
  console.log(findTax(1200000)); // Output: 240000
  console.log(findTax(2000000)); // Output: 600000
  console.log(findTax(-50000));  // Output: Invalid salary
  