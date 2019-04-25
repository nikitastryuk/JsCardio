/* CHALLENGE: Refactor
function func(s, a, b) {
    var match_empty = /^$/;
    if (s.match(match_empty)) {
        return -1;
    } else {
        var i = s.length - 1;
        var aIndex = -1;
        var bIndex = -1;
        while ((aIndex == -1) && (bIndex == -1) && (i >= 0)) {
            if (s.substring(i, i + 1) == a)
                aIndex = i;
            if (s.substring(i, i + 1) == b)
                bIndex = i;
            i--;
        }
        if (aIndex != -1) {
            if (bIndex == -1)
                return aIndex;
            else
                return Math.max(aIndex, bIndex);
        } else {
            if (bIndex != -1)
                return bIndex;
            else
                return -1;
        }
    }
};
Expected result: 5 lines of code
*/

/*  
Analysis:
1. s.length > 0 to continue or => -1
2. a.length === 1 - aIndex can be set 
3. b.length === 1 - bIndex can be set
4. aIndex > 0 && bIndex < 0 => aIndex
5. aIndex < 0 && bIndex > 0 => bIndex
6. aIndex > 0 && bIndex > 0 => Math.max(aIndex, bIndex)
7. aIndex < 0 && bIndex < 0 => -1
*/

/*  
Cases:
1. s.length === 0 || a !== 1 && b !== 1 => -1
2. (s.length > 0 && a>0) || (s.length > 0 && b>0) => Math.max(indexA, indexB)
3. s.length > 0 && indexA===-1 && indexB===-1 => -1 
*/

// function func(s, a, b) {
//     if (s.length === 0 || (a.length !== 1 && b.length !== 1)) return -1;
//     for (let i = s.length; i >= 0; i--) {
//       if (s[i] == a || s[i] == b) return i;
//     }
//     return -1;
//   };

function func(s, a, b) {
  return Math.max(
    (a.length !== 1 ? -1 : s.lastIndexOf(a)), (b.length !== 1 ? -1 : s.lastIndexOf(b))
  )
}
