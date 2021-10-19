const { convertNormalToRoman } = require("./numberToRomanConvertor");

describe("convertNormalToRoman", () => {
  test("return I if number is 1", () => {
    const Number = 1;
    expect(convertNormalToRoman(Number)).toBe('I');
  });

  test("return M if number is 1000", () => {
    const Number = 1000;
    expect(convertNormalToRoman(Number)).toBe('M');
  });

  test("return IV if number is 4", () => {
    const Number = 4;
    expect(convertNormalToRoman(Number)).toBe('IV');
  });
  test("return IX if number is 9", () => {
    const Number = 9;
    expect(convertNormalToRoman(Number)).toBe('IX');
  });

  test("return MCCXXXIII if number is 1233", () => {
    const Number = 1233;
    expect(convertNormalToRoman(Number)).toBe('MCCXXXIII');
  });

  test("return MCCXXXIV if number is 1234", () => {
    const Number = 1234;
    expect(convertNormalToRoman(Number)).toBe('MCCXXXIV');
  });

  test("return 'nulla' if number is 0", () => {
    const Number = 0;
    expect(convertNormalToRoman(Number)).toBe('nulla');
  });

  test("return 'Not a number' if number is not integer", () => {
    const Number = 8.9;
    expect(convertNormalToRoman(Number)).toBe('Not a number');
  });

  test("return 'Too big number!!' if number is greater than 3000", () => {
    const Number = 4000;
    expect(convertNormalToRoman(Number)).toBe('Too big number!!');
  });

});