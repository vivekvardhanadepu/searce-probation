3 + 4;
43 - 1;

!false;

3.0 == 3;

3.0 === 3;
4 < 3;

true || false;
typeof 3;
typeof 3.0;
typeof 'hello';

typeof undefined;

typeof null;

typeof [1, 2, 3];

typeof { age: 39 };

typeof true;

typeof 'hello';

var h = 'kyle';

console.log(h);

var age;
age = 3;

var friends = ['buddu', 'go', 'all ways'];

console.log(friends.length);
friends.length;

friends[1];

age++;

age;

age += 2;

age = age + age * 2;

if (!age > 10) {
  console.log('greater');
} else {
  console.log('lesser');
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

var temp = 'hello';
var temp2 = temp / 2;
temp2; // NaN signifies invalid arithmetic operation
Number.isNaN(temp2);
Number.isNaN(temp);
var something = temp / 'hello';

Number.isNaN(something);

new Number();

new String();

new Boolean();
var bool = new Boolean();

typeof bool;

String(3.2);

var string_obj = new String();

var yesterday = new Date('2021 July 30');

yesterday.toUTCString();

console.log('hello ' + String(16) + ' world');

/* in + operation, if one operand is a string, then every other operand is 
converted to a string */

console.log(`hello ${age + ''}`);

function addAStudent(numStudents) {
  return numStudents + 1;
}

addAStudent(Number(temp));

addAStudent(Number('11'));

Boolean('');

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

var teacher = 'kyle';

function otherClass() {
  teacher = 'suzy';
  topic = 'hell ya';
  console.log('welcome');
}

otherClass();

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
var teacher = 'kyle';
(function anotherTeacher() {
  var teacher = 'suzy';
  console.log(teacher);
})();
teacher;

// let - alternative to block scoping
{
  let teacher = 'suzy';
  console.log(teacher);
}
teacher;

function ask1(question) {
  setTimeout(function waitASec() {
    console.log(question);
  }, 1);
}
ask1('what are you?');

function ask(question) {
  return function waitASec() {
    console.log(question);
  };
}

var askFunc = ask('hellooooooo');

askFunc();

// this
var workshop = {
  teacher: 'kyle:',
  ask(question) {
    console.log(this.teacher, question);
  },
};

workshop.ask('what is this keyword?');

function anotherAsk(question) {
  console.log(this.teache, question);
}

function otherFunc() {
  var context = { teache: 'kyle' };
  anotherAsk.call(context, 'Why?');
}

anotherAsk();
otherFunc();

function thisFunc(t) {
  this.t = t;
}

thisFunc.prototype.ask = function (question) {
  console.log(this.t, question);
};

deep = new thisFunc('this is');
react = new thisFunc('kells');

deep.ask('what?');
react.ask('How?');

class Workshop {
  constructor(t) {
    this.t = t;
  }
  ask(question) {
    console.log(this.t, question);
  }
}

deep = new Workshop('this is');
react = new Workshop('kells');

deep.ask('what?');
react.ask('How?');
