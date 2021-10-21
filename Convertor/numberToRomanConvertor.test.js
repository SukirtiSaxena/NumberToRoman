const { convertNormalToRoman,
  convertRomanToNormal } = require("./numberToRomanConvertor");

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
// convertRomanToNormal Test Cases

describe("convertRomanToNormal", () => {
  test("return 1 if Roman Numeral is I", () => {
    const Roman = 'I';
    expect(convertRomanToNormal(Roman)).toBe(1);
  });

  test("return 1000 if Roman Numeral is M", () => {
    const Roman = 'M';
    expect(convertRomanToNormal(Roman)).toBe(1000);
  });

  test("return 4 if Roman Numeral is IV", () => {
    const Roman = 'IV';
    expect(convertRomanToNormal(Roman)).toBe(4);
  });
  test("return 9 if Roman Numeral is IX", () => {
    const Roman = 'IX';
    expect(convertRomanToNormal(Roman)).toBe(9);
  });

  test("return 1233 if Roman Numeral is MCCXXXIII", () => {
    const Roman = 'MCCXXXIII';
    expect(convertRomanToNormal(Roman)).toBe(1233);
  });

  test("return 1234 if Roman Numeral is MCCXXXIV", () => {
    const Roman = 'MCCXXXIV';
    expect(convertRomanToNormal(Roman)).toBe(1234);
  });

  test("return 'Not a Roman Number' if input not in I,V,X,L,C,D,M ", () => {
    const Roman = 'ABCD';
    expect(convertRomanToNormal(Roman)).toBe('Not a Roman Number');
  });

  test("return 'Incorrect Roman Numeral' if Roman Numeral has any character repeated more than 3 times", () => {
    const Roman = 'VIIII';
    expect(convertRomanToNormal(Roman)).toBe('Incorrect Roman Numeral');
  });


});

