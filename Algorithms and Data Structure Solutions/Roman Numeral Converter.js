function convertToRoman(num) {
  const NumeralTable = {
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

  let result = '';

  for (const key in NumeralTable) {
    const numberValue = NumeralTable[key];

    while (numberValue <= num) {
      num -= numberValue;
      result += key;
    }
  }
 return result;
}

convertToRoman(3999);
