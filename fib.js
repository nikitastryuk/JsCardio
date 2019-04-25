/* CHALLENGE: Fibonacci series.
[0,1,1,2,3,5,8,13,21]
fib(4) --> 3
*/

// Memoization (store func call with the result and return precomputed value)
function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

// Recursive (~ exponential runtime)
function rFib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(rFib);

// Iterative 
// function fib(n) {
//   const result = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     const a = result[i - 1];
//     const b = result[i - 2];
//     result.push(a + b);
//   }
//   return result[n];
// }

const start = new Date().getTime();
console.log(fib(40));
const end = new Date().getTime();
console.log(`Time: ${end - start}ms`);