// var testModule = { a: 1, b: 2 };
// ---------- ES5 ----------
// module.exports = testModule;
// ---------- ES6 ----------
export default function (x, y) {
  return x + y;
}
// ---------- ES6 (child modules) ----------
const a = 1;
const b = 2;
