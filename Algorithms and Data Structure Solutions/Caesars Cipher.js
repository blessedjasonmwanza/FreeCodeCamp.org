// Declare the alphabetical letters
const letters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];

function rot13(str) {
  // result holder
  let result = '';

  // loop through the string passed
  for (let i = 0; i < str.length; i++) {
    const character = str[i];
    const isALetter = letters.includes(character);
    // provided character is not letter, add to result
    if (isALetter === false) {
      result += character;
    } else {
      // else::: try to rotate + or - 13 and add to result
      const characterIndex = letters.findIndex((c) => c === character);

      result += letters[characterIndex + 13] || letters[characterIndex - 13];
    }
  }
  return result;
}

rot13("SERR PBQR PNZC");
