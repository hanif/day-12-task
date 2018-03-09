/**
 * Find factors of a number
 *
 * @param {number} n
 * @returns {array}
 */
function factorsOf(n) {
  const factors = [];
  for (var i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      factors.push(i);
      factors.push(n/i);
    }
  }

  return factors;
}

/**
 * Check if a number is a prime number
 * @param {number} num
 * @returns {array}
 */
function isPrime(num) {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if(num % i === 0) {
      return false; 
    }
  }

  return num !== 1;
}

/**
 * Find even fibonacci numbers of a given maximum value
 *
 * @param {number} max
 * @returns {array}
 */
function evenFibo(max) {
  var a = 1, b = 0, temp;
  const arr = [];

  while (max >= a) {
    temp = a;
    a = a + b;
    b = temp;

    if (b % 2 === 0) {
      arr.push(b);
    }
  }

  return arr;
}

module.exports = { factorsOf, isPrime, evenFibo };
