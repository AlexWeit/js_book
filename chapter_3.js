// 1 - Triangle
/*
for (string = "#"; string.length <= 7; string = string + "#")
	console.log(string);
*/

// 2 - FizzBuzz

// моё решение 1
/*
for (number = 1; number <= 100; number++) {
	if (number % 3 == 0)
		console.log("Fizz");
	else if (number % 5 == 0 )
		console.log("Buzz");
	else console.log(number);
}
*/
// усложненное 
for (number = 1; number <= 100; number++) {
	var string = "";
	if (number % 3 == 0)
		string += "Fizz";
	if (number % 5 == 0)
		string += "Buzz";
	console.log(string || number);
}

// 3 - Chess board
/*
// моё решение
for (n = 1; n <= 8; n++) {
	var string = "";
	if (n % 2 == 0)
		string += " # # # #";
	else 
		string += "# # # # ";
	console.log(string);
}

// решение из книги
var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += "#";
    else
      board += " ";
  }
  board += "\n";
}

console.log(board);
*/
