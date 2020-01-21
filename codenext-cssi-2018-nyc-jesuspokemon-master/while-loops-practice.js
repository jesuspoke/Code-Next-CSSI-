// 1a. Use a while loop to print out numbers from 1 to 10

//
// var count = 1;
// while(count < 11) {
//   console.log(count);
//   count++;
// }


// 1b. Use a while loop to print out numbers from 30 to 15


// var count = 30;
// while(count > 14) {
//   console.log(count);
//   count--;
// }


// 2. Write a program that keeps rolling a die until the roll is a 5. Print out each roll.
// If you haven't yet done so, you should run
// npm install random-int
// and use that to get a random number from 1 to 6.
// Google "npm random-int" for more info.


// var randomInt = require("random-int");
// var dicenum = randomInt(6)
// while(dicenum != 5) {
//   console.log(dicenum);
//   dicenum = randomInt(6);
// }


// 3. Write a program that asks the user to guess a secret password.
// Until the user enters the correct password (which is chosen by you in advance),
// the program will keep asking for all eternity. When they finally do enter the
// correct password, exit the loop and print a congratulatory message.


// const readline = require("readline-sync");
// let guess = readline.question("Try to guess the secret password: ");
// while (guess != "play") {
//   console.log("sorry you guessed wrong please try again")
//    guess = readline.question("sorry still the wrong password guess again: ");
// }
// if (guess = "play") {
//   console.log("congrats you guessed correctly")
//   }


const readline = require("readline-sync");
let guess = readline.question("Please Type play: ");
while (guess != "play") {
  console.log("come on please type play to try my game")
   guess = readline.question("Please Type play: ");
}
if (guess = "play") {
  console.log("||||||||||||||||JjjJ|||||||||||||||")
  console.log("||||||||||||||||    |||||||||||||||")
  console.log("|||||||     ____            |||||||")
  console.log("|||||||    |    )           |||||||")
  console.log("ww|||||     o  o            |||||||")
  console.log("ww                0             {} ")
  console.log("ww|||||                     |||||||")
  console.log("|||||||    M           M    |||||||")
  console.log("|||||||                     |||||||")
  console.log("||||||||||||||||    |||||||||||||||")
  const readline = require("readline-sync");
  let guess2 = readline.question("which way should the zero go < , > , ^ : ");
  while (guess2 != ">") {
    console.log("sorry you guessed wrong the zero has died")
  }
  if (guess2 = ">") {
    console.log("|||||||||||||||||||||||||||||||||||")
    console.log("|||||||                     |||||||")
    console.log("|||||||         [HH]        |||||||")
    console.log("|||||||                     |||||||")
    console.log(" {}               0         |||||||")
    console.log("|||||||                     |||||||")
    console.log("|||||||                     |||||||")
    console.log("|||||||                     |||||||")
    console.log("|||||||||||||||||||||||||||||||||||")
    console.log("congrats you found the treasure")
  }

}


// Hint: Declare userInput outside the loop and initialize it to the value of readline.question("Enter password: ").
// The while loop will check if userInput matches the correct password.
// If not, inside the loop you should print "Sorry! That's incorrect", then
// assign userInput to the value of readline.question("Enter password: ") again.

// Bonus: Enhance your program to only allow the user to try entering the correct password three times.
// If they fail three times, the program should kick them out and tell them they are a robot.
// When the user enters the wrong password, the program tells them that they are wrong,
// along with how many attempts they've made so far.
