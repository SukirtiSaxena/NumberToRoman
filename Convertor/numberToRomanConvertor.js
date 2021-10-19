
// Roman Numerals Kata using Test-Driven Development
const convertNormalToRoman = num => {
   if (num === undefined) throw new Error("Number is required");
   if (num === 0) return "nulla";
   const key = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
   };

   let Roman = "";
   for (let i of Object.keys(key)) {
      let Q = Math.floor(num / key[i]);
      num = num % key[i];
      Roman += i.repeat(Q);
   };
   return Roman;
};

module.exports = { convertNormalToRoman };