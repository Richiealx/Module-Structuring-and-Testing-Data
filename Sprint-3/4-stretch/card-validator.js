function validateCreditCard(number) {
  if (number.length !== 16 || !/^\d+$/.test(number)) return false;

  const uniqueDigits = new Set(number);
  if (uniqueDigits.size < 2) return false;

  const lastDigit = parseInt(number[number.length - 1], 10);
  if (lastDigit % 2 !== 0) return false;

  const sum = number.split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
  if (sum <= 16) return false;

  return true;
}

// Test cases
console.log(validateCreditCard('9999777788880000')); // true
console.log(validateCreditCard('4444444444444444')); // false
console.log(validateCreditCard('6666666666666661')); // false