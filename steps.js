/* CHALLENGE: Steps
Write a function that accepts a positive number N. 
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
*/

function steps(n, row = 0, stair = '') {

  //   for (let row = 0; row < n; row++) {
  //     let stair = '';
  //
  //     for (let column = 0; column < n; column++) {
  //       if (column <= row) {
  //         stair += '#';
  //       } else {
  //         stair += ' ';
  //       }
  //     }
  //
  //     console.log(stair);
  //   }

  // If last row
  if (n === row) return;
  // If end of the row - print and go to next one
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1)
  }
  const add = stair.length <= row ? '#' : ' ';
  // Adding characters till row will end
  return steps(n, row, stair + add);
}
