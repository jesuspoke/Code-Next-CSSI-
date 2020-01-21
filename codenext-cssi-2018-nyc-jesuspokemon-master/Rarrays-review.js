// 1. Do each step below on a separate line
// Create an array with exactly five numbers.
var num = [1, 2, 3, 4, 5];
// Store the second value from the array in a variable named secondValue.
secondValue = num[1]
// Print out the third value from the array.
console.log(num[2])
// Change the fourth value in the array to 0.
num[3] = 0
// Remove the last value from the array and store it in the variable lastVal.
lastVal = num.pop()
// Print out lastVal to make sure it has the value you expected.
console.log(lastVal)
// Add 524 to the end of the array.
num.push(524)
console.log(num)
// Add 76 to the end of the array.
num.push(76)
console.log(num)
// Print out the second-to-last value in the array (which should be 524) by
// placing a number inside square brackets (e.g. arr[3], though 3 is wrong).
console.log(num[4])
// Print out the second-to-last value in the array again, but this time,
// use the length property and subtraction (e.g. arr[arr.length + 3], though +3 is wrong).
console.log(num[num.length - 2])
// 2a. Create an array with five items.
var pets = ["cat", "dog", "fish", "turtle", "rat"]
// Without using a for loop, print out each item in the array, one at a time.
function print() {
  lastVal = pets.pop()
  console.log(lastVal)
}
print()
print()
print()
print()
print()
// Do NOT just print out the whole array with a command like console.log(arr).
// Make sure you actually print out each item in the array one at a time.
// What if there were 100 items in the array? 1000?
// 2b. Create an empty array.

var blank = []

// Add a few items to the array one at a time using push.
function add(word) {
  blank.push(word)
    console.log(blank)
}
add("bob")
add("max")
add("fire")
// What if you needed to add 100 items to the array, or 1000?
// Hopefully these examples illustrate how helpful for loops can be.
// 3. Make a new empty array.
var empty = []
// Set up a for loop that will run ten times. Think carefully to make sure it will run ten times.
for (let e = 0; e < 10; e++) {
  empty.push(9, 9)
}
// Inside the for loop, add your favorite number to the array two times.
// You will need to do this on two separate lines.
// How many numbers should be in your array when the for loop is done?
// Print out the array and the array's length at the end and make sure you are right.
console.log(empty)
// 4. Make an array that contains four foods.
var food = ["apple", "orange", "pear", "plum"]
// Set up a for loop that will iterate (go through) the array.
// Do NOT use the number 4 (or 3) in your for loop.
// Instead, use the length of the array in the condition portion (the 2nd part) of the for loop.
for (let f = 0; f < food.length; f++) {
  console.log(food[f])
  console.log((food[f]).toUpperCase())
}
// Inside the for loop, get the item that is at the current index and store it in a variable.
// On the next line, print out the variable.
// On the line aft er that, print out the variable but use toUpperCase() on it.
// When it is done running, you should see something like:
// apple
// APPLE
// orange
// ORANGE
// pear
// PEAR
// plum
// PLUM



// 5. Make an array that contains five cities.
var city = ["New York", "Boston", "Seattle", "LA", "San Diego"]
// Set up a for loop that will iterate (go through) the array.
for (let c = 0; c < city.length; c++) {
// Do NOT use the number 5 (or 4) in your for loop.
// Instead, use the length of the array in the condition portion (the 2nd part) of the for loop.
// (Yes, this is the same as last time. This is super important.)
// Inside the for loop, store the name of the city in a variable called city.
// Then print out the index from the for loop, then a colon, followed by the city.
// When it is done running, you should see something like:
// 0: New York
// 1: Boston
// 2: Seattle
// 3: LA
// 4: San Diego
  console.log([c], city[c])
}
// 6. Make an array that contains six numbers.
var sixnum = [2, 6, 4, 3, 1, 7]
// Also make a new, separate empty array called squares.
var squares = []
// Set up a for loop that will iterate (go through) the array.
for (let n = 0; n < sixnum.length; n++) {
  squares.push(sixnum[n]** 2)
}
console.log(squares)
// Do NOT use the number 6 (or 5) in your for loop.
// Instead, use the length of the array in the condition portion (the 2nd part) of the for loop.
// (Yes, this is the same as the last 2 times. This is super important.)
// Inside the for loop, store the number from the array with numbers in a variable called num.
// Add the square of the number to the end of your new array.
// At the end, print out the new array.
// Assuming your original array was [2,6,4,3,1,7] ...
// When it is done running, you should see something like [4, 36, 16, 9, 1, 49]



// 7. Make an array that contains six numbers. Feel free to use the same one.
var sixnum = [2, 6, 4, 3, 1, 7]
// Also make a new, separate empty array called reverse.
var reverse = []
// Set up a for loop that will iterate (go through) the array, but BACKWARDS.
for (let n = sixnum.length - 1; n >= 0; n--) {
         //Either one will work
// for (let n = sixnum.length; n > -1; n--) {
  reverse.push(sixnum[n])
}
// This means, rather than i = 0; i < arr.length; i++
// You will instead do: i = arr.length - 1; i >= 0; i--
// Make sure that you 110% understand that previous line, because it is very important. Ask questions.
// Inside the for loop, store the number from the array with numbers in a variable called num.
// Add the number to the end of your new array (reverse).
// Note that, since we are looping backwards, we will be adding the numbers from the end first.
// At the end, print out both the original and new array.
// Assuming your original array was [2,6,4,3,1,7] ...
// When it is done running, you should see [7, 1, 3, 4, 6, 2] (it was reversed!)
console.log(sixnum)
console.log(reverse)
console.log("Yay the order of the numbers was reversed")
// 8. Make a new empty array.
// Ask the user how many letters they would like to type in.
// Use a for loop to loop that many times.
// Each time through the loop, ask the user to enter a letter. Add that letter to the array.
// At the very end use let str = arr.join("") to turn your array into a string.
// Print out the str
// For example, if they type in 4, and then type in c, a, k, e when asked
// Then at the end it should just say "cake"



// 9. Make a new empty array.
// Write a for loop that run ten times. Each time, it should add one random number to your array.
// When that is done, create another for loop that goes throught this array and,
// one at a time, prints out each item, so that you can see which items were added.
// Do NOT just print the whole array at once. Get them one at a time and print them.



// 10. We will make a deck of cards -- sort of.
// Create an empty array called deck.
var deck = []
// Make a for loop that goes from 1 to 13.
for (let d = 1; d < 14; d++) {
// Inside that for loop make another for loop that goes from 1 to 4.
  for (let j = 1; j < 5; j++) {
    var str = ""
    if (d >= 2 || d <=10) {
      str += d
    } else (d = 1) {
      str += A
    } else (d = 11) {
      str += J
    } else (d = 12) {
      str += Q
    } else (d = 13)
      str += K
  }
}
console.log(str)
// Do NOT use i for both for loops! You can use j if you want.
// Inside the inner for loop:
// Create an empty string
// If the outer loop variable is 2-10 add that number to the empty string.
// However, if it's 1, add A, if it's 11 add J, if it's 12 and Q, if it's 13 and K.
// This is the value of the card (2-10, Ace, Jack, Queen, King)
// Then, using the inner loop, add the suit.
// If it's 1 add "clubs", for 2 add "diamonds", for 3 add "spades", for 4 add "hearts"
// Then, add this string onto the array.
// After both loops are done, print out both the length of the array (should be 52)
// as well as the array itself, which should look like a deck of cards
// Something like: ["Aclubs", "Adiamonds", "Aspades", "Ahearts", "2Clubs", "2Diamonds", ...]
