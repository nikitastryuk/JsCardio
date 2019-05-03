// CHALLENGE: LONGEST WORD
// Return the longest word of a string - if more than one longest word, put into an array
// longestWord('Hello, my name is') === 'hello'
// longestWord('Hello there, my name is') === ['hello', 'there']

function longestWord(sen) {
  // Create filtered array
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  // Sort by length
  const sorted = wordArr.sort((a, b) => b.length - a.length);
  // If multiple words, put into array
  const longestWordArr = sorted.filter(
    word => word.length === sorted[0].length
  );
  // Check if more than one array val
  if (longestWordArr.length === 1) {
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
}