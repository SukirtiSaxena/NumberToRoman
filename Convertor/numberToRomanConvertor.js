
// Roman Numerals Kata using Test-Driven Development
const key = {
   M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
};

const convertNormalToRoman = num => {
   if (num === undefined) throw new Error("Number is required");
   if (num === 0) return "nulla";
   if (!Number.isInteger(num)) return "Not a number";
   if (num > 3000) return "Too big number!!";

   let Roman = "";
   for (let i of Object.keys(key)) {
      Roman += i.repeat(Math.floor(num / key[i]));
      num = num % key[i];
   };
   return Roman;
};

const convertRomanToNormal = R => {
   let Num = 0;
   for (let j = 0; j < R.length; j++)
      key[R[j]] < key[R[j + 1]] ? Num -= key[R[j]] : Num += key[R[j]];
   return Num;
};

module.exports = {
   convertNormalToRoman,
   convertRomanToNormal
};