// ---------- ES5 ----------
// var testModule = require("./testModule");
// ---------- ES6 ----------
import * as testModule from "./testModule.mjs";
// // ---------- ES6 (child modules) ----------
// import { a, b } from "./testModule";
// console.log(a);
// console.log(b);
console.log(testModule.default(1, 2));
