/* CHALLENGE: VALIDATE A PALINDROME
Return true if palindrome and false if not
isPalindrome('racecar') === true, isPalindrome('hello') == false
*/

function isPalindrome(str) {
  return str.split('').reverse().join('') === str;

  ///////////////////////

  //     let isPali = true;
  //     let caseStr = str.toLowerCase()
  //     let arr = caseStr.split('')
  //     for(let i = 0; i < arr.length; i++){
  //         if(arr[i] !== arr[arr.length -1 -i]){
  //             isPali = false;
  //             break;
  //         }
  //     }
  //     return isPali

}