//created a function that converts an integer number to a Roman Numeral number
function integerToRoman(num) {
  if (typeof num !== "number" || num < 1 || num > 3999) {
    return Error("Input must be a number between 1 and 3999");
  }

  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  let result = "";

  for (const pair of romanNumerals) {
    const count = Math.floor(num / pair.value);
    result += pair.numeral.repeat(count);
    num %= pair.value;
  }

  return result;
}
const number = 500;
const romanNumeral = integerToRoman(number);
console.log(`${number} is represented as ${romanNumeral} in Roman numerals.`);
