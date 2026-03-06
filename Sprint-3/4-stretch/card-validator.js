function validateCreditCard(number) {
  // Ensure number is 16 digits and only contains digits
  if (number.length !== 16 || !/^\d+$/.test(number)) return false;

  // Ensure at least 2 different digits are present
  const uniqueDigits = new Set(number);
  if (uniqueDigits.size < 2) return false;

  // Ensure the last digit is even
  const lastDigit = parseInt(number[number.length - 1], 10);
  if (lastDigit % 2 !== 0) return false;

  // Ensure the sum of digits is greater than 16
  const sum = number.split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
  if (sum <= 16) return false;

  // If all checks pass, the number is valid
  return true;
}

// Test cases
console.log(validateCreditCard('9999777788880000')); // true
console.log(validateCreditCard('4444444444444444')); // false
console.log(validateCreditCard('6666666666666661')); // false