/* CHALLENGE: VALIDATE A PALINDROME
Return true if palindrome and false if not
isPalindrome('racecar') === true, isPalindrome('hello') == false
*/

function isPrime(n) {
  // Check if n is less than 2 => not prime
  if (n < 2) return false;

  // Loop from 2 to square root of n
  for (let i = 2; i <= Math.sqrt(n); i++)
    // If i is a divisor of n, n is not prime
    if (n % i == 0) return false;

  return true;
}