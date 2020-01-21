// for(var row = 0; row < 6; row++) {
//   var starString = "";
//   for(var colum = 0; colum < 5; colum++) {
//     starString += "*";
//   }
//   console.log(starString)
// }

/////////////////////////////////////
                                         //result
// for(var i = 0; i < 5; i++) {             //0,1,2,3,4
//   var starString = "";                   //2,3,4,5
//   for(var j = i; j < 5; j++) {           //3,4,5
//     starString += "*";                   //4,5
//   }                                      //5
//   console.log(starString);
// }

/////////////////////////////////////

var dialpad = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["*", "0", "#"]
];
// console.log((dialpad[0][2]) + "-" + (dialpad[3][1]))
for(var i = 0; i < dialpad.length; i++) {
  for(var j = 0; j < dialpad[i].length; j++) {
    console.log(dialpad[i][j]);
  }
}
