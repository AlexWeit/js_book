// 1 - minimum
/*
function min(a, b) {
	if (a < b)
		return a;
	if (b < a)
		return b;
}

console.log(min(100,10));

// решение по книге
function min(a, b) {
  if (a < b)
    return a;
  else
    return b;
}
*/

// 2 - recursion
/*
function isEven(n) {
	if (n == 0)
		return true;
	else if (n == 1)
		return false;
	else if (n < 0)
		return isEven(-n);
	else
		return isEven(n - 2);
}

console.log(isEven(-1));
*/

// 3 - bean counting
/*
function countBs(string) {
	var counted = 0;

	for(i = 0; i < string.length; i++) {
		if (string.charAt(i) == "B")
			counted = counter + 1;
	}

	return counted;
}

console.log(countBs("BeansBooBhhjBB"));
*/

// 3* - char counter
/*
function countChar(string, char) {
	var counted = 0;

	for(i = 0; i < string.length; i++) {
		if (string.charAt(i) == char)
			counted += 1;
	}

	return counted;
}

function countBs(string) {
	return countChar(string, "B");
}

console.log(countChar("BeansBooBhhjBB", "o"));

console.log(countBs("BeansBooBhhjBB"));
*/