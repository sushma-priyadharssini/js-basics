/* 
Proxy reflections
symbols - allows you to create unique values
regex
recursion - currently its rish, tail optimization will be up in future
web workers
generators
 */

function Promises() {
	let promiseToCleanRoom = new Promise(function(resolve, reject) {
		let isClean = true;
		if(isClean) {
			resolve('clean');
		} else {
			reject('not clean');
		}
	});

	promiseToCleanRoom.then(function (fromResolve) {
		console(`the room is ${fromResolve}`);
	}).catch(function(fromReject) {
		console(`the room is ${fromReject}`);
	})

	a().then(function(){
		return b();
	}).then(function(){
		return c();
	}).then(function(){
		console.log('done');
	});

	/* 
	Promise.all([p1, p2, p3]) - wait for all, abort on any failure
	Promise.race([p1, p2, p3]) - wait for all, abort on any success or failure
	Promise.allSettled([p1, p2, p3]) - wait for all. - ES2020
	Promise.any([p1, p2, p3]) - wait for all, abort on first success. p1 -reject, p2, p3 - resolve; 1st run "p2", 2nd run gives "p3" - ES2021
	*/
	function delay() {
		return Math.floor(Math.random() * 1000);
	}
	const p1 = new Promise((resolve, reject) => {
		setTimeout(() => reject("p1"), delay());
	});
	const p2 = new Promise((resolve, reject) => {
		setTimeout(() => resolve("p2"), delay());
	});
	const p3 = new Promise((resolve, reject) => {
		setTimeout(() => resolve("p3"), delay());
	});

	async function tryAny() {
		try {
			const first = await Promise.any([p1, p2, p3])
		} catch (err) {
			console.log(err)
		}
	}
	tryAny();

	// async await
	console.log('person1: shows ticket');
	console.log('person2: shows ticket');

	const preMovie = async () => {
		const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
			setTimeout(() => resolve('ticket'), 3000);
		});
		const getPopcorn =  new Promise((resolve, reject) => {
			setTimeout(() => resolve('popcorn'), 3000);
		});
		const addButter =  new Promise((resolve, reject) => {
			setTimeout(() => resolve('butter'), 3000);
		});
		const getCandy =  new Promise((resolve, reject) => {
			setTimeout(() => resolve('candy'), 3000);
	  	});
	    const getCoke =  new Promise((resolve, reject) => {
			setTimeout(() => resolve('coke'), 3000);
	  	});
	
	  
		let ticket = await person3PromiseToShowTicketWhenWifeArrives;
		console.log(`got the ${ticket}`);
		console.log(`Husband:we should go in now`);
		console.log(`Wife: "i am hungry"`);
		
		let popcorn = await getPopcorn;
		console.log(`Husband: here is ${popcorn}`);
		console.log(`Husband:we should go in now`);
		console.log(`Wife: "I dont like popcorn without butter!"`);
		
		let butter = await addButter;
		console.log(`added ${butter}`);
		 
		console.log(`Husband:Anything else darling`);
		console.log(`Wife: lets go we are going to miss the preivew`);
		console.log(`Husband: thanks for the reminder *grin*`);

		// for .all
		let ticket = await person3PromiseToShowTicketWhenWifeArrives;
		let [ popcorn, candy, coke ] =
		await Promise.all([ getPopcorn, getCandy, getCoke  ]);
		console.log(`got ${popcorn}, ${candy}, ${coke}`);

		// error handling - .catch
		let ticket;
		try {
			ticket = await person3PromiseToShowTicketWhenWifeArrives;
		} catch (e) {
			ticket = 'sad face';
		}
		
		return ticket;
	};
	  
	preMovie().then((t) => console.log(`person3 shows ${t}`)); // async functions always return promise
	console.log('person4 shows ticket');
}

function ES2021 () {
	function add (a, b) {
		a = a || 0; // here a is still getting assigned to a
		b || (b = 0); // or
		b ||= 0; // if b is not truthy, then assign 0
		a &&=2 // if a is truthy, then assign 2 to it
		a ??= 0 // if b is either undefined or null, then assign 1 (other falsy values are "", 0, false) - "" +"" = "" in this case
		return a + b;
	}

	// Numeric separator
	let billion = 1_000_000_000; // just a syntactical sugar, can do the same with floating point too
	console.log(billion); // _1_2_3 - will give error
	// numbers always become inpredictable if we define it over 16 digits
	let giant1 = 12345678912345678324;
	console.log(giant1); // 12345678912345678000
	// can use bigInt to avoid this issue
	let giant2 = 123_456_789_123_456_783_24n; // can you use numeric separator here too
	console.log(giant2); //gives bigInt Object

	console.dir(); // shows more info than .log - shows prototype if console.dir(function) which .log wont give
	let bigArrayOfObjects = [];
	console.table(bigArrayOfObjects, ['objectProperty1', 'objectProperty2']); // prints a table of those values as table on console
	console.time('a');
	console.timeEnd('a'); // a is just amessage text, wherever .timeEnd() is used, print the time that it took since .time() is executed
	console.timeEnd('b');
	// debugger; instead of manually setting up debugger points
}

function ES2020 () {
	console.log(window); // window/self/frames/this - gives window object in node.js - use global (window will not work there) 
	console.log(globalThis); // To get window object irrespective of platform
	console.log(x?.profile?.name); // is same as x && x.profile && x.profile.name, same as _.get(x, 'profile.name')
	// BigInt? and why?

	let str1 = 'word1\n' +
	'word2';
	let str2 = `word1
	word2`;

	let one = 1;
	let two = 2;
	let tagged = function (strArray, ...vals) {
		console.log(strArray); // ["adding ", " and ", " give me ", ""]
		console.log(vals); // [1,2,3]
	}
	tagged`adding ${one} and ${two} give me ${one + two}`

	let str3 = String.raw` Not a new line: \n`; //  Not a new line: \n - doesnt escape any characters
	let str4 = String` Not a new line \n`; // Not a new line:
}

function Arrays () {
	/* 
	Array.isArray(), Array.from() - Array constructor methods
	[].splice, [].filter - Array protype methods
	*/
	let a1 = Array.from([ ..."hello" ]); // ['h', 'e', 'l', 'l', 'o']
	let a2 = Array.from([ "hello" ]); // ['h', 'e', 'l', 'l', 'o']
	// array from scratch
	let a3 = Array.from({ length:5 }, (v, i) => v); // [undefined, undefined, undefined, undefined, undefined],
	let a4 = Array.from({ length:5 }, (v, i) => ''); // ['', '', '', '', ''] i - array index
	let a5 = (new Array(5)).fill(0).map((v, i) => i);

	let unique1 = Array.from(new Set([1,1,2])); // [1,2] - Set contains only unique values - removes duplicates
	let unique2 = [...new Set([1,1,2])]; // does the same as above

	let argsFunc = function () {
		console.log(arguments); // argument is an argument object here, not an array, so cannot use argument prototype methods
		console.log(Array.from(arguments)) //  now we can use argument prototype methods
	}
	argsFunc('h', 'e', 'l', 'l', 'o');

	let fa1 = [['a', 'b'], ['c', 'd']];
	console.log(fa1.flat(1)); // arg 1 defines flattening depth level - gives ['a', 'b', 'c', 'd']
	let fa2 = [[1], [1, [[[[1]]]]]];
	console.log(fa2.flat(Infinity)); // in case if I don't know/care about how deep it is, but want to flatten
	let sum = fa2.flat(Infinity).reduce((a,v) => a+v, 0); // gives sum 3

	let nm1 = [1,2,3];
	let nm2 = ['one', 'two', 'three'];
	let numFlatMap1 = nm1.map((v, i) => [v, nm2[i]]); // [[1, 'one'], [2, 'two'], [3, 'three']]
	let numFlatMap2 = nm1.map((v, i) => {v: nm2[i]}); // this wont work, gives [undefined, undefined, undefined]
	let numFlatMap3 = nm1.flatMap((v, i) => [v, nm2[i]]); // [1, 'one', 2, 'two', 3, 'three'] - flats and maps

	console.log(['t', 's', 'e', 'b'].reduceRight((a,v) => a+v)); // best
	let nm3 = [0,1,2,3,4,5,6,7,8,9];
	nm3.copyWithin(0);
	console.log(nm3); // no change
	nm3.copyWithin(1);
	console.log(nm3); // [0,0,1,2,3,4,5,6,7,8] - mutates the array directly
	nm3.copyWithin(0, 3);
	console.log(nm3); // [3,4,5,6,7,8,9,7,8,9]
	nm3.copyWithin(0, 3, 5); // copyStartPoint, copyValueStartPoint, copyValueEndPoint
	console.log(nm3); // [3,4,2,3,4,5,6,7,8,9] - This might be used in Array buffer in Node js

	let a6 = [1,2,3];
	a6[-1] = 4;
	console.log(a6); // [1, 2, 3, -1: 4] - length=3
	let a7 = [];
	a7['a'] = 'a';
	a7['b'] = 'b';
	console.log(a7); // [a: 'a', b: 'b'] - length=0
	for(let key in a7) { console.log(`${key}: ${a7[key]}`)} // they are like objects created using arrays

	console.time('a');
	let a8 = [];
	for(let i=0; i<1000000; i++) {
		a8[i] = i;
	}
	console.timeEnd('a'); // objects are little bit faster than arrays to insert
	
	// Sets - reference data type like arrays
	/* 
	no ordering like arryas, so not arrays, not objects
	useful in doing union, intersect, merge (these will be introduced in future js)
	*/
	let s1 = new Set(); // there is no creation using literal like arrays ([])
	// add, clear, delete, has, size, forEach
	// entries, keys, values - returns a set iterator
	s1.add(1).add(2);
	console.log(new Set("lala")); // accepts only iterable value
	console.log([1,2]);
	console.log(new Set(1)); // gives error
	for(let val of s1) {
		console.log(val);
	}

	let ws1 = new WeakSet([{a:2}]); // needs iterable arg, but cant be iterated - for loop can't be used on this
	// add, delete, has
	ws1.add({a:1}); // can add only objects - removes duplicate here if the reference objects are same
	ws1.add(1); // gives error

	// Maps - we need maps rather arrays to support any object as keys - arrays just gives [object Object] - which can be added only once in a map
	let m1 = new Map({ a:1, b:2 }); // gives error. can't add entries like this in map
	// set, delete(key), clear, entries, get, has, forEach, keys, size
	let m2 = new Map();
	m2.set({}, 'a').set({x:1}, 'b').set({}, 'c'); // will give 3 entries
	let mo = {y:1};
	m2.set(mo, 'a').set({x:1}, 'b').set(mo, 'c'); // a will be overwritten by c
	for(let [key, val] of m2.entries()) { // cant do this in objects
		console.log(key, val);
	}
	let maptoArray = [...m2]; // converts to 2d array

	// weak maps - In actual Maps, once map key is defined, it is held in memory, doesn't get garbage collected even if we delete the key
	{
		let x = {
			a: [1,2]
		};

		var weakMap = new WeakMap();
		weakMap.set(x, 'a');
	}
	console.log(weakMap);
	/* 
	Normal map would give the map with 1 entry - (it shouldnt technically since x scope is not defined outside)
	WeakMap - if we try in same browser, replacing Map with WeakMap - it would still have that entry - because x was not garbage collected,
	it will stays there until console  refreshed or you forcefully delete it from map. If it is tried as WeakMap directly, weakMap will not have entries 
	Usage for object as keys in map - Lets say you are tracking all the api responses and
	how many times each different response comes back you do that by adding it to a map as a key and
    value can be a number that you increment
	*/

}

function ES2015 () {
	// Pass by value, pass by reference - JS always passes by reference
	let a = 1;
	let b = {x:1};

	let change = (val) => {
		val = 2; // actually passed by ref, but reassignment loses the reference, create a new var in this scope - can't mutate primitive type, can only reassign
		val.x = 1; // changes b.x - this is mutating.
	}
	change(a);
	console.log(a); // 1 

	let add = ({a=0, b=0} = {}) => { // default params for object
		return a + b;
	} 
	console.log(add());

	// Spread operator 
	// concat purposes, insert 1 array into another
	let arr1 = [1,2,3];
	let arr2 = [4,5,6];
	a.push(...b); // this wasn't possible before - need to do this - Array.prototype.push.apply(arr1, arr2)
	Math.min(...arr1); // don't have to type every number in array in comma separated values
	let arr3 = [...arr1]; // cloning array, similar to Object.assign([], arr1)
	var f1 = function (a,b,c, ...n) { // this arg format cannot be done with arguments
		let args1 = Array.prototype.slice.call(arguments, 0); // using array methods on arguments without converting them to array
		let args2 = [].slice.call(arguments, 0);
	}
	f1(1,2,3,4);

	// iife - immediately invoked function expression - can be used if it needs to be invoked only once
	// useful in writing libraries
	(function ($) {
		// iife are closures that helps establish private methods while still exposing some properties for later use
		// $ is available only in this scope, code is bit faster global object is made available in local as $
		$(this).addClass('myClass'); 
	})(window.JQuery)

	var counter = (function () {
		var i=0;
		return {
			get: () => i,
			set: (val) => i=val,
			increment: () => i++
		}
	})();

	console.log(counter.get()); // i is not availble outside, persist the variable inside

	// arrow function
	let a1 = a => a;
	let a2 = function () {
		this.val = 1;
		setTimeout(() => {
			this.val++; // parent's scope this. we shouldn't use arrow function if we need current function's scope
		})
	};
	let a3 = (...n) => { // soln to argument[0] issue
		console.log(arguments[0]); // will give event object, not 1. gives 1 in normal syntax
		console.log(n[0])
	}
	a3(1,2,3)
}

function JSConcepts () {
	// call, bind, apply - lets you borrow functionalities from other context
	{
		var obj = { num: 1 };
		var addToThis = function (a,b,c) {
			return this.num + a + b + c;
		}
		addToThis.call(obj, 1,);
		addToThis.apply(obj, [1,2,3]);

		let bound = addToThis.bind(obj); // in cases using that = this, directly bind the function with this
		bound(1);
	}

	// Closures
	{
		let i = 1;
		const f1 = () => {
			console.log(i);
		}
		console.dir(f1); // under scopes: i - script

		let f2;
		if (true) {
			let i = 1;
			f2 = () => {
				console.log(i);
			}
		}
		console.dir(f2); // under scopes: i - block scope

		let f3 = () => {
			let i = 1;
			return () => {
				console.log(i);
			}
		}
		console.dir(f3()); // under scopes: i - Closure

		for(let j=0; j<3; j++) {
			setTimeout(() => {
				console.log(j);
			}, 1000);
		}
		/* 1,2,3
		j=0 f(c:j(0))
		j=1 f(c:j(1))
		j=2 f(c:j(2))
		*/
		for(var j=0; j<3; j++) {
			setTimeout(() => {
				console.log(j);
			}, 1000);
		}
		/* 3,,3,3
		j=0 f(c:j(3)) - value changes in iteration, updates the closure since j is in function scope
		j=1 f(c:j(3))
		j=2 f(c:j(3))
		*/
		for(var j=0; j<3; j++) {
			((j) => {
				setTimeout(() => {
					console.log(j);
				}, 1000);
			})(j);
		}
		/* 1,2,3
		this works because iife creates a block scope for a function/global scope variable
		*/
	}

	// Chaining
	{
		var opObj = function () {
			this.i = 0;
			this.add = function (j) {
				this.i += j;
				return this;
			}
			this.subtract = function (j) {
				this.i -= j;
				return this;
			}
			this.print = function () {
				console.log(this.i)
			}
		}
	
		let op1 = new opObj();
		op1.add(1).subtract(1).print();
	
		// function chaining in a closure
		var opObj = function () {
			var i = 0;
			var add = function (j) {
				i += j;
				return this;
			}
			var subtract = function (j) {
				i -= j;
				return this;
			}
			var print = function () {
				console.log(i)
			}
			return { add:add, subtract:subtract, print:print };
		}
	
		let op2 = opObj();
		op2.add(1).subtract(1).print();
	}

	// Currying - js is functional lang, it doesn't provide native implementation of currying - we use closures to implement currying functions
	{
		var avg = function (...n) {
			let tot = 0;
			for(let i=0; i<n.length; i++) {
				tot += n[i];
			}
			return tot/n.length;
		}
		var spiceUp = function(fn, ...n) {
			return function (...m) {
				fn.apply(n.concat(m));
			}
		}
		var doAvg = spiceUp(avg, 1,2,3);
		console.log(doAvg(4,5,6)); // you dont have to do avg for the numbers form first when you see new number to be averaged too
	
		var sayWhat = function (a) {
			return function (b) {
				return function (c) {
					console.log("saying " + a + " to " + b + " using " + c);
				}
			}
		}
		sayWhat('a')('b')('c');
		var sayHi = sayWhat('hi');
		var sayHiToMe = sayHi('me');
		var sayHiToMeUsingNothing = sayHiToMe('nothing');
		// when we have mutliple instructions to perform.
	}

	// Debounce
	{
		/* 
		say when buy button is clicked twice by mistake - order shouldn't be placed twice.
		Debounce lets you perform the function for the last click alone, if you keep clicking on a button. Eg: move move, scroll events
		executes only once
		*/
		const debounce = (fn, delay) => {
			let timeoutId;
			return function (...args) {
				if (timeoutId) {
					clearTimeout(timeoutId);
				}
				timeoutId = setTimeout(() => {
					fn(...args)
				}, delay);
			};
		}

		document.getElementById('btn').addEventListener('click', debounce(e => {
			console.log('clicked');
		}, 2000));
	}

	// Throttling
	{
		/* 
		similar to debounce. both avoid unncessary events to be fired. executes in intervals
		can't use setInterval because that just doesn't end (I think...)
		*/

		const throttle = (fn, delay) => {
			let last;
			return function (...args) {
				let now = new Date().getTime();
				if (now - last < delay) {
					return;
				}
				last = now;
				return fn(...args);
			};
		}

		document.getElementById('btn').addEventListener('click', throttle(e => {
			console.log('you clicked me');
		}, 2000));
	}
	
}

function Class () {
	// typeof(class) is function
	// A JavaScript class is a blueprint for creating objects. A class encapsulates data and functions that manipulate data.
	// syntactic sugar over the prototypal inheritance.
	class Car {
		constructor (color) {
			this.color = color;
		}

		drive () {
			console.log('driving');
		}

		// For pure functions
		static comparePrice (car1, car2) {
			console.dir(this); // this directly gives the Car class
			// doesnt use this to access properties,
			// these are not to manipulate props but, are used as utility functions
			return Math.abs(car1.price - car2.price);
		}
	}
	console.log(Car); // class Car, static method under class, under prototype - constructor - Class Car, drive

	// static methods are called directly on class, normal(instance) methods are called on a instance of class
	console.log(Car.comparePrice(car1, car2)); 
	let redCar = new Car('red'); // object with color property and in __proto__ - has prototype methods, can't see static method here

	let Car = (function () {
		let _car = function(color) {
			this.color = color;
		}

		_car.prototype.drive = function () {
			console.log('driving');
		}
		return _car;
	})();
	console.log(Car); // function _car, under prototype: drive, constructor - function (color)
	let blueCar = new Car('blue'); // object with color property and in __proto__ - has prototype methods

	// Sub classes
	class Mammal {
		// if constructor is explicitly defined, it creates a default empty constructor
		constructor (_legs, _name="jane doe") {
			this.legs = _legs;
			this.name = _name;
			this.warmBlooded = true;
			// Object.assign(this, {a, b, c, d, e}); // when there are more args
			console.log(new.target); // gives the Bat extends Mammal class
			console.log(new.target.name); // Bat (inheriting class)

		}
		walk () {
			return `${this.name} is walking`;
		}
		static livesOn (mammal) {
			return `${mammal.name} lives on land`;
		}
	}
	class Bat extends Mammal {
		constructor (_legs, _name, _eatsMeat) { // constructor(f, ...args)
			//  will give error without super constructor when we extend
			super(_legs, _name); // super(...args); this.f = f;
			this.eatsMeat = _eatsMeat;
		}
		fly () {
			return `${this.name} is flying`;
		}
		walk () {
			let holding = this.eatsMeat ? 'bug' : 'carrot';
			return `${super.walk()} with a ${holding}`;
		}
		static livesOn (bat) {
			return `This ${bat.eatsMeat?'non-veg':'veg'} bat, ${super.livesOn(bat)}`
		}
	}
	let fruitBat = new Bat(4, 'lala', false);
	console.log(fruitBat); // object with legs, name, warmBlooded, eatsMeat properties

	// Decorators - eg: module decorator, component decorator
	let lipstick = function (color) {
		return function (target) {
			target.lips = color;
		}
	}
	let earings = function (target) {
		target.hasEarings = true;
	}
	let readOnly = function (target, key, descriptor) {
		descriptor.writable = false;
		return descriptor;
	}

	@earings
	@lipstick('black') // currently works only with transpilers like babel
	class Girl {
		constructor(color) {
			this.color = color;
		}
		@readOnly
		getColor () {
			return this.color;
		}
	}
	console.log(`Her lips are ${Girl.lips} and she has earrings = ${Girl.hasEarings}`);

	let newGirl = new Girl ('pink');
	newGirl.getColor = function () { return 'dasd' }; // js lets you overwrite everything (without decorators)
	/* // to avoid this, move the getColor function out of class and define like below, so that even when tried to overwrite, will not get overwritten.
	Object.defineProperty(Girl.prototype, 'getColor', {
		value: function () { return this.color; },
		writable: false,
		configurable: true,
		enumerable: true
	});

	// making it easy and generic
	let descriptor = {
		value: function () { return this.color; },
		writable: false,
		configurable: true,
		enumerable: true
	};
	let readOnly = function (target, key, descriptor) {
		descriptor.writable = false;
		return descriptor;
	}
	descriptor = readOnly (Car.prototype, 'getColor', descriptor) || descriptor; 
	Object.defineProperty(Girl.prototype, 'getColor', descriptor) */
}

function loops () {
	// recursion keeps browser stack size growing. so better to avoid
	/* 
	A JavaScript Symbol is a primitive datatype just like Number, String, or Boolean.
	It represents a unique "hidden" identifier that no other code can accidentally access.
	For instance, if different coders want to add a person.id property to a person object belonging to a third-party code, they could mix each others values.
	Symbol.iterator is present in prototype of all iterable objects (present for array,sets,maps(for ...of works in these but not in objects) but not for object(only for in works, that too object keys))
	*/

	let myArray = [1,2,3,4,5];
	let iterator = myArray[Symbol.iterator]();

	console.log(iterator.next()); // {value:1, done:false} after 5 times, 6th time, {value:undefined, done:true}

	// these iterators are useful when used in combination with generators

	function *generator() {
		yield 1;
		yield 2;
		yield 3;
		return 'helo'; // stops here, when next() called for 5th time, gives {value:undefined, done:true}
		yield 4;
	}
	// even yield is written with async calls, after data for async call1 is received, then only next yield is executed

	let iterator1 = generator();
	console.log(iterator1.next()); // behaves the same as above

	function *anotherGenerator() {
		yield 1;
	}
	function *infiniteMaker() {
		let i=0;
		yield* anotherGenerator(); // call another from one generator
		while(true) {
			yield i;
			i++;
		}
	}
	let iterator2 = infiniteMaker();
	console.log(iterator2.next()); // it calls yield only when next is called. otherwise, browser gives stackoverflow error
}

function OOPS () {
	let Car = function (color) {
		/* 
		if new is missed, it becomes normal function call and returns undefined and this adds color property to window object. 
		if you wanna restrict that, add use strict
		If file uses use strict, then when fn is called without new, it throws error. we can self define that error like this
		*/
		if (!new.target) throw 'Car() must be called with new';
		this.color = color; 
	}
	/* 
	all properties are public properties in constructor. no private properties concept, but can create that using closures (setters, getters)
	*/
	let Car1 = function (_color) {
		this.setColor = function () {
			_color = color;
		}
		// this comes under __proto__ eventhough it is defined under constructor. (it'll be there under constructor too)
		this.getColor = function () {
			return _color;
		}
	}
	let redCar = new Car('red');

	/* 
	every constructor has a property called prototype
	When we extend in class, it copies every method from base class to sub class,
	here, it basically sets reference for sub constructor from base constructor. Its prototype reference, so you don't need to copy anything
	helps to extend prototype methods
	*/
	const toycar = function () {};
	toycar.prototype = Object.create(Car.prototype);
	
	Object.create(null); // no proto, will not have object prototype methods
	console.dir(redCar instanceof Car);
	console.dir(Car.prototype.isPrototypeOf(redCar));

	// extending the constructor itself
	const mytoycar = function (color, [price]) {
		Car.call(this, color);
		this.price = price;
	};
	console.log(mytoycar); // constructor pointed properly
	mytoycar.prototype = Object.create(Car.prototype); // helps to extend prototype methods
	console.log(mytoycar); // constructor will be lost here as it will point to Car. To avoid this, set its constructor back after prototype is extended.
	mytoycar.prototype.constructor = mytoycar;

	// ES2015 eases this prototype copying in 2 ways - Object.setPrototypeOf, Object.assign
	let toyota = {
		drive() {
			return 'driving toyota';
		}
	};
	let camry = {
		drive() {
			return `${super.drive}`;
		}
	}
	Object.setPrototypeOf(camry, toyota); // desObj, srcObj
	// keeps owndrive method, needs super to access its proto's drive method
	// camry.__proto__ = toyota; - works, but not recommended to use

	Object.assign(camry, toyota);
	console.log(camry.drive()); // 'driving toyota' as it overwrites are actually
	let copyObj = Object.assign({}, toyota); // shallow copy, doesn't copy its proto

	// Factory functions are functions that return a new object with props and methods, an alternative to function constructors, without defining props, methods in this context
	function createPerson(firstName, lastName) {
	return {
		firstName: firstName,
		lastName: lastName,
		getFullName() {
		return firstName + ' ' + lastName;
		},
	};
	}
	
	let person1 = createPerson('John', 'Doe');
	let person2 = createPerson('Jane', 'Doe');
	
	console.log(person1.getFullName());
	console.log(person2.getFullName());

	// Factory function with a closure
	let Car = function(color) {
		let moving = false;
		return Object.assign({}, {
			color:color,
			drive() {
				moving = true;
				return this;
			},
			isMoving() {
				return moving;
			}
		})
	};
	let redCar = Car('red');
	console.log(redCar.drive().isMoving());

	// Funtion mixins are factory funtions that takes an object as an arg, copy the methods inside the mixin into this object and returns a new object
	const humanFactory = function(obj) {
		let isCrying = false;
		return Object.assign({}, obj, {
			cry() {
				isCrying = true;
				return this;
			},
			isCrying() {
				return isCrying;
			}
		});
	}

	const flyFactory = function (obj) {
		let isFlying = false;
		return Object.assign({}, obj, {
			fly() {
				isFlying = true;
				return this;
			},
			isFlying() {
				return isFlying;
			}
		});
	}

	const superman = humanFactory(flyFactory({}));
	superman.fly().cry(); // chaining
	console.log(superman.isCrying()); // true
}