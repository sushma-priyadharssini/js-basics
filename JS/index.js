// External scripts are practical when the same code is used in many different web pages.
// External script advantages: cleaner and Cached JavaScript files can speed up page loads

// writing into html

// The innerHTML property defines the HTML content
document.getElementById("inner-html").innerHTML = 'Hi, from innerHTML';

// For testing purposes, it is convenient to use document.write():
document.write('Hi, from document.write()');

// For debugging purposes
// JavaScript ignores multiple spaces.
console.log ("Hi, I'm from console");

function basicsAndVariables () {
	// First character of an identifier must be a letter, or an underscore (_), or a dollar sign ($).
	// Since JavaScript treats a dollar, underscore sign as a letter, identifiers containing $ are valid variable names
	// JavaScript is Case Sensitive. JavaScript does not interpret VAR or Var as the keyword var.
	// JavaScript uses the Unicode character set.

	/* To join multiple words: 
	- Hyphens are not allowed in JavaScript. They are reserved for subtractions.
	- Underscore
	- Upper Camel Case (Pascal Case)
	- Lower Camel Case
	*/

	// VARIABLES
	// ES6 allows the use of the const keyword to define a variable that cannot be reassigned, 
	// and the let keyword to define a variable with restricted scope.

	// After the declaration, the variable has no value (technically it has the value of undefined). The type is also undefined. Any variable can be emptied, by setting the value to undefined
	// It's a good programming practice to declare all variables at the beginning of a script.

	// If you re-declare a JavaScript variable, it will not lose its value.

	// Operations
	let x1 = 2 ** 2 // ES6
	let x2 = Math.pow(2,2);
	console.log(`power: x1 = ${x1} and x2 = ${x2}`)

	// Extra large or extra small numbers can be written with scientific (exponential) notation
	var y = 123e5;      // 12300000
	var z = 123e-5;     // 0.00123

	//  In JavaScript null is "nothing". Unfortunately, in JavaScript, the data type of null is an object.
	//  You can consider it a bug in JavaScript that typeof null is an object. It should be null.
	// You can empty an object by setting it to null

	null === undefined         // false
	null == undefined          // true

	// A primitive data value is a single simple data value with no additional properties and methods.
	/*
		string
		number
		boolean
		undefined
	*/

	// The typeof operator can return one of two complex types: function, object
	// The typeof operator returns "object" for objects, arrays, and null.
	// The typeof operator does not return "object" for functions.
	typeof {name:'John', age:34} // Returns "object"
	typeof [1,2,3,4]             // Returns "object" (not "array", because in JavaScript arrays are objects)
	typeof null                  // Returns "object"
	typeof function myFunc(){}   // Returns "function"

	// FUNCTION INVOCATION
	// 1.When an event occurs (when a user clicks a button)
	// 2.When it is invoked (called) from JavaScript code
	// 3.Automatically (self invoked)
	// In a function definition, this refers to the "owner" of the function.
	// When a JavaScript variable is declared with the keyword "new", the variable is created as an object
	var x = new String();        // Declares x as a String object
	var y = new Number();        // Declares y as a Number object
	var z = new Boolean();       // Declares z as a Boolean object

	// EVENTS - onchange, onclick, onmouseover, onmouseout, onkeydown, onload (page load done)
	// https://www.w3schools.com/jsref/dom_obj_event.asp
}

function strings () {
	// The backslash (\) escape character turns special characters into string characters:

	// Don't create strings as objects. It slows down execution speed.
	var x = "John";             
	var y = new String("John");
	x == y // true 
	x === y // false 
	var x = new String("John");             
	var y = new String("John");
	x == y // false, because both are different objects. Comparing two JavaScript objects will always return false.

	// Primitive values, like "John Doe", cannot have properties or methods (because they are not objects).
	// But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties.
	// All string methods return a new string. They don't modify the original string.
	// Formally said: Strings are immutable: Strings cannot be changed, only replaced.

	/* 
	*	indexOf(), lastIndexOf() accept a second parameter as the starting position for the search
	*	The search() method cannot take a second start position argument.
	*	The indexOf() method cannot take powerful search values (regular expressions).
	*/

	// Extracting String Parts

	/* 
	*	slice(start, end) - can accept negative indexes
	*	substring(start, end) - cannot accept negative indexes
	*	substr(start, length) - 2nd param is length, can accept negative indexes
	*/
	// If a parameter is negative, the position is counted from the end of the string.
	// If you omit the second parameter, the method will slice out the rest of the string

	
	var str = "Please visit Microsoft!";
	var n = str.replace("Microsoft", "W3Schools"); // case sensitive
	str = "Please visit Microsoft!";
	var n = str.replace(/MICROSOFT/i, "W3Schools"); // to make it case insensitive. note: Note that regular expressions are written without quotes.
	str = "Please visit Microsoft and Microsoft!";
	var n = str.replace(/Microsoft/g, "W3Schools"); // To replace all matches. /g flag (global match)
	// toUpperCase, toLowerCase, trim
	str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '') // as trim is not supported  in Internet Explorer 8 or lower.
	// writing our own trim fn
	if (!String.prototype.trim) {
		String.prototype.trim = function () {
		  return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
		};
	}

	var text1 = "Hello";
	var text2 = "World";
	var text3 = text1.concat(" ", text2);

	// to support padding at the beginning and at the end of a string.
	let str = "5"; 
	str = str.padStart(4,0); // 0005
	str = str.padEnd(4,0); // 5000
	
	// Extracting String Characters
	var str = "HELLO WORLD";
	str.charAt(0); // returns H
	str.charCodeAt(0);  // returns 72 (returns UTF-16 unicode character)
	str[0];       // returns H (Property Access)
	/* 
	*	If no character is found, [] returns undefined, while charAt() returns an empty string.
	*	It is read only. str[0] = "A" gives no error (but does not work!)
	*/

	// Converting a String to an Array
	var txt = "a,b,c,d,e";
	txt.split(","); // ["a", "b", "c", "d", "e"]
	txt.split("|");  // ["a,b,c,d,e"]	
	txt.startsWith("a,"); // true
	txt.endsWith(",e"); // true
}

function numbers () {
	// Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
	var x = 999999999999999;   // 999999999999999
	var y = 9999999999999999;  // 10000000000000000
	// The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate
	var z = 0.2 + 0.1;         // 0.30000000000000004
	// To solve above problem
	var zz = (0.2 * 10 + 0.1 * 10) / 10;  // 0.3 

	var x = 10;
	var y = "20";
	var z = x + y;           // z will be 1020 (a string)
	var x = "10";
	var y = 20;
	var z = x + y;           // z will be 1020 (a string)

	// JavaScript will try to convert strings to numbers in all numeric operations
	var x = "100";
	var y = "10";
	var z = x / y;       // z will be 10
	var z = x * y;       // z will be 1000
	var z = x - y;       // z will be 90
	var z = x + y;       // z will not be 110 (It will be 10010)

	var x = 100 / "Apple";  // x will be NaN (Not a Number), can check with isNaN
	var x = 100 / "10";     // x will be 10
	typeof NaN;            // returns "number"
	typeof Infinity;     // returns "number"

	// JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.
	// Never write a number with a leading zero (like 07). might interpret numbers as octal.
	var myNumber = 32;
	myNumber.toString(10);  // returns 32 - default
	myNumber.toString(32);  // returns 10
	myNumber.toString(16);  // returns 20
	myNumber.toString(8);   // returns 40
	myNumber.toString(2);   // returns 100000

	// 
	console.log((4555).toString());
	console.log((4555).toString(2));
	console.log(parseInt("1000111001011", 2)); // 4555
	console.log(0b1000111001011.toString(10)); // to decimal -  "4555"
	console.log(0b1000111001011.toString(8)); // to octal - "10713"
	let l = 0x11cb; // l = 4555
	let m = 010713; // m = 4555
	console.log(9 << 2); // 1001, add 2 0s at end - 100100 - 36 in decimal
	console.log(9 << 2); // 1001, remove last 2 - 10 - 2 in decimal

	var x = 9.656;
	x.toExponential(2);     // returns 9.66e+0 - The parameter is optional. takes full number by default
	x.toExponential(4);     // returns 9.6560e+0\

	x.toFixed(0);           // returns 10 - to write with a specified number of decimals, perfect for working with money.
	x.toFixed(2);           // returns 9.66
	x.toFixed(4);           // returns 9.6560

	x.toPrecision();        // returns 9.656 - to write with a specified length
	x.toPrecision(2);       // returns 9.7
	x.toPrecision(4);       // returns 9.656

	// All JavaScript data types have a valueOf() and a toString() method.
	x.valueOf();  // used internally in JavaScript to convert Number objects to primitive values. no reason to use it in your code.

	// Converting Variables to Numbers
	Number(true);          // returns 1
	Number(false);         // returns 0
	Number("10.33");       // returns 10.33
	Number("10 33");       // returns NaN
	Number(new Date("2017-09-30"));    // returns 1506729600000 - returns the number of milliseconds since 1.1.1970.

	//  Spaces are allowed. Only the first number is returned
	parseInt("10.33");      // returns 10
	parseInt("10 20 30");   // returns 10
	parseInt("10 years");   // returns 10
	parseInt("years 10");   // returns NaN 
	parseFloat("10.33");    // returns 10.33

	var x = Number.MAX_VALUE; // max number in js
	var x = Number.MIN_VALUE;
	var x = Number.POSITIVE_INFINITY;  // returns Infinity
	var x = Number.NEGATIVE_INFINITY;
	var x = Number.NaN;
	var x = Number.MAX_SAFE_INTEGER;
	// These properties can only be accessed as Number.MAX_VALUE
	var y = x.MAX_VALUE;    // y becomes undefined
}

function Arrays () {
	var cars = ["Saab", "Volvo", "BMW"]; // the array literal 
	var cars1 = new Array("Saab", "Volvo", "BMW"); // same as above -  dont use this
	var points = new Array(40, 100);  // Creates an array with two elements (40 and 100)
	var points1 = new Array(40);  // Creates an array with 40 undefined elements
	document.getElementById("demo").innerHTML = cars; // Saab,Volvo,BMW
	Array.isArray(cars);   // returns true - to check if it is array, because typeof returns object ES5
	// can use this older browsers
	function isArray(x) {
		return x.constructor.toString().indexOf("Array") > -1;
	}
	cars instanceof Array;   // returns true
	
	// for, forEach - to loop through
	// adds next element
	cars.push("car1");
	cars[cars.length] = "car1"; // Adding elements with high indexes can create undefined "holes" in an array if proper index is not used
	/* 
	*	Arrays with named indexes are called associative arrays (or hashes).
	*	JavaScript does not support arrays with named indexes.
	*	If you use named indexes, JavaScript will redefine the array to a standard object. After that, some array methods and properties will produce incorrect results.
	*/
	var person = [];
	person["firstName"] = "John";
	person["lastName"] = "Doe";
	person["age"] = 46;
	var x = person.length;     // person.length will return 0
	var y = person[0];         // person[0] will return undefined
	// In JavaScript, arrays use numbered indexes. objects use named indexes.
	 

	// ARRAY METHODS methods
	let len = cars.length;
	// The compare function returns a negative, zero, or positive value
	let str = cars.toString(); // no arg, always comma
	let str1 = cars.join('|'); // default is ,

	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	var x = fruits.pop(); // modifies fruits and returns Mango
	var y = fruits.push("Kiwi"); // modifies array and returns new array length
	var p = fruits.shift();    // removes from first and returns the removed element
	var q = fruits.unshift("Lemon");  // adds at first and returns new array length

	delete fruits[0]; // may leave undefined holes in the array. Use pop() or shift() instead.
	var newArr = fruits.splice(2, 0, "Lemon", "Kiwi"); // args in order - start index, how many elements to be removed, elements to be added. returns new array
	var newArr1 = fruits.splice(0, 1);        // Removes the first element of fruits

	var myGirls = ["Cecilie", "Lone"];
	var myBoys = ["Emil", "Tobias", "Linus"];
	var myChildren = myGirls.concat(myBoys); // takes any number of array arguments
	var myChildren1 = myBoys.concat("Peter"); 

	var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
	var citrus = fruits.slice(1, 3); // args in order - start index, end index + 1. returns "Orange", "Lemon". if no 2nd arg, then slices out entire array
	// All JavaScript objects have a toString() method.

	// SORTING
	cars.sort(); // sorts an array alphabetically - AlphaNumeric, directly changes array
	cars.reverse(); // directly changes array - can use for descending order
	points.sort(function(a, b){return a - b}); // for number sort
	// points.sort(function(a, b){return 0.5 - Math.random()}); - to sort in random order
	//  array.sort(), is not accurate, it will favor some numbers over the others. correct method, is Fisher Yates shuffle
	for (i = points.length -1; i > 0; i--) {
		j = Math.floor(Math.random() * i)
		k = points[i]
		points[i] = points[j]
		points[j] = k
	}
	// To find max and min in an array (without sorting - since sorting is inefficient in this case )
	Math.min.apply(null, arr); // Math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3).
	Math.max(...arr);
	function myArrayMax(arr) { // fastest one
		var len = arr.length;
		var max = -Infinity;
		while (len--) {
		  if (arr[len] > max) {
			max = arr[len];
		  }
		}
		return max;
	}
	// sorting string property in array of objects
	cars.sort(function(a, b){
		var x = a.type.toLowerCase();
		var y = b.type.toLowerCase();
		if (x < y) {return -1;}
		if (x > y) {return 1;}
		return 0;
	});

	// ITERATION
	var txt = "";
	var numbers = [45, 4, 9, 16, 25];
	numbers.forEach(myFunction);
	function myFunction(value, index, array) {
		txt = txt + value + "<br>";
	}
	var numberMap = numbers1.map(myFunction);
	function myFunction(value, index, array) {
		return value * 2;
	}
	var over18 = numbers.filter(myFunction);
	function myFunction(value, index, array) {
		return value > 18;
	}
	// The reduce() method does not reduce the original array.
	// The reduce() method runs a function on each array element to produce (reduce it to) a single value.
	// reduceRight() does the same from right to left
	var sum = numbers1.reduce(myFunction, 100); // can accept an initial value
	function myFunction(total, value, index, array) {
		return total + value;
	}
	var allOver18 = numbers.every(myFunction);
	function myFunction(value, index, array) {
		return value > 18;
	}
	var someOver18 = numbers.some(myFunction);
	function myFunction(value, index, array) {
		return value > 18;
	}
	
	// array.indexOf(item, start); - Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.
	// array.lastIndexOf(item, start); Negative values will start at the given position counting from the end, and search to the beginning
	var posf = numbers.indexOf(4); // first match from first occurrence. returns -1 if the item is not found.
	var posl = numbers.lastIndexOf(4); // first match from last occurrence.

	var first = numbers.find(myFunction); // returns the value of the first array element that passes a test function.
	function myFunction(value, index, array) {
		return value > 18;
	}
	var firstIndex = numbers.findIndex(myFunction);
	function myFunction(value, index, array) {
		return value > 18;
	}
}

function Dates () {
	let d1 = new Date()
	let d2 = new Date(year, month, day, hours, minutes, seconds, milliseconds)
	let d3 = new Date(milliseconds)
	let d4 = new Date(date) // string
	//  JavaScript counts months from 0 to 11.
	// You cannot omit month. If you supply only one parameter it will be treated as milliseconds.
	let d4 = new Date(2018); // 2018 will be treated as ms here
	// One and two digit years will be interpreted as 19xx:
	let d5 = new Date(99, 11, 24);
	// JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC. positive ms value takes in forward and negatiive takes backward to that date
	let d6 = new Date(-100000000000);
	// toString(), toUTCString(), toDateString(),  toISOString()
	// ISO Date	"2015-03-25" (The International Standard)
	let d7 = new Date("2015"); // January 01 2015. (or December 31 2014, depending on timezones)
	let d8 = new Date("2015-03-25T12:00:00Z");
	/* 
	Date and time is separated with a capital T.
	TC time is defined with a capital letter Z.
	If you want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead */
	let d9 = new Date("2015-03-25T12:00:00-06:30"); // Omitting T or Z in a date-time string can give different results in different browsers.
	// UTC (Universal Time Coordinated) is the same as GMT (Greenwich Mean Time).
	let d10 = new Date("03/25/2015"); // JS short dates, MM/DD/YYYY format. "DD-MM-YYYY", "YYYY/MM/DD" is undefined. Some browsers will try to guess the format. Some will return NaN.
	let d11 = new Date("Mar 25 2015"); // JS long dates, Month and day can be in any order, month can be written in full (March), Commas are ignored. Names are case insensitive
	let msec = Date.parse("March 21, 2012"); // convert it to milliseconds.

	// METHODS: 
	/* getFullYear(), getMonth(), getDate(), getHours(), getMinutes(), getSeconds(), getMilliseconds(), getTime() - in ms, getDay() - 0 means "Sunday", Date.now() - ES5
	getUTCDate(), getUTCDay(), getUTCFullYear(), getUTCHours(), getUTCMilliseconds(), getUTCMinutes(), getUTCMonth(), getUTCSeconds() - same as above, but returns in UTC
	setDate(), setFullYear(), setHours(), setMilliseconds(), setMinutes(), setMonth(), setSeconds(), setTime(), d.setFullYear(2020, 11, 3);
	can compare dates with >, <, ===
	 */
}

function operations () {
	// MATH methods
	console.log(Math.PI)
	console.log(Math.round(4.7)); // returns 5
	console.log(Math.round(4.4)); // returns 4
	console.log(Math.pow(8, 2)); // returns 64
	console.log(Math.sqrt(64)); // returns 8
	console.log(Math.abs(-4.7)); // returns 4.7
	console.log(Math.ceil(4.4)); // returns 5
	console.log(Math.floor(4.7)); // returns 4
	console.log(Math.sin(90 * Math.PI / 180)); // returns 1 (the sine of 90 degrees)
	console.log(Math.cos(0 * Math.PI / 180));  // returns 1 (the cos of 0 degrees). There are other trig methods too
	console.log(Math.min(0, 150, 30, 20, -8, -200)); // returns -200
	console.log(Math.max(0, 150, 30, 20, -8, -200)); // returns 150

	console.log(Math.random()); // returns a random number (0-1)
	console.log(Math.floor(Math.random() * 10));     // returns a random integer from 0 to 9
	console.log(Math.floor(Math.random() * 10) + 1); // returns a random integer from 0 to 10.
	console.log(Math.floor(Math.random() * 11));     // returns a random integer from 0 to 10. 100 (0-99), 101 (0-101)
	// returns a random number between min (included) and max (excluded)
	function getRandomInteger(min, max) {
		return Math.floor(Math.random() * (max - min) ) + min;
	}
	// returns a random number between min and max (both included)
	function getRndInteger(min, max) {
		return Math.floor(Math.random() * (max - min + 1) ) + min;
	}
	/* 
	Math.E        // returns Euler's number
	Math.PI       // returns PI
	Math.SQRT2    // returns the square root of 2
	Math.SQRT1_2  // returns the square root of 1/2
	Math.LN2      // returns the natural logarithm of 2
	Math.LN10     // returns the natural logarithm of 10
	Math.LOG2E    // returns base 2 logarithm of E
	Math.LOG10E   // returns base 10 logarithm of E
	*/

	// BOOLEAN, COMPARISONS
	var x = false; // typeof x returns boolean
	var y = new Boolean(false); // typeof y returns object.  this one slows down execution speed and can produce some unexpected results. (x == y) is true, (x === y) is false
	var y1 = new Boolean(false); // (x == y) is false because objects cannot be compared 
	/* 
	When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison.
	An empty string converts to 0. A non-numeric string converts to NaN which is always false.
	*/
	/* 
	*	2 < 12	true
	*	2 < "12"	true
	*	2 < "John"	false
	*	2 > "John"	false
	*	2 == "John"	false
	*	"2" < "12"	false
	*	"2" > "12"	true
	*	"2" == "12"	false
	*/
	// for proper results
	let age = Number(age);
	if (isNaN(age)) {
	  voteable = "Input is not a number";
	} else {
	  voteable = (age < 18) ? "Too young" : "Old enough";
	}
	/* 
	In Switch case, If you omit the break statement, the next case will be executed even if the evaluation does not match the case.
	Switch cases use strict comparison (===)
	*/

	// LOOPS
	/* 
	*	for - loops through a block of code a number of times
	*	for/in - loops through the properties of an object
	*	for/of - loops through the values of an iterable object
	*	while - loops through a block of code while a specified condition is true
	*	do/while - also loops through a block of code while a specified condition is true
	*/

	for (i = 0, len = cars.length, text = ""; i < len; i++) { // can initiate many values in statement 1, 2, 3 can be optional
		text += cars[i] + "<br>";
	}
	for (; i < len; i++) { // Statement 1 is optional
		text += cars[i] + "<br>";
	}
	// If you omit statement 2, you must provide a break inside the loop. Otherwise the loop will never end
	for (x in person) {
		text += person[x];
	}
	// for/of lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.
	var cars = ["BMW", "Volvo", "Mini"]; // 'JavaScript'
	var x;

	for (x of cars) {
		document.write(x + "<br >");
	}
	// With a label reference, the break statement can be used to jump out of any code block:
	var cars = ["BMW", "Volvo", "Saab", "Ford"];
	list: {
		text += cars[0] + "<br>";
		text += cars[1] + "<br>";
		break list;
		text += cars[2] + "<br>";
		text += cars[3] + "<br>";
	}
	/* 
		data types - string, number, boolean, object, function
		data types that doesnt contain value - null, undefined
		types of objects - Object, Date, Array, String, Number, Boolean
		typeof returns data type

		The data type of NaN is number
		The data type of an array is object
		The data type of a date is object
		The data type of null is object
		The data type of an undefined variable is undefined *
		The data type of a variable that has not been assigned a value is also undefined *

		"John".constructor                // Returns function String()  {[native code]}
		(3.14).constructor                // Returns function Number()  {[native code]}
		false.constructor                 // Returns function Boolean() {[native code]}
		[1,2,3,4].constructor             // Returns function Array()   {[native code]}
		{name:'John',age:34}.constructor  // Returns function Object()  {[native code]}
		new Date().constructor            // Returns function Date()    {[native code]}
		function () {}.constructor        // Returns function Function(){[native code]}

		function isArray(myArray) {
			return myArray.constructor.toString().indexOf("Array") > -1;
		}
		or
		function isArray(myArray) {
			return myArray.constructor === Array;
		}
	*/
	// TYPE CONVERSION
	// toExponential(), toFixed(), toPrecision() - in Numbers part
	console.log((123).toString());
	console.log(String(100 + 23));
	console.log(String(false));
	console.log(false.toString());
	console.log(String(Date()));
	console.log(Date().toString());
	console.log(Number("3.14"));
	console.log(Number(" ")); // returns 0
	// parseFloat(), parseInt()
	var y = "5";      // y is a string
	var x = + y;      // x is a number
	console.log(Number(false));     // returns 0
	console.log(Number(true));      // returns 1
	console.log(Number(Date()));
	/* js tries to convert to easiest datatype
	5 + null    // returns 5         because null is converted to 0
	"5" + null  // returns "5null"   because null is converted to "null"
	"5" + 2     // returns "52"      because 2 is converted to "2"
	"5" - 2     // returns 3         because "5" is converted to 5
	"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2
	2 + true 	// returns 3		 true is converted 1
	*/

	// JavaScript automatically calls the variable's toString() function when you try to "output" an object or a variable
	document.getElementById("demo").innerHTML = myVar; // {name:"Fjohn"}, [1,2,3,4], new Date(), 123, true, false - "[object Object]", "1,2,3,4", date in string, "123", "true", "false"
	
	// Bitwise operators - &, |, ^, ~, <<, >>, >>>
	/* 
	JavaScript stores numbers as 64 bits floating point numbers, but all bitwise operations are performed on 32 bits binary numbers.
	Before a bitwise operation is performed, JavaScript converts numbers to 32 bits signed integers.
	After the bitwise operation is performed, the result is converted back to 64 bits JavaScript numbers.
	*/

	// Decimal to Binary
	function dec2bin(dec){
		return (dec >>> 0).toString(2);
	}

	// Binary to Decimal
	function bin2dec(bin){
		return parseInt(bin, 2).toString(10);
	}

	/*
	/: start the regex pattern
	{: a literal curly brace
	(: start capturing
	[: start defining a class of characters to capture
	^}: "anything other than }"
	]: OK, that's our whole class definition
	*: any number of characters matching that class we just defined
	): done capturing
	}: a literal curly brace must immediately follow what we captured
	/: end the regex pattern
	*/


	// REGEX - Regular expressions can be used to perform all types of text search and text replace operations.
	// /pattern/modifiers - /w3schools/i  is a regular expression. w3schools  is a pattern, i  is a modifier
	// String methods - search(), replace(), match()
	var str = "Visit W3Schools!";
	var n1 = str.search("W3Schools"); // n = 6 - returns only the first search match index even when used with g
	var n2 = str.search(/w3schools/i); // n = 6 case insensitive regular expression
	var str1 = "Visit Microsoft!";
	var res = str.replace("Microsoft", "W3Schools");
	var res1 = str.replace(/microsoft/i, "W3Schools"); //  case insensitive regular expression
	var res2 = str.match(/Visit/g) // ["Visit"]
	var res3 = str.match(/visit/g) // null - when no match found. case sensitive
	var str2 = "2019 gone. lets this yeah be better than 2019"
	var res4 = str.replaceAll("2019", "2020"); // ES 2021
	// Regular expressions can make your search much more powerful (case insensitive for example).

	/* 
	i	Perform case-insensitive matching
	g	Perform a global match (find all matches rather than stopping after the first match) - use with .match() only
	m	Perform multiline matching
	*/

	// Regular Expression Pattern

	/* Brackets are used to find a range of characters:
	[abc]	Find any of the characters between the brackets // usage - str.match(/[th]/g)
	[0-9]	Find any of the digits between the brackets
	(x|y)	Find any of the alternatives separated with |
	*/

	/* Metacharacters are characters with a special meaning:
	\d	Find a digit
	\s	Find a whitespace character
	\b	Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b
	\uxxxx	Find the Unicode character specified by the hexadecimal number xxxx
	*/

	/* Quantifiers define quantities:
	n+	Matches any string that contains at least one n
	n*	Matches any string that contains zero or more occurrences of n
	n?	Matches any string that contains zero or one occurrences of n
	. 	Matches any character except newline or tab etc
	*/

	// test() - It searches a string for a pattern, and returns true or false, depending on the result.
	var patt = /e/;
	patt.test("The best things in life are free!");

	// exec() - It searches a string for a specified pattern, and returns the found text as an object.
	var obj = /e/.exec("The best things in life are free!"); //  obj[0] - 'e', obj.index - 2 (postion),  obj.input - The best things in life are free!. If no match is found, it returns an empty (null) object.

	let b1 = /a{1-9}/i;
	let b2 = /a{3,}/i; // for atleast 3a s to be present
	let b3 = /a.c/; // afdsfsfcddc
	let b4 = /a.+c/; // a1c11111abc - 1 match
	let b5 = /a.+?c/; // a1c11111abc - 2 matches
	let b6 = /[a-z]\]/g; // matches alphabets and brackets too
	let b7 = /[a-z.]\./; // inside square bracket no need of escape it, but need to excape it outer
	let b8 = /\w/; // same as /[a-z0-9]/
	let b9 = /\W/; // non alpha-numberic
	let b10 = /\d/; // /[0-9]/
	let b11 = /\D/; // non digits
	let b12 = /\s/; // matches whitespace
	let b13 = /\S/; // matches everything except whitespace
	let b14 = /\d\d-\d\d-\d\d\d\d/ // regex for date
	let b15 = /^t/ // match when string starts with t
	let b16 = /^t.t$/ // match when string starts and ends with t with 1 letter in between
	let b17 = /^t.+t$/ // match when string starts and ends with t with any number of letters in between
	let b18 = /0(12|21)/ // matches 012 or 021

	let b19 = /I am (?=great)/ // matches I am followed by great
	let b20 = 'I am great'.replace(b19, 'we are ')


	// regextester.com
}

function JSConcepts () {
	// JavaScript Errors - Throw and Try to Catch, finally
	// JavaScript will actually create an Error object with two properties: name and message (the err from catch)
	// JavaScript has a built in error object that provides error information when an error occurs.
	/* Six different values can be returned by the error name property:
	EvalError	An error has occurred in the eval() function. Newer versions of JavaScript do not throw EvalError. Use SyntaxError instead.
	RangeError	A number "out of range" has occurred.  Eg: 1.toPrecision(500); // A number cannot have 500 significant digits
	ReferenceError	An illegal reference has occurred. Eg: x = y + 1;   // y cannot be referenced (used)
	SyntaxError	A syntax error has occurred. 
	TypeError	A type error has occurred. Eg:  num.toUpperCase();
	URIError	An error in encodeURI() has occurred. // if you use illegal characters in a URI function:  decodeURI("%%%");   // You cannot URI decode percent signs
	*/
	// The throw statement allows you to create a custom error.
	// throw "Too big";    // throw a text. The exception can be a JavaScript String, a Number, a Boolean or an Object:

	// Scopes
	/* 
	If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
	In "Strict Mode", undeclared variables are not automatically global.
	In HTML, the global scope is the window object. All global variables belong to the window object.
	Do NOT create global variables unless you intend to. Your global variables (or functions) can overwrite window variables (or functions).
	JS has lexical scoping - outer scope variable can be accessed in an inner scope
	*/

	// HOISTING - JavaScript's default behavior of moving all declarations to the top of the current scope
	/* 
	In JavaScript, a variable can be declared after it has been used. In other words; a variable can be used before it has been declared.

	var y = 2;
	var x = function () {
		console.log(y); // gives undefined and NOT 2 because y is hoisted in function scope
		var y = 1;
	}
	x();

	Variables defined with let and const are hoisted (not hoisted) to the top of the block, but not initialized. The block of code is aware of the variable, but it cannot be used until it has been declared.
	The variable is in a "temporal dead zone" from the start of the block until it is declared:

	carName = "Volvo";
	let carName; // ReferenceError

	carName = "Volvo";
	const carName; // syntax errror. code will not run.

	another way to define const:
	Object.defineProperty(window, 'PI', {
		value: 3.14,
		writable: false
	});
	PI = 2; // gives 3.14, wont give error

	JavaScript only hoists declarations, not initializations. var x = 5;
	JavaScript in strict mode does not allow variables to be used if they are not declared.
	*/

	// "use strict" - ES5
	/* 
	Strict mode is declared by adding "use strict"; to the beginning of a script or a function.
	The "use strict" directive is only recognized at the beginning of a script or a function.
	for IE9 - Compiling a numeric literal (4 + 5;) or a string literal ("John Doe";) in a JavaScript program has no side effects. It simply compiles to a non existing variable and dies.
	avoids error - In normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.
	
	Using a variable, without declaring it
	Deleting a variable (or object), function is not allowed.
	Duplicating a parameter name. Eg: function x(p1, p1) {}; 
	Octal numeric literals are not allowed: Eg: var x = 010;
	Octal escape characters are not allowed. Eg: var x = "\010";
	Writing to a read-only property is not allowed. Eg: var obj = {}; Object.defineProperty(obj, "x", {value:0, writable:false}); obj.x = 3.14; 
	Writing to a get-only property is not allowed. Eg: var obj = {get x() {return 0} }; obj.x = 3.14;
	Deleting an undeletable property is not allowed. Eg: delete Object.prototype; 
	The words eval, arguments, implements, interface, package, private, protected, public, static, yield cannot be used as a variable.
	The with statement is not allowed. Eg: with (Math){x = cos(2)};
	For security reasons, eval() is not allowed to create variables in the scope from which it was called. Eg: eval ("var x = 2"); alert (x);  


	The this keyword refers to the object that called the function. If the object is not specified, functions in strict mode will return undefined and functions in normal mode will return the global object (window)
	*/

	/* What is this?
	The JavaScript this keyword refers to the object it belongs to.

	In a method, this refers to the owner object.
	Alone, this refers to the global object. (window object)
	In a function, this refers to the global object.
	In a function, in strict mode, this is undefined. JavaScript strict mode does not allow default binding.
	In an event, this refers to the element that received the event.
	Methods like call(), and apply() can refer this to any object. They are used to call an object method with another object as argument.
	*/

	/* let and const.
	provide Block Scope variables. already existing - Global Scope and Function Scope. 
	With JavaScript, the global scope is the JavaScript environment.
	In HTML, the global scope is the window object.
	Global variables defined with the var keyword belong to the window object
	Global variables defined with the let keyword do not belong to the window object

	var x = 2;       // Allowed
	let x = 3;       // Not allowed and the vice versa is also not allowed

	let x = 2;       // Allowed
	let x = 3;       // Not allowed

	Variables defined with const behave like let variables, except they cannot be reassigned
	JavaScript const variables must be assigned a value when they are declared. Eg: const PI; results in syntax error
	It does NOT define a constant value. It defines a constant reference to a value. Because of this, we cannot change constant primitive values, but we can change the properties of constant objects.
	*/

	// Arrow functions
	var hello = () => {
		return "Hello World!";
	}
	hello = (val) => "Hello World!";
	hello = val => "Hello " + val; // when only 1 param needed.

	/* 
	The handling of this is also different in arrow functions compared to regular functions. ie, with arrow functions there are no binding of this.
	With arrow functions the this keyword always represents the object that defined the arrow function.
	*/
	hello = function() {
		document.getElementById("demo").innerHTML += this;
	}
	// The window object calls the function:
	window.addEventListener("load", hello); // returns window in case of both normal function and arrow function
	// A button object calls the function:
	document.getElementById("btn").addEventListener("click", hello); // returns button incase of normal function, but returns window in case of arrow function

	/* 
	The debugger keyword stops the execution of JavaScript, and calls (if available) the debugging function(same as doing via F12). If no debugging is available, the debugger statement has no effect.
	var x = 15 * 5;
	debugger;
	document.getElementById("demo").innerHTML = x;
	*/

	/* Best Practices
	Hyphens can be mistaken as subtraction attempts. Hyphens are not allowed in JavaScript names.
	Avoid global variables, avoid new, avoid ==, avoid eval() - (Because it allows arbitrary code to be run, it also represents a security problem)

	var x = 0.1;
	var y = 0.2;
	var z = x + y            // the result in z will not be 0.3
	var z = (x * 10 + y * 10) / 10;       // z will be 0.3
	*/

	/* Performances
	var i;
	var l = arr.length;
	for (i = 0; i < l; i++) { // The bad code accesses the length property of an array each time the loop is iterated.

	Accessing the HTML DOM is very slow, compared to other JavaScript statements. If you expect to access a DOM element several times, access it once, and use it as a local variable
	var obj;
	obj = document.getElementById("demo");
	obj.innerHTML = "Hello";

	Keep the number of elements in the HTML DOM small. This will always improve page loading, and speed up rendering (page display), especially on smaller devices.
	Every attempt to search the DOM (like getElementsByTagName) will benefit from a smaller DOM.

	Avoid Unnecessary Variables

	Delay JavaScript Loading 
	Putting your scripts at the bottom of the page body lets the browser load the page first. While a script is downloading, the browser will not start any other downloads.
	In addition all parsing and rendering activity might be blocked. The HTTP specification defines that browsers should not download more than two components in parallel.
	An alternative is to use defer="true" in the script tag. The defer attribute specifies that the script should be executed after the page has finished parsing, but it only works for external scripts.

	Avoid Using with - It has a negative effect on speed. It also clutters up JavaScript scopes. It is not allowed in strict mode.
	*/
}

function Forms () {
	return {
		// can do validation for fields without form too, with just .value and add css class for custom validation
		// we have required/pattern/min/max/type  validations supported by browser, can be directly added to html 
		// :disabled/:invalid/:optional/:required/:valid
		validateForm: function () {
			var x = document.forms["myForm"]["fname"].value;
			if (x == "") {
			  alert("Name must be filled out");
			  return false;
			}
		},
 
		/* 
		checkValidity()	Returns true if an input element contains valid data.
		setCustomValidity()	Sets the validationMessage property of an input element.

		validity	Contains boolean properties related to the validity of an input element.
		(customError, patternMismatch, rangeOverflow, rangeUnderflow, stepMismatch, tooLong, typeMismatch, valueMissing, valid) - can set different error messages with these 
		validationMessage	Contains the message a browser will display when the validity is false.
		willValidate	Indicates if an input element will be validated.
		*/
		validateInput: function () {
			var inpObj = document.getElementById("id1");
			if (!inpObj.checkValidity()) {
			  document.getElementById("demo").innerHTML = inpObj.validationMessage;
			}
		}
	}


}

function Objects () {
	/* 
	A primitive value is a value that has no properties or methods. - string, number, boolean, null, undefined
	myFather.nationality = "English"; The property/method will be added to myFather. Not to myMother. (Not to any other person objects).
	Person.nationality = "English"; You cannot add a new property/method to an object constructor the same way you add a new property/method to an existing object
	To add a new property/method to a constructor, you must add it to the constructor function. Sometimes you want to add new properties (or methods) to all existing objects of a given type
	*/
	// Getters and Setters
	var person = {
		firstName: "John",
		lastName : "Doe",
		language : "NO",
		get lang() {
			return this.language;
		},
		set lang(value) {
			this.language = value;
		}
	};
		
	// Set an object property using a setter:
	person.lang = "en";

	Object.values(person); // get all property values
		
	// Display data from the object using a getter:
	document.getElementById("demo").innerHTML = person.lang;

	Object.defineProperty(person, "language", {
		value: "EN",
		writable : true,
		enumerable : true, // can be accessed whe object is looped
		configurable : true
	});

	Object.defineProperty(person, "language", {
		get : function() { return language },
		set : function(value) { language = value.toUpperCase()}
	});

	var person1 = {
		firstName: "John",
		lastName : "Doe",
		fullName : function() { // will be accessed as a function as person1.fullName()
		  return this.firstName + " " + this.lastName;
		}
	};
	// JavaScript can secure better data quality when using getters and setters. useful for doing things behind-the-scenes and simpler syntax
	var person2 = {
		firstName: "John",
		lastName : "Doe",
		get fullName() { // will be accessed as an object as person2.fullName
		  return this.firstName + " " + this.lastName;
		}
	};
	var obj = {counter : 0};
	Object.defineProperty(obj, "decrement", {
		get : function () {this.counter--;}
	});

	// Adding or changing an object property
	Object.defineProperty(object, property, descriptor) // descriptor = {writable , enumerable, configurable}

	// Adding or changing many object properties
	Object.defineProperties(object, descriptors)

	// Accessing Properties
	Object.getOwnPropertyDescriptor(object, property)

	// Returns all properties as an array
	Object.getOwnPropertyNames(object)

	// Returns ENUMERABLE properties as an array
	Object.keys(object)

	// Accessing the prototype
	Object.getPrototypeOf(object)

	// Prevents adding properties to an object
	Object.preventExtensions(object)
	// Returns true if properties can be added to an object
	Object.isExtensible(object)

	// Prevents changes of object properties (not values)
	Object.seal(object)
	// Returns true if object is sealed
	Object.isSealed(object)

	// Prevents any changes to an object
	Object.freeze(object)
	// Returns true if object is frozen
	Object.isFrozen(object)
	// entries, values, assign
	// assign, spread operator helps in cloning, but doesnt do deep cloning
}

function Functions () {
	var myFunction = new Function("a", "b", "return a * b"); // dont use
	var x = myFunction(4, 3);
	var myFunction = function (a, b) {return a * b};
	var y = myFunction(4, 3);
	// Functions defined using an expression are not hoisted.

	// A self-invoking expression is invoked (started) automatically, without being called.
	(function () {
		var x = "Hello!!";  // I will invoke myself
	})();
	function myFunction(a, b) {
		return arguments.length;
	}

	/* 
	Arrow functions do not have their own this. They are not well suited for defining object methods.
	Arrow functions are not hoisted. 
	Using const is safer than using var, because a function expression is always constant value.
	*/
	var x = function(x, y) {
		return x * y;
	}
	// arguments - If a function is called with too many arguments (more than declared), these arguments can be reached using the arguments object.
	var x = findMax(1, 123, 500, 115, 44, 88);
	function findMax() {
	var i;
	var max = -Infinity;
	console.log(arguments);
	for (i = 0; i < arguments.length; i++) {
		if (arguments[i] > max) {
		max = arguments[i];
		}
	}
	return max;
	}

	// call - With call(), an object can use a method belonging to another object.
	// apply - With the apply() method, you can write a method that can be used on different objects. This method takes arguments as an array.
	/* 
	 In JavaScript strict mode, if the first argument of the apply() method is not an object, it becomes the owner (object) of the invoked function.
	 In "non-strict" mode, it becomes the global object.
	*/

	// Closures - A closure is a function having access to the parent scope, even after the parent function has closed.
	/* 
	Global variables can be made local (private) with closures.
	Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function. - contradicting hoisting concept
	 */
	var add = (function () {
		var counter = 0;
		return function () {counter += 1; return counter}
	})();
	  
	add();
	add();
	add(); 
	// It makes it possible for a function to have "private" variables.
	// The counter is protected by the scope of the anonymous function, and can only be changed using the add function.

}

function Classes () {
	/* JavaScript Classes - JavaScript Classes are templates for JavaScript Objects.
	A JavaScript class is not an object. It is a template for JavaScript objects.
	The constructor method is called automatically when a new object is created. If you do not define a constructor method, JavaScript will add an empty constructor method.
	The syntax in classes must be written in "strict mode". You will get an error if you don't
	class declarations are not hoisted.
	*/
	class Car {
		constructor(name) {
		  this.name = name;
		}
		present() {
			return 'I have a ' + this.name;
		}
		// getters and setters
		/* 
		Classes also allows you to use getters and setters like objects. It can be smart to use getters and setters for your properties, 
		especially if you want to do something special with the value before returning them, or before you set them
		The name of the getter/setter method cannot be the same as the name of the property. that's why properties have _ used along with the same getter name
		*/
		get cnam() {
			return this.name;
		}
		set cnam(x) {
			this.name = x;
		}
		/* 
		Static class methods are defined on the class itself.
		You cannot call a static method on an object, only on an object class.
		*/
		static hello(x) {
			return "Hello " + x.name;
		}
	}
	let myCar1 = new Car("Ford", 2014);
	let carName = myCar1.cnam;
	let carStaticHello = Car.hello(myCar1);

	// extends - A class created with a class inheritance inherits all the methods from another class
	class Model extends Car {
		/* 
		The super() method refers to the parent class.
		By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
		Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.
		*/
		constructor(brand, mod) {
		  super(brand);
		  this.model = mod;
		}
		show() {
		  return this.present() + ', it is a ' + this.model;
		}
	}
	let myCar2 = new Model("Ford", "Mustang"); // myCar2.show(); will give - I have a Ford, it is a Mustang
}

function Asyncs () {
	// callbacks
	function myDisplayer(some) {
		document.getElementById("demo").innerHTML = some;
	}
	function myCalculator(num1, num2, myCallback) {
		let sum = num1 + num2;
		myCallback(sum);
	}
	myCalculator(5, 5, myDisplayer); // flexibility that we can pass any callbacks we want to pass to myCalculator in each call
	// setTimeout - an example in async callback
	// setInterval(myFunction, 1000); - myFunction will be called every function

	function getFile(myCallback) {
		let req = new XMLHttpRequest();
		req.open('GET', "mycar.html");
		req.onload = function() {
		  if (req.status == 200) {
			myCallback(req.responseText);
		  } else {
			myCallback("Error: " + req.status);
		  }
		}
		req.send();
	}
	getFile(myDisplayer);

	// Promises
	/* 
	The Promise object supports two properties: state(pending/fulfilled/rejected) and result(undefined/a result value/an error object)
	You cannot access the Promise properties state and result.
	Promise.then() takes two arguments, a callback for success and another for failure.
	*/
	let myPromise = new Promise(function(myResolve, myReject) {
	// "Producing Code" (May take some time)
	
		myResolve(); // when successful
		myReject();  // when error
	});
	
	// "Consuming Code" (Must wait for a fulfilled Promise).
	myPromise.then(
		function(value) { /* code if successful */ },
		function(error) { /* code if some error */ }
	);

	let myPromise1 = new Promise(function(myResolve, myReject) {
		let req = new XMLHttpRequest();
		req.open('GET', "mycar.htm");
		req.onload = function() {
		  if (req.status == 200) {
			myResolve(req.response);
		  } else {
			myReject("File not Found");
		  }
		};
		req.send();
	}); 
	myPromise1.then(
		function(value) {myDisplayer(value);},
		function(error) {myDisplayer(error);}
	);

	// Async Await
	/* 
	The keyword async before a function makes the function return a promise
	The keyword await before a function makes the function wait for a promise
	The await keyword can only be used inside an async function
	*/
	async function myFunction() {
		return "Hello"; // is same as return Promise.resolve("Hello");
	}
	async function myDisplay() {
		let myPromise = new Promise(function(myResolve, myReject) {
		  myResolve("I love You !!");
		});
		document.getElementById("demo").innerHTML = await myPromise;
	}
	myDisplay();

	async function getFile() {
		let myPromise = new Promise(function(myResolve, myReject) {
		  let req = new XMLHttpRequest();
		  req.open('GET', "mycar.html");
		  req.onload = function() {
			if (req.status == 200) {myResolve(req.response);}
			else {myResolve("File not Found");}
		  };
		  req.send();
		});
		document.getElementById("demo").innerHTML = await myPromise;
	}
	getFile();
}

function DOM () {
	/* 
	When a web page is loaded, the browser creates a Document Object Model of the page.
	The HTML DOM model is constructed as a tree of Objects
	The HTML DOM is a standard for how to get, change, add, or delete HTML elements.
	*/
	/* 
	Finding HTML Elements - document.getElementById(id), document.getElementsByTagName(name), document.getElementsByClassName(name), document.querySelectorAll("p.intro") (css selectors)
	we can also find el with - document.anchors, document.forms, document.body, document.images, document.lastModified, document.inputEncoding
	Changing HTML Elements - el.innerHTML=new html content, el.attribute=new value, el.style.property=new style, el.setAttribute(attribute, value)
	Adding and Deleting Elements - document.createElement(el), document.removeChild(el), document.appendChild(el), document.replaceChild(new, old), document.write(text) (don't use after doc is loaded)
	Adding Events Handlers - document.getElementById(id).onclick = function(){code}
	
	*/
	var myElement = document.getElementById("intro"); // if found returns el object else returns null
	var x = document.forms["frm1"]; // finds the form element with id="frm1"

	// Animation
	var elem = document.getElementById("animate");   
	var pos = 0;
	var id = setInterval(frame, 5);
	function myMove() {
		var elem = document.getElementById("animate");   
		var pos = 0;
		var id = setInterval(frame, 5);
		function frame() {
		  if (pos == 350) {
			clearInterval(id);
		  } else {
			pos++; 
			elem.style.top = pos + "px"; 
			elem.style.left = pos + "px"; 
		  }
		}
	}

	// Events
	/* 
	<h1 onclick="this.innerHTML = 'Ooops!'">Click on this text!</h1>
	<h1 onclick="changeText(this)">Click on this text!</h1>
	document.getElementById("myBtn").onclick = displayDate;
	<body onload="checkCookies()"> 
	The onload event can be used to check the visitor's browser type and browser version, and load the proper version of the web page based on the information.
	The onload and onunload events can be used to deal with cookies.
	<input type="text" id="fname" onchange="upperCase()">
	onmouseover, onmouseout, onmousedown, onmouseup, onmouseover, onfocus
	- First when a mouse-button is clicked, the onmousedown event is triggered, then, when the mouse-button is released, the onmouseup event is triggered, finally, when the mouse-click is completed, the onclick event is triggered.

	The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.
	You can easily remove an event listener by using the removeEventListener() method. can add event listeners to any DOM object not only HTML elements. i.e the window object.

	element.addEventListener(event, function, useCapture); // default value is false (default is bubbling)
	element.removeEventListener("mousemove", myFunction); // removes myFunction for that listener
	*/

	window.addEventListener("resize", function() {
		document.getElementById("demo").innerHTML = 'resizing...';
	});

	/* 
	In bubbling the inner most element's event is handled first and then the outer: the <p> element's click event is handled first, then the <div> element's click event.
	In capturing the outer most element's event is handled first and then the inner: the <div> element's click event will be handled first, then the <p> element's click event.
	*/

	/* DOM Nodes
	The entire document is a document node
	Every HTML element is an element node
	The text inside HTML elements are text nodes
	Every HTML attribute is an attribute node (deprecated)
	All comments are comment nodes
	You can use the following node properties to navigate between nodes with JavaScript:parentNode, childNodes[nodenumber], firstChild, lastChild, nextSibling, previousSibling

	A common error in DOM processing is to expect an element node to contain text.
	<title id="demo">DOM Tutorial</title>
	The element node <title> does not contain text.
	var myTitle = document.getElementById("demo").firstChild.nodeValue; // Accessing the innerHTML property is the same as accessing the nodeValue of the first child
	var myTitle = document.getElementById("demo").childNodes[0].nodeValue;
	document.body - The body of the document
	document.documentElement - The full document

	nodeName is read-only
	nodeName of an element node is the same as the tag name
	document.getElementById("id01").nodeName; // nodeName always contains the uppercase tag name of an HTML element.

	The nodeValue property specifies the value of a node.
	nodeValue for element nodes is null
	nodeValue for text nodes is the text itself
	nodeValue for attribute nodes is the attribute value

	The nodeType property is read only. It returns the type of a node.
	document.getElementById("id01").nodeType; //1,2,3,8,9,10

	var para = document.createElement("p");
	var node = document.createTextNode("This is new.");
	para.appendChild(node);
	var element = document.getElementById("div1");
	element.appendChild(para); or element.insertBefore(para, child);
	element.remove(); or parent.removeChild(child); or child.parentNode.removeChild(child);
	parent.replaceChild(para, child);

	HTMLCollection:
	The getElementsByTagName() method returns an HTMLCollection object. An HTMLCollection object is an array-like list (collection) of HTML elements.
	not an array, cant use array methods(except that it has length property). but can loop through.
	is a collection of HTML elements.
	HTMLCollection items can be accessed by their name, id, or index number.

	NodeList :
	A NodeList object is almost the same as an HTMLCollection object.
	Some (older) browsers return a NodeList object instead of an HTMLCollection for methods like getElementsByClassName().
	All browsers return a NodeList object for the property childNodes. 
	Most browsers return a NodeList object for the method querySelectorAll().
	is a collection of document nodes.
	NodeList items can only be accessed by their index number.
	Only the NodeList object can contain attribute nodes and text nodes.
	*/
}

function BOM () {
	/* 
	The window object is supported by all browsers. It represents the browser's window.
	Global variables are properties of the window object. Global functions are methods of the window object.
	Even the document object (of the HTML DOM) is a property of the window object: window.document.getElementById("header"); same as document.getElementById("header");
	Window Size: window.innerHeight, window.innerWidth in px (document.documentElement.clientHeight/document.body.clientHeight in older browsers)
	window.open(), window.close(), window.moveTo(), window.resizeTo()

	The window.screen object contains information about the user's screen.
	window.screen.width, screen.height, (visitor's screen width)
	screen.availWidth(screen width - interface features like the Windows Taskbar), screen.availHeight,
	screen.colorDepth, (number of bits used to display one color. - 24 or 32)
	screen.pixelDepth (returns the pixel depth of the screen. - 24) (For modern computers, Color Depth and Pixel Depth are equal)

	window.location
	window.location.href, window.location.hostname (domain name), window.location.pathname (path & filename), window.location.protocol,
	window.location.port, window.location.assign("") (loads new)
	Most browsers will not display default port numbers (80 for http and 443 for https)

	window.history
	history.back() - browser back, history.forward() - browser forward

	window.navigator object contains information about the visitor's browser.
	navigator.appName (Netscape), navigator.appCodeName (Mozilla), navigator.platform (Win32), navigator.cookieEnabled (true), navigator.product (Gecko)
	navigator.appVersion (returns browser version info), navigator.userAgent, navigator.language (en-US), navigator.onLine (true), navigator.javaEnabled() (false)
	The information from the navigator object can often be misleading, and should not be used to detect browser versions because:
	Different browsers can use the same name, The navigator data can be changed by the browser owner, Some browsers misidentify themselves to bypass site tests
	Browsers cannot report new operating systems, released later than the browser

	alert("Hello\nHow are you?"), // displays only primitive datatype values (hexadecimal as a number, not in hexadecimal)
	if (confirm("Press a button!")) {
		txt = "You pressed OK!";
	} else {
		txt = "You pressed Cancel!";
	}
	var person = prompt("Please enter your name", "Harry Potter");
	if (person == null || person == "") {
		txt = "User cancelled the prompt.";
	} else {
		txt = "Hello " + person + "! How are you today?";
	}

	JavaScript Timing Events
	setTimeout(function, milliseconds), setInterval(function, milliseconds) - methods of the HTML DOM Window object.
	clearTimeout() - method stops the execution of the function specified in setTimeout()
	clearInterval - method stops the execution of the function specified in setInterval()

	myVar = setTimeout(function, milliseconds); myVar is like id
	clearTimeout(myVar);

	myVar = setInterval(function, milliseconds);
	clearInterval(myVar);

	Cookies let you store user information in web pages. is data, stored in small text files, on your computer.
	When a web server has sent a web page to a browser, the connection is shut down, and the server forgets everything about the user.
	Cookies were invented to solve the problem "how to remember information about the user":
	When a user visits a web page, his/her name can be stored in a cookie.
	When a browser requests a web page from a server, cookies belonging to the page are added to the request. This way the server gets the necessary data to "remember" information about users.
	document.cookie = "username=John Doe";
	document.cookie will return all cookies in one string 
	The document.cookie property looks like a normal text string. But it is not. more of like name-value
	set, get, change, delete. name, value, exp days
	*/
}

function AJAX () {
	/* Asynchronous JavaScript And XML.
	Read data from a web server - after the page has loaded
	Update a web page without reloading the page
	Send data to a web server - in the background
	*/
	function loadDoc() {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		  if (this.readyState == 4 && this.status == 200) {
		   document.getElementById("demo").innerHTML = this.responseText;
		  }
		};
		xhttp.open("GET", "ajax_info.txt", true);
		xhttp.send();
	}

	/* 
	methods:
	abort()	Cancels the current request
	getAllResponseHeaders()	Returns header information
	getResponseHeader()	Returns specific header information
	open(method, url, async, user, psw)	Specifies the request
	send()	Sends the request to the server, Used for GET requests
	send(string) Sends the request to the server. Used for POST requests
	setRequestHeader()	Adds a label/value pair to the header to be sent
	properties: onreadystatechange, readyState(0-4), responseText, responseXML, status(200, 500), statusText('OK', 'Not Found')
	POST has no size limitations
	If you use the XMLHttpRequest Object, Fetch can do the same in a simpler way.
	*/
}

export function WebAPIs () {
	/* 
	The Web History API provides easy methods to access the windows.history object.
	length, window.history.back(), forward(), window.history.go(-2); 

	localStorage.setItem("name", "John Doe"); localStorage.getItem("name"); - web storage api
	store, read, add, modify, and delete data items for that domain.
	The data is stored with no expiration date, and will not be deleted when the browser is closed.

	The sessionStorage object is identical to the localStorage object, but for a session.
	The data is deleted when the browser is closed.
	sessionStorage.setItem("name", "John Doe"); sessionStorage.getItem("name");
	key(n), length, removeItem(keyName), clear()

	A web worker is a JavaScript running in the background, without affecting the performance of the page.
	A web worker is a JavaScript that runs in the background, independently of other scripts, without affecting the performance of the page.
	When executing scripts in an HTML page, the page becomes unresponsive until the script is finished.
	You can continue to do whatever you want: clicking, selecting things, etc., while the web worker runs in the background.
	- used for more CPU intensive tasks.

	*/

	// creating our web worker in an external JavaScript.
	var i = 0;
	function timedCount() {
		i = i + 1;
		postMessage(i);
		setTimeout("timedCount()",500);
	}
	timedCount();

	var w;
	// 2 buttons for each in html
	// Since web workers are in external files, they do not have access to window, document, parent object
	function startWorker() {
		if (typeof(Worker) !== "undefined") {
			if (typeof(w) == "undefined") {
			w = new Worker("demo_workers.js");
			}
			w.onmessage = function(event) {
			// hits here when message is posted
			document.getElementById("result").innerHTML = event.data;
			};
		} else {
			document.getElementById("result").innerHTML = "Sorry! No Web Worker support.";
		}
	}

	function stopWorker() {
		// When a web worker object is created, it will continue to listen for messages (even after the external script is finished) until it is terminated.
		w.terminate();
		w = undefined;
	}

	// Fetch Api
	fetch (file)
	.then(x => x.text())
	.then(y => document.getElementById("demo").innerHTML = y);

	or 
	async function getText(file) {
		let myObject = await fetch(file);
		let myText = await myObject.text();
		myDisplay(myText);
	}
	// browser supports Geolocation Api too
}
