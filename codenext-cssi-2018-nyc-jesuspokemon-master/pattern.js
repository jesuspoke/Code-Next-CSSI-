// You can use nested loops and 2-d arrays to draw patterns
// // Here is an example:
// let numRowsCols = 15;
// for (let i = 0; i < numRowsCols; i++) {
//   let row = "";
//   for (let j = 0; j < numRowsCols; j++) {
//     if (i == j) {
//       row += "X";
//     } else {
//       row += "-";
//     }
//   }
//   console.log(row);
// }
// Run this, and make sure you understand exactly why it looks as it does
// 1. Try to make this one. Hint: you will need to compare i and j in order to
// decide when to add * onto the strings that represent each row.
// Here is an example:

// let numRowsCols = 7;
// for (let i = 0; i < numRowsCols; i++) {
//   let row = "";
//   for (let j = 0; j < i; j++) {
//     if (i == j) {
//       row += "X";
//     } else {
//       row += "*";
//     }
//   }
//   console.log(row);
// }

// *
// **
// ***
// ****
// *****
// ******




// 2. Try to figure out how to draw a "border" pattern:

// let numRowsCols = 8;
// for (let i = 0; i < numRowsCols; i++) {
//   let row = "";
//   for (let j = 0; j < numRowsCols; j++) {
//     if (i == 0 || j == 0 || j == 7 || i == 7) {
//       row += "X";
//     } else {
//       row += "-";
//     }
//   }
//   console.log(row);
// }

// XXXXXXXX
// X------X
// X------X
// X------X
// X------X
// X------X
// X------X
// XXXXXXXX


// Bonus -- All the ones that follow are surprisingly tricky.

// 3. Hint -- You will need to add spaces to the string up to a certain point,
// and then add stars.
// Hint2 -- You could consider adding the stars first and then
// adding the spaces to the beginning of the string.

//     *    (0, 4)
//    **    (1, 3) (1,4)
//   ***    (2, 2) (2, 3) (2, 4)
//  ****    (3, 1) (3, 2) (3, 3) (3, 4)
// *****

// let numRowsCols = 5;
// for (let i = 0; i < numRowsCols; i++) {
//   let row = "";
//   for (let j = 0; j < numRowsCols; j++) {
//     if ((i == 4) || ((i == 3) && (j > 0)) || ((i == 2) && (j > 1)) || ((i == 1) && (j > 2)) || ((i == 0) && (j == 4))) {
//       row += "X";
//     } else {
//       row += " ";
//     }
//   }
//   console.log(row);
// }

// 4. Here's one that builds on the same idea in the previous pattern:
// *   *
//  * *
//   *
//  * *
// *   *

// let numRowsCols = 5;
// for (let i = 0; i < numRowsCols; i++) {
//   let row = "";
//   for (let j = 0; j < numRowsCols; j++) {
//     if ((i == j) || (i == Math.abs(j - 4))) {
//       row += "*";
//     } else {
//       row += " ";
//     }
//   }
//   console.log(row);
// }

// (For the ones that follow, feel free to use something other than "X" and "-").
// The characters that you draw don't matter, just the pattern they are in.

// HINT: The only way to figure these out is to write down the coordinates of
// the spots that have the X's in them, compare them to the spots that have "-"
// in them, and try to find a pattern you can express in code.



// 5. Try to figure out how to draw a "chessboard" pattern:

// X-X-X-X-
// -X-X-X-X
// X-X-X-X-
// -X-X-X-X
// X-X-X-X-
// -X-X-X-X
// X-X-X-X-
// -X-X-X-X



// These last two are very hard.

// 6. Try to figure out how to draw a "grid" pattern:
// XXXXXXXXX
// X-X-X-X-X
// XXXXXXXXX
// X-X-X-X-X
// XXXXXXXXX
// X-X-X-X-X
// XXXXXXXXX
// X-X-X-X-X
// XXXXXXXXX

// let numRowsCols = 9;
// for (let i = 0; i < numRowsCols; i++) {
//   let row = "";
//   for (let j = 0; j < numRowsCols; j++) {
//     if (i % 2 == 0) {
//       row += "XX";
//     } else if (i % 2 != 0) {
//       row += "x-";
//     }
//   }
//   console.log(row);
// }

// 7. A pyramid!
// Hint for this one... try printing stars straight down the middle first.
// How do you know what value will be the "middle"? Once you figure out what the middle is,
// you can add stars to the left and right of it as you go down the rows.
//
//     *
//    ***
//   *****
//  *******
// *********

let row = 5;
let colum = 9;
for (let i = 0; i < row; i++) {
  let row = "";
  for (let j = 0; j < colum; j++) {
    if ((j == 4) ||
    (((j == 3) || (j == 5)) && (i != 0)) ||
    (((j == 2) || (j == 6)) && (i > 1)) ||
    (((j == 1) || (j == 7)) && (i > 2)) ||
    ((j == 0) && (i == 4)) || ((j == 8) && (i == 4))
    ) {
      row += "*";
    } else {
      row += " ";
    }
  }
  console.log(row);
}
