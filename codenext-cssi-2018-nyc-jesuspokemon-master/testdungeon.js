function function1() {
  console.log("||||||||||||1||||||||||")
  let movement = readline.question("type either <, >, ^, !");
//   if (answer = ">") {
//     function5()
//   } else if (answer = "<") {
//     funstion3()
//   } else if (answer = "^") {
//     function2()
//   } else if (answer = "!") {
//     function4()
//   }
// }





switch (answer) {
  case ">":
    function5()
    break;
    case "<":
      funstion3()
      break;
      case "^":
        function2()
        break;
        case "!":
          function4()
          break;
  default: console.log("try again")
}
