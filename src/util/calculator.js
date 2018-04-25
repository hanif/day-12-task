/**
 * Find factors of a number
 *
 * @param {number} n
 * @returns {array}
 */
function factorsOf(n) {
  const factors = [];
  for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i += 1) {
    if (n % i === 0 && !factors.includes(i)) {
      factors.push(i);
      factors.push(n / i);
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
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) {
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
  let a = 1;
  let b = 0;
  let temp;
  const arr = [];

  while (max >= a) {
    temp = a;
    a += b;
    b = temp;

    if (b % 2 === 0) {
      arr.push(b);
    }
  }

  return arr;
}

module.exports = { factorsOf, isPrime, evenFibo };
