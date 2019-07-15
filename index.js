var button = $('button');
var ages = ["Newborn", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "13", "15", "17", "21","25","28", "30", "37", "39", "42", "54", "59", "69", "75", "88", "96", "104","10000000. You're a legend!!"];
var random = $('Math.random');
var length = ages.length;
var integer = $('math.floor');
var lemon = $('p');

button.on ('click', randomNumber)
function randomNumber() {
  var chicken = (Math.random())*(ages.length);
  var fish = Math.floor(chicken);
  var beef = ages [fish];
  lemon.text(beef);
  console.log(beef);
  console.log('yeehaw')
}

// function message() {
//   event.preventDefault();
//   var random = Math.floor(Math.random()*(ages.length - 1));
// }




// Math.random() // random number from 0 - 1
// ages.length // length of your array
// // random number from 0 to length of your array
//
// Math.floor(that new number) // integer between 0 and length
// arrayName[number]

  // for (var i = 0; i < ages.length; i++) {
  //   console.log()
  // }
