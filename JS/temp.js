var obj1 = { a: 1, b: 2 };
var obj2 = { c: 3, d: 4 };
var obj3 = { ...obj1, ...obj2 };

var { a, b } = obj1;
console.log(obj3);
console.log(a);
console.log(b);
var [c, d] = [0, 1];

console.log(c);
console.log(d);
