function rot13(str) {
  let value = "";
  // Defining mapper
  // Having 2 arrays and 13/13 and use a index to get the value
  const rotOne = {
    A: "N",
    B: "O",
    C: "P",
    D: "Q",
    E: "R",
    F: "S",
    G: "T",
    H: "U",
    I: "V",
    J: "W",
    K: "X",
    L: "Y",
    M: "Z",
    N: "A",
    O: "B",
    P: "C",
    Q: "D",
    R: "E",
    S: "F",
    T: "G",
    U: "H",
    V: "I",
    W: "J",
    X: "K",
    Y: "L",
    Z: "M",
  };

  str.split("").forEach((char) => {
    if (charIsLetter(char)) {
      value += rotOne[char];
    } else {
      value += char;
    }
  });
  return str;
}

const charIsLetter = (char) => {
  if (typeof char !== "string") {
    return false;
  }

  return char.toLowerCase() !== char.toUpperCase();
};

rot13("SERR PBQR PNZC");
