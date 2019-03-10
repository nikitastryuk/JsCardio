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

function pyramid(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';
    const mid = Math.floor((n * 2 - 1) / 2);
    for (let column = 0; column < n * 2 - 1; column++) {
      if (mid - row <= column && mid + row >= column) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
}
