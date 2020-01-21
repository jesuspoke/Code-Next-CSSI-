// // 1. Refer to the 2D array below to answer the questions that follow
// let fruits = [
//   ["apple", "banana", "grape"],
//   ["peach", "raspberry", "papaya"],
//   ["apricot", "cherry", "pineapple"],
//   ["watermelon", "nectarine", "tangerine"],
//   ["mango", "strawberry", "blueberry"]
// ];
// // Which item is fruit[2][1]? Confirm your answer by printing it out.
// //fruit[2][1] = cherry
// console.log(fruits[2][1])
// // Which are the row/column coordinates of tangerine? Confirm your answer by printing it out.
// //fruit[3][2] = tangerine
// console.log(fruits[3][2])
// // Change apricot to kiwi. Print out the array to make sure it worked.
// fruits[2][0] = "kiwi"
// // console.log(fruits)
// // Create a new row to add to the end of the 2D array.
// // This row will itself by an array and should contain blackberry, lemon, and clementine.
// fruits.push(["blackberry","lemon","clementine"])
// // Add it to the end of the fruits array. Print out the whole array to make sure
// console.log(fruits)
// console.log((fruits[5][0]),(fruits[5][1]),(fruits[5][2]))
// // your new row looks just like any other row.
// // What is the row/column of lemon? Print it out to make sure.
// //fruits[5][1] = lemon
// console.log(fruits[5][1])
// // 2. Write two nested for loops. The first (outer) should run 4 times and
// for (row = 0; row < 5; row++) {
//   for (colum = 0; colum < 8; colum++) {
//     console.log("Right now, row is" + row + "and colum is" + colum)
//   }
//   console.log("Right now, row is" + row + "and colum is" + colum)
// }
// console.log("Right now, row is" + row + "and colum is" + colum)
//
// // the second (inner) should run 7 times.
// // Inside the inner loop, print out the sentence:
// // Right now, i is _____ and j is ____, filling in the blanks with the values.
// // Before you run it, predict what the second line that your code prints will be.
// // Write it down.... Now run it. Is it what you predicted?
//
// // 3. Use two nested loops to iterate (go through) the fruits array above.
// let fruits = [
//   ["apple", "banana", "grape"],
//   ["peach", "raspberry", "papaya"],
//   ["apricot", "cherry", "pineapple"],
//   ["watermelon", "nectarine", "tangerine"],
//   ["mango", "strawberry", "blueberry"]
// ];
// for (row = 0; row < fruits.length; row++) {
//   for (colum = 0; colum < fruits[0].length; colum++) {
//     console.log(fruits[row][colum])
//   }
// }
// // Inside the loops, print out the item at that particular row/column.
// // Which item do you think will be printed second-to-last? Run the code to check.
//
// // 4. Create your own 2D array. It doesn't have to be too big, but it should
// // have at least two rows and at least two columns, and at least 6 items overall.
// // Print out a few values from your 2D array using the rol/column indexes.
// // Make sure that what gets printed matches your expectations.
// // Try changing a few values in the 2D array using row/column indexes.
// // Print it out to make sure that your changes worked as intended.



// 5. Write a function that takes in a 2D-array and a string as input.
// The function should return true if the string is found somewhere in the array, and false otherwise.
// Test it using the fruits array, including cases with fruits that are there
// and other cases with fruits that are not.
function search(fruit) {
  let fruits = [
    ["apple", "banana", "grape"],
    ["peach", "raspberry", "papaya"],
    ["apricot", "cherry", "pineapple"],
    ["watermelon", "nectarine", "tangerine"],
    ["mango", "strawberry", "blueberry"]
  ];
  for (row = 0; row < fruits.length; row++) {
    for (colum = 0; colum < fruits[0].length; colum++) {
      if (fruit == (fruits[row][colum])) {
        console.log("True " + fruit + " is in the 2D-array called fruits")
      }
    }
  }
}
console.log("False the fruit is not in the 2D-array called fruits")

search("apple")
search("kiwi")
// and other cases with fruits that are not.
// function search2(fruit) {
//   let fruits = [
//     ["apple", "banana", "grape"],
//     ["peach", "raspberry", "papaya"],
//     ["apricot", "cherry", "pineapple"],
//     ["watermelon", "nectarine", "tangerine"],
//     ["mango", "strawberry", "blueberry"]
//   ];
//   for (row = 0; row < fruits.length; row++) {
//     for (colum = 0; colum < fruits[0].length; colum++) {
//     }
//   if (fruit == (fruits[row][colum])) {
//     console.log("True " + fruit + " is in the 2D-array called fruits")
//   } else if (fruit != (fruits[row][colum])) {
//     console.log("False " + fruit + " is not in the 2D-array called fruits")
//   }
//   }
// }
// search("apple")
// search("kiwi")
