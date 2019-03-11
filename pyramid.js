/* CHALLENGE: Pyramid
Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left *and* right hand sides
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
*/

function pyramid(n, row = 0, stair = '') {
  // // Mid index
  // const mid = Math.floor((n * 2 - 1) / 2);
  // for (let row = 0; row < n; row++) {
  //   let stair = '';
  //   // length = n*2 - 1
  //   for (let column = 0; column < n * 2 - 1; column++) {
  //     // Space for indexes left/right from mid and # for mid
  //     if (mid -  row <= column && mid + row >= column) {
  //       stair += '#';
  //     } else {
  //       stair += ' ';
  //     }
  //   }
  //   console.log(stair);
  // }

  // If last row
  if (n === row) return;
  // If end of the row - print and go to next one
  if (stair.length === n * 2 - 1) {
    console.log(stair);
    return pyramid(n, row + 1)
  }
  // // Mid index
  const mid = Math.floor((n * 2 - 1) / 2);
  let add = ' ';
  if (mid - row <= stair.length && mid + row >= stair.length) {
    add = '#';
  }
  // Adding characters till row will end
  return pyramid(n, row, stair + add);
}