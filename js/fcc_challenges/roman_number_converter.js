function convertToRoman(num) {
  let remaining = num;
  let result = "";

  while (remaining >= 1000) {
    result += "M";
    remaining -= 1000;
  }
  if (remaining >= 900) {
    result += "CM";
    remaining -= 900;
  }
  while (remaining >= 500) {
    result += "D";
    remaining -= 500;
  }
  if (remaining >= 400) {
    result += "CD";
    remaining -= 400;
  }
  while (remaining >= 100) {
    result += "C";
    remaining -= 100;
  }
  if (remaining >= 90) {
    result += "XC";
    remaining -= 90;
  }
  while (remaining >= 50) {
    result += "L";
    remaining -= 50;
  }
  if (remaining >= 40) {
    result += "XL";
    remaining -= 40;
  }
  while (remaining >= 10) {
    result += "X";
    remaining -= 10;
  }
  if (remaining >= 9) {
    result += "IX";
    remaining -= 9;
  }
  while (remaining >= 5) {
    result += "V";
    remaining -= 5;
  }
  if (remaining >= 4) {
    result += "IV";
    remaining -= 4;
  }
  while (remaining >= 1) {
    result += "I";
    remaining -= 1;
  }

  return result;
}

console.log(convertToRoman(36));
