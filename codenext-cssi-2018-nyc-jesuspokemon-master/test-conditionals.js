// Complete these one at a time. Test each one several times to make sure it works.
// When you are done with each one, comment it out when you move to the next one, so it doesn't keep showing up.
// 1. Ask the user for a number and print whether it is positive or negative or zero.


let readline = require("readline-sync");

let number = parseFloat(readline.question("enter any number "));

if (number == 0) {
  console.log("This number is zero: ");
} else if (number > 0) {
  console.log("This number is a positive number: ");
} else if (number < 0) {
  console.log("This number is a negative number: ");
}


// 2. Ask the user to enter three numbers, and then print out the biggest number they entered.


let readline = require("readline-sync");

let num1 = parseFloat(readline.question("enter the first number: "));
let num2 = parseFloat(readline.question("enter the second number: "));
let num3 = parseFloat(readline.question("enter the third number: "));

if (num1 > num2 && num1 > num3) {
  console.log("The first one was biggest");
} else if (num1 < num2 && num2 > num3) {
  console.log("The second one was biggest");
}else {
  console.log("The third one was biggest");
}


// 3. Ask the user for a number and print whether it is odd or even


let readline = require("readline-sync");

let num = parseFloat(readline.question("enter any number: "));

if ((num % 2) == 0) {
  console.log("This number is an positive number: ");
} else if ((num % 2) == 1) {
  console.log("This number is a odd number: ");
}


// 4. Ask the user to enter a letter and tell them if it is a vowel or consonant


let readline = require("readline-sync");

let letter = (readline.question("Please enter any letter: "));

if ((letter == "a") || (letter == "e") || (letter == "i") || (letter == "o") || (letter == "u")) {
  console.log("This letter is a vowel: ");
} else {
  console.log("This letter is a consonant: ");
}


// 5. Ask the user to enter a year, and tell them if it was a leap year.
// (You can use Google if you're not sure when leap years happen.)


let readline = require("readline-sync");

let num = parseFloat(readline.question("enter any year: "));

if ((num % 4) == 0) {
  console.log("This year is a leap year: ");
} else if ((num % 4) >= 0) {
  console.log("This year is not a leap year: ");
}


// 6. Ask the user if they have been a citizen for at least 9 years (yes or no), ask them their age, and ask if they live in New York state.
// If they answer yes, their age is above 30, and yes, then tell them they can run for senate in NY. Otherwise, say that they cannot.


const readline = require("readline-sync");

console.log("so you want to run for senate in New York well here are some questions to see if you can")

const citizen = readline.question("Have you been a citizen for at least 9 years? yes or no: ");
if(citizen == "yes") {
    let age = readline.question(" how old are you? ");
    if(age > 30) {
        let live = readline.question("do you live in new york yes or no");
        if(live == "yes") {
          console.log("CONGRATULATIONS you can run for senate in New York")
        } else if (live == "no") {
          console.log("im sorry,you have must live in New York in order to run for the senate in New york, try again when you live in New York")
        }
    } else if (age <= 30){
        console.log("im sorry, you are too young, you cant run for the senate in New York, try again when you are over 30.");
    }
} else if (citizen == "no") {
  console.log("im sorry, you need to be a citizen to run for senate in New York, try again when you are a citizen")
}


// 7. Write a program that asks the user to enter a whole number 1-7 and prints out the corresponding day of the week.


let readline = require("readline-sync");

let num = parseFloat(readline.question("Please choose a day of the week from 1 to 7: "));

if (num == 1) {
  console.log("day 1 is monday: ");
} else if (num == 2) {
  console.log("day 2 is tuesday: ");
} else if (num == 3) {
  console.log("day 3 is wensday: ");
} else if (num == 4) {
  console.log("day 4 is thursday: ");
} else if (num == 5) {
  console.log("day 5 is friday: ");
} else if (num == 6) {
  console.log("day 6 is saturday: ");
} else if (num == 7) {
  console.log("day 7 is sunday: ");
}


// If you want another challenge, look up how to use switch statements and use a switch instead of if-else for this.
// Note that we usually don't bother with switch statements unless there are more than a few elses.
