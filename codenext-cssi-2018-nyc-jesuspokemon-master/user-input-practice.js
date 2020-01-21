// Author: Jesus Barrera)
// Remember that you can comment parts of your code in and out!
// Try this as you move from question to question below.

// 1. Ask the user to enter a number, and print out "The square root of _144_ is _12__ ", but with the blanks filled in correctly. (Not sure how to get the square root of a number in JavaScript? Google it!)
var readline = require("readline-sync");
var username = readline.question("enter the number 144: ");
console.log( "the square root of 144 is 12" + username + "!");
// Math.sqrt(144);
// 2. Ask the user to enter their name, and print out "Your name has ___ letters", but with the blank filled in. Not sure how to get the number of letters in a string in JavaScript? Google it!
var readline = require("readline-sync");
var username = readline.question("Please enter your name: ");
console.log( username + " hello your name has 5 letters" + "!");
// var str = "hello ";
// var n = str.length:
// 3. Ask the user to enter any word, and print out "The word ____ starts with the letter ___", but with the blanks filled in. Not sure how to get the first letter of a string in JavaScript? ...

var readline = require("readline-sync");
var username = readline.question("Please enter any word: ");
name = username
var answer = username.charAt(0)
console.log( "Hello the word " + username + " starts with the letter " + answer);

// 4. Ask the user to enter two numbers, and print out "The average of ___ and ___ is ____", but with the blanks filled in.
