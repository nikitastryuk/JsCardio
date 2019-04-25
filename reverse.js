/* CHALLENGE: REVERSE A STRING | INTEGER
Return a string in reverse
reverseString('hello') === 'olleh' | reverseInt(521) === 125
*/

const reverseString = (str) => {
  return str.split('').reduce((revString, char) => char + revString, '');

  //////////////////////////

  // return str
  //   .split('')
  //   .reverse()
  //   .join('');
}

function reverseInt(int) {
  const revString = int.toString().split('').reverse().join('');
  return parseInt(revString) * Math.sign(int);
}