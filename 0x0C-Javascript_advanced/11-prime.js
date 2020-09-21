const countPrimeNumbers = () => {
  let primeNumbers = 0;

  const checkIfPrime = (num) => {
    if (num <= 1) return false; // negatives
    if (num % 2 === 0 && num > 2) return false; // even numbers
    let s = Math.sqrt(num); // store the square to loop faster
    for (let i = 3; i <= s; i++) {
      // start from 3, stop at the square, increment
      if (num % i === 0) return false; // modulo shows a divisor was found
    }
    return true;
  };

  for (let i = 2; i < 100; i++) {
    if (checkIfPrime(i)) primeNumbers++;
  }
  return primeNumbers;
};

const t0 = performance.now();
setTimeout(() => {
  for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
  }
}, 0);
const t1 = performance.now();
console.log(
  `Execution time of calculating prime numbers 100 times was ${
    t1 - t0
  } milliseconds`
);
