// CHALLENGE: ANAGRAM
// Return true if anagram and false if not
// isAnagram('elbow','below') -> true
// isAnagram('Dormitory','dirty room##') -> true

function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}
function formatStr(str) {
  return str
    // Word characters only
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');

  /////////////////////////////

  //   const aCharMap = buildCharMap(stringA);
  //   const bCharMap = buildCharMap(stringB);
  //
  //   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
  //     return false;
  //   }
  //
  //   for (let char in aCharMap) {
  //     if (aCharMap[char] !== bCharMap[char]) {
  //       return false;
  //     }
  //   }
  //
  //   return true;
}

// function buildCharMap(str) {
//   const charMap = {};

//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }