// ---------- ES5 ----------
// var testModule = require("./testModule");
// ---------- ES6 ----------
import testModule from "./testModule";
// // ---------- ES6 (child modules) ----------
import { a, b } from "./testModule";
console.log(a);
console.log(b);
