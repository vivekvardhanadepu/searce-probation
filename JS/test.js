3 + 4;
43 - 1;

!false;

3.0 == 3;

3.0 === 3;
4 < 3;

true || false;
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

v = Symbol();
typeof v;

v = null;
typeof v;

v = function () {};
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

var foo = { a: 42 };
// create `bar` and link it to `foo`
var bar = Object.create(foo);
bar.b = "hello world";
bar.b; // "hello world"
bar.a; // 42 <-- delegated to `foo`

if (!Number.isNaN) {
  Number.isNaN = function isNaN(x) {
    return x !== x;
  };
}

isNaN(NaN);

isnan = isNaN;

NaN !== NaN;

// ES6
function foo1(a = 2) {
  console.log(a);
}
foo1(); // 2
foo1(42); // 42

// ES5
/* caveat: you cannot pass undefined as value, which is pretty evident here, but not 
in ES6*/
function foo1() {
  var a = arguments[0] !== void 0 ? arguments[0] : 2;
  console.log(a);
}

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
