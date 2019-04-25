/* CHALLENGE: CAPITALIZE LETTERS
Return a string with the first letter of every word capitalized
capitalizeLetters('i love javascript') === 'I Love Javascript'
*/
function capitalizeLetters(str) {
  // return str
  //   .toLowerCase()
  //   .split(' ')
  //   .map(word => word[0].toUpperCase() + word.substr(1))
  //   .join(' ');

  return str.replace(/\b[a-z]/gi, char => char.toUpperCase());
}
