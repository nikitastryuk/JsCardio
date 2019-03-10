/* CHALLENGE: ARRAY CHUNKING | FLATTENING 
Split an array into chunked arrays of a specific length
chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
*/
function chunkArray(arr, chunkLength) {

  // const chunkedArr = [];

  // arr.forEach(item => {
  //   // Get last chunk
  //   const lastChunk = chunkedArr[chunkedArr.length - 1];
  //   // If last length is equal to the chunkLength push new chunk
  //   if (!lastChunk || lastChunk.length === chunkLength) {
  //     chunkedArr.push([item]);
  //   } else {
  //     // push to last chunk
  //     lastChunk.push(item);
  //   }
  // });
  // return chunkedArr;


  ////////////////////////////

  const chunkedArr = [];
  // Set index
  let i = 0;

  // Loop while index is less than the array length
  while (i < arr.length) {
    // Slice out from the index to the index + the chunk length and push on to the chunked array
    chunkedArr.push(arr.slice(i, i + chunkLength));
    // Increment by chunk length
    i += chunkLength;
  }
  return chunkedArr;
}

function flattenArray(arrays) {
  // return arrays.reduce((a, b) => a.concat(b), []);

  ////////////////////////////

  // return [].concat.apply([], arrays);

  ////////////////////////////

  return [].concat(...arrays);

  ////////////////////////////

  // Deep
  //return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}