/* CHALLENGE: Vowels
Write a function that returns the number of vowels used in a string.
Vowels are the characters 'a', 'e', 'i', 'o', and 'u'.
vowels('Hi There!') --> 3
*/

function vowels(str) {
  // let count = 0;
  // const vowels = ['a', 'e', 'i', 'o', 'u'];
  // for (let char of str.toLowerCase()) {
  //   if (vowels.includes(char)) {
  //     count++;
  //   }
  // }
  // return count;

  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}