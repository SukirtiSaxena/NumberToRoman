
// Roman Numerals Kata using Test-Driven Development
const key = {
   M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
};

const convertNormalToRoman = num => {
   if (num === undefined) throw new Error("Number is required");
   if (num === 0) return "nulla";
   if (!Number.isInteger(num)) return "Not a number";
   if (num > 3000) return "Too big number!!";

   let romanNbr = "";
   for (let i of Object.keys(key)) {
      romanNbr += i.repeat(Math.floor(num / key[i]));
      num = num % key[i];
   };
   return romanNbr;
};

const convertRomanToNormal = romanNumeral => {
   if (romanNumeral === undefined) throw new Error("Roman Number is required");
   for (let i = 0; i < romanNumeral.length; i++) {
      if (!['I', 'V', 'X', 'L', 'C', 'D', 'M'].includes(romanNumeral[i]))
         return "Not a Roman Number";
      if ((/(\S)(\1{3,})/g).test(romanNumeral)) // Check if any char is repeated more than 3 times
         return "Incorrect Roman Numeral";
   };
   let normalNumber = 0;
   for (let j = 0; j < romanNumeral.length; j++)
      key[romanNumeral[j]] < key[romanNumeral[j + 1]] ? normalNumber -= key[romanNumeral[j]] : normalNumber += key[romanNumeral[j]];
   return normalNumber;
};

module.exports = {
   convertNormalToRoman,
   convertRomanToNormal
};