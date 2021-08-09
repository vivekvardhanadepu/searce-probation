3 + 4;
43 - 1;

!false;

3.0 == 3;

3.0 === 3;
4 < 3;

true || false;
2 | 3;

typeof 3;
typeof 3.0;
typeof "hello";

typeof undefined;

typeof null;

typeof [1, 2, 3];

typeof { age: 39 };

typeof true;

typeof "hello";

var h = "kyle";

console.log(h);

var age;
age = 3;

var friends = ["buddu", "go", "all ways"];

console.log(friends.length);
friends.length;

friends[1];

age++;

age;

age += 2;

age = age + age * 2;

if (!age > 10) {
  console.log("greater");
} else {
  console.log("lesser");
}

for (let i = 0; i < friends.length; i++) {
  console.log(`Hii ${friends[i]}`);
}

for (let friend of friends) {
  console.log(`Hii ${friend}`);
}

while (friends.length > 0) {
  let friend = friends.pop();
  console.log(`Hii ${friend}`);
}
friends;

var v;
console.log(v);
typeof v;
typeof undeclared;

v = null;
typeof v;

v = function () {};
var func_constructor = new Function("arg1", "arg2", "console.log ('Renu')");
typeof v;

var temp = "hello";
var temp2 = temp / 2;
temp2; // NaN signifies invalid arithmetic operation
Number.isNaN(temp2);
Number.isNaN(temp);
var something = temp / "hello";

Number.isNaN(something);

new Number();

new String();

new Boolean();
var bool = new Boolean();

typeof bool;

String(3.2);

var string_obj = new String();

var yesterday = new Date("2021 July 30");

yesterday.toUTCString();

console.log("hello " + String(16) + " world");

/* in + operation, if one operand is a string, then every other operand is 
converted to a string */

console.log(`hello ${age + ""}`);

function addAStudent(numStudents) {
  return numStudents + 1;
}

addAStudent(Number(temp));

addAStudent(Number("11"));

Boolean("");

Boolean(0);

Boolean(0.0);

Boolean(-0);

Boolean(null);

Boolean(NaN);

Boolean(undefined);

Boolean(function () {});

Boolean(-1);

var temp = -1;

!!temp;

temp;

// '==' allows coercion while '===' doesn't

var und = null;

var undef;

if (
  (und === null || und === undefined) &&
  (undef === null || undef === undefined)
)
  console.log(`hello`);

if (und == null && undef == null) console.log(`hello`);

var teacher = "kyle";

function otherClass() {
  teacher = "suzy";
  topic = "hell ya";
  console.log("welcome");
}

otherClass();

var str = new Function("arg1", "arg2", "console.log ('Renu')");

teacher;

topic;

var clickHandler = function () {
  // Anonymous function expression
};

var keyHandler = function keyHandler() {
  // named function expression};
};

// IIFE: to temporarily declare the same variable respecting the global variable
// Immediately invoked function expressions
var teacher = "kyle";
(function anotherTeacher() {
  var teacher = "suzy";
  console.log(teacher);
})();
teacher;

// let - alternative to block scoping
{
  let teacher = "suzy";
  console.log(teacher);
}
teacher;

function ask1(question) {
  setTimeout(function waitASec() {
    console.log(question);
  }, 1);
}
ask1("what are you?");

function ask(question) {
  return function waitASec() {
    console.log(question);
  };
}

var askFunc = ask("hellooooooo");

askFunc();

// this
var workshop = {
  teacher: "kyle:",
  ask(question) {
    console.log(this.teacher, question);
  },
};

workshop.ask("what is this keyword?");

function anotherAsk(question) {
  console.log(this.teache, question);
}

function otherFunc() {
  var context = { teache: "kyle" };
  anotherAsk.call(context, "Why?");
}

anotherAsk();
otherFunc();

function thisFunc(t) {
  this.t = t;
}

thisFunc.prototype.ask = function (question) {
  console.log(this.t, question);
};

deep = new thisFunc("this is");
react = new thisFunc("kells");

deep.ask("what?");
react.ask("How?");

class Workshop {
  constructor(t) {
    this.t = t;
  }
  ask(question) {
    console.log(this.t, question);
  }
}

deep = new Workshop("this is");
react = new Workshop("kells");

deep.ask("what?");
react.ask("How?");

//age = prompt('what is your age?');
var ab = "strig";
typeof ab;
ab.toUpperCase();

var b = 3.1457;

b.toFixed(2);

3 == "3.0";

a = [91, 2, 30];
b = [91, 2, 30];
c = "91,2,30";

a == b;
a == c;
b == c;

var a = 41;
var b = "42";
var c = "43";
var d = "foo";
a < b;
b < c;
a < d;
a > d;
a == d;

switch (a) {
  case 2:
    // do something
    console.log("hello2");
    break;
  case 10:
    // do another thing
    console.log("hello10");
    break;
  case 42:
    // do yet another thing
    console.log("hello42");
    break;
  default:
    // fallback to here
    console.log("default");
}

var a = 42;
var b = a > 41 ? "hello" : "world";

b;

function test_strict() {
  "use strict";
  // alpha = 3;
}

test_strict();

function foo() {
  console.log(this.bar);
}
var bar = "global";
var obj1 = { bar: "obj1", foo: foo };
var obj2 = { bar: "obj2" };
var obj3 = { bar: "obj3" };

foo();

obj1.foo();

foo.call(obj2);

obj1.foo.call(obj2, obj3);

obj1.foo.call(obj3, obj2);

//var foo = { a: 42 };
// create `bar` and link it to `foo`
var bar = Object.create(foo);
bar.b = "hello world";
bar.b; // "hello world"
bar.a; // 42 <-- delegated to `ifoo`

if (!Number.isNaN) {
  Number.isNaN = function isNaN(x) {
    return x !== x;
  };
}

isNaN(NaN);

isnan = isNaN;

NaN !== NaN;

// ---------------- ES5 ----------
var num = 0; // num is globally scoped
for (var i = 0; i < 5; i++) {
  num += i;
}
console.log(num); // 0 + 1 + 2 + 3 + 4 = 10
console.log(i); // undefined

// ---------- ES6 ----------
var num = 0; // num is globally scoped
for (let i = 0; i < 5; i++) {
  // i is block scoped
  num += i;
}
console.log(num); // 0 + 1 + 2 + 3 + 4 = 10
console.log(i); // undefined

// ES6
function foo1(a = 2) {
  console.log(a);
}
foo1(); // 2
foo1(42); // 42

// ES5
/* caveat: you cannot pass undefined as value, which is pretty evident here, but not 
in ES6*/
function foo12() {
  var a = arguments[0] !== void 0 ? arguments[0] : 2;
  console.log(a);
}

var obj1 = { a: 1, b: 2 };
// ---------- ES5 ----------
var a = obj1.a;
a;
var b = obj1.b;
b;
// ---------- ES6 ----------
// var {a, b} = obj1;

var a = 1;
var b = 2;
// ---------- ES5 ----------
var obj1 = { a: a, b: b };
obj1;
// ---------- ES6 ----------
var obj1 = { a, b };
obj1;

/*var [a,b,c,d] = [0,1,2,3];
a
b*/

var obj1 = { a: 1, b: 2 };
var obj2 = { c: 3, d: 4 };
// ---------- ES5 ----------
var obj3 = Object.assign(obj1, obj2);
// ---------- ES6 ----------
var obj3 = { ...obj1, ...obj2 };

//foo1(undefined)

typeof null;

typeof undefined;

function getNum() {
  return 10;
}
getNum();
const getNum_arrow = (radius = 2) => radius * 10;
getNum_arrow();

// ES5
function getObj() {
  return { a: 1, b: 2, c: 3 };
}
getObj();
// ---------- ES6 ----------
// Note the () to differentiate with actual code block
const getObj_arrow = () => ({ a: 1, b: 2, c: 3 });

getObj_arrow();

// ---------- ES5 ----------
function calcCircleArea(radius) {
  if (!radius) {
    return null;
  } else {
    return Math.PI * radius * radius;
  }
}

calcCircleArea(2);

// ---------- ES6 ----------
const calcCircleAreaArrow = (radius) => {
  if (!radius) {
    return null;
  } else {
    return Math.PI * radius * radius;
  }
};

calcCircleAreaArrow(2);

v = Symbol();
typeof v;
console.log(v);

function foo5() {
  function bar(a) {
    j = 3; // changing the `i` in the enclosing scope's
    // for-loop
    console.log(a + j);
  }
  for (var i = 0; i < 10; i++) {
    bar(i * 2); // oops, inifinite loop ahead!
  }
}
foo5();
var abc = 2;
(function IIFE(global) {
  var a = 3;
  console.log(a); // 3
  console.log(global.a); // 2
})(window);
console.log(abc);

try {
  undefined(); // illegal operation to force an exception!
} catch (err) {
  var abcd = 1;
  console.log(err); // works!
}
//console.log(err);
{
  console.log(bar); // ReferenceError!
  //let bar = 2;
}

a = 2;

var a;

console.log(a);

cd = 23;

console.log(cd);

var cd;

for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}

for (var i = 1; i <= 5; i++) {
  (function () {
    var j = i;
    setTimeout(function timer() {
      console.log(j);
    }, j * 1000);
  })();
}

for (var i = 1; i <= 5; i++) {
  let j = i; // yay, block-scope for closure!
  setTimeout(function timer() {
    console.log(j);
  }, j * 1000);
}

for (var i = 1; i <= 5; i++) {
  var j = i; // yay, block-scope for closure!
  setTimeout(function timer() {
    console.log(j);
  }, j * 1000);
}

for (let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}
{
  try {
    throw undefined;
  } catch (a) {
    a = 31;
    console.log(a);
  }
}

/*console.log(a);
let (a = 32) {
	console.log( a ); // 2
};

console.log( a ); // ReferenceError*/

var obj = {
  count: 0,
  cool: function coolFn() {
    var self = this;

    if (self.count < 1) {
      setTimeout(function timer() {
        self.count++;
        console.log("awesome?");
      }, 100);
    }
  },
};

obj.cool(); // awesome?

function foo2(num) {
  console.log("foo: " + num);

  // keep track of how many times `foo` is called
  foo2.count++;
}

foo2.count = 0;

var i;

for (i = 0; i < 10; i++) {
  if (i > 5) {
    foo2(i);
  }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// how many times was `foo` called?
console.log(foo2.count); // 4

/*function foo() {
	var a = 2;
	this.bar();
}

function bar() {
	console.log( this.a );
}

foo(); //undefined*/

function hello() {
  console.log(this.hello_msg);
}

hello_msg = "hello this";

hello();

function foo3() {
  //"use strict";

  console.log(this.a);
}

var a = 2;

foo3(); // TypeError: `this` is `undefined`

function foo4() {
  console.log(this.a);
}

var a = 35;

(function () {
  "use strict";

  foo4(); // 2
})();

function foo() {
  console.log(this.a);
}

var obj = {
  a: 25,
  foo: foo,
};

obj.foo(); // 2

function foo() {
  console.log(this.a);
}

var obj2 = {
  a: 42,
  foo: foo,
};

var obj1 = {
  a: 2,
  obj2: obj2,
};

obj1.obj2.foo(); // 42

function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo,
};

var bar = obj.foo; // function reference/alias!

var a = "oops, global"; // `a` also property on global object

bar(); // "oops, global"

function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo,
};

var a = "oops, global"; // `a` also property on global object

setTimeout(obj.foo, 100); // "oops, global"

function foo() {
  console.log(this.a);
}

var obj = {
  a: 23,
};

foo.call(obj); // 2

function foo() {
	console.log( this.a );
}

var obj = {
	a: 2
};

var bar = function() {
	foo.call( obj );
};

bar(); // 2
setTimeout( bar, 100 ); // 2

// `bar` hard binds `foo`'s `this` to `obj`
// so that it cannot be overriden
bar.call( window ); // 2


function foo(something) {
	console.log( this.a, something );
	return this.a + something;
}

var obj = {
	a: 2
};

var bar = function() {
	return foo.apply( obj, arguments );
};

var b = bar( 32 ); // 2 3
console.log( b ); // 5

function foo(something) {
	console.log( this.a, something );
	return this.a + something;
}

// simple `bind` helper
function bind(fn, obj) {
	return function() {
		return fn.apply( obj, arguments );
	};
}

var obj = {
	a: 2
};

var bar = bind( foo, obj );

var b = bar( 3 ); // 2 3
console.log( b ); // 5


function foo(something) {
	console.log( this.a, something );
	return this.a + something;
}

var obj = {
	a: 2
};

var bar = foo.bind( obj );

var b = bar( 3 ); // 2 3
console.log( b ); // 5
bar.name

function foo(el) {
	console.log( el, this.id );
}

var obj = {
	id: "awesome"
};

// use `obj` as `this` for `foo(..)` calls
[1, 2, 3].forEach( foo, obj ); // 1 awesome  2 awesome  3 awesome

function foo(a) {
	this.a = a;
}

var bar = new foo( 2 );
console.log( bar.a ); // 2

function foo(something) {
	this.a = something;
}

var obj1 = {
	foo: foo
};

var obj2 = {};

obj1.foo( 2 );
console.log( obj1.a ); // 2

obj1.foo.call( obj2, 3 );
console.log( obj2.a ); // 3

var bar = new obj1.foo( 4 );
console.log( obj1.a ); // 2
console.log( bar.a ); // 4

function foo() {
	console.log( this.a );
}

var a = 2;

foo.call( null ); // 2

function foo(a,b) {
	console.log( "a:" + a + ", b:" + b );
}

// spreading out array as parameters
foo.apply( null, [2, 3] ); // a:2, b:3

// currying with `bind(..)`
var bar = foo.bind( null, 2 );
bar( 3 ); // a:2, b:3

function foo(a,b) {
	console.log( "a:" + a + ", b:" + b );
}

// our DMZ empty object
var ø = Object.create( null );

// spreading out array as parameters
foo.apply( ø, [2, 3] ); // a:2, b:3

// currying with `bind(..)`
var bar = foo.bind( ø, 2 );
bar( 3 ); // a:2, b:3

function foo() {
	console.log( this.a );
}

var a = 2;
var o = { a: 3, foo: foo };
var p = { a: 4 };

o.foo(); // 3
(p.foo = o.foo)(); // 2

if (!Function.prototype.softBind) {
	Function.prototype.softBind = function(obj) {
		var fn = this,
			curried = [].slice.call( arguments, 1 ),
			bound = function bound() {
				return fn.apply(
					(!this ||
						(typeof window !== "undefined" &&
							this === window) ||
						(typeof global !== "undefined" &&
							this === global)
					) ? obj : this,
					curried.concat.apply( curried, arguments )
				);
			};
		bound.prototype = Object.create( fn.prototype );
		return bound;
	};
}

function foo() {
   console.log("name: " + this.name);
}

var obj = { name: "obj" },
    obj2 = { name: "obj2" },
    obj3 = { name: "obj3" };

var fooOBJ = foo.softBind( obj );

fooOBJ(); // name: obj

obj2.foo = foo.softBind(obj);
obj2.foo(); // name: obj2   <---- look!!!

fooOBJ.call( obj3 ); // name: obj3   <---- look!

setTimeout( obj2.foo, 10 ); // name: obj   <---- falls back to soft-binding

/*function foo() {
	// return an arrow function
	return (a) => {
		// `this` here is lexically adopted from `foo()`
		console.log( this.a );
	};
}*/

var obj1 = {
	a: 2
};

var obj2 = {
	a: 3
};

//var bar = foo.call( obj1 );
bar.call( obj2 ); // 2, not 3!

var cde;
cdc = cde+"undefine"
cdc


// Setup
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if(value){
    if(prop==="tracks"){
      if(records[id].hasOwnProperty("tracks")){
        records[id].tracks.push(value);
      }
      else{
        records[id].tracks = [value];
      }
    }
    else{
      records[id][prop] = value;
    }
  }
  else{
    delete recordCollection[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
updateRecords(recordCollection, 2548, "artist", "");

/*let variable = "hello";
let variable = "world"; // throws error */
const [a1,b2,...arr3] = [1,2,3,4,5,6,7,8,9]
arr3