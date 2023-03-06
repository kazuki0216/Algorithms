//a function that returns the intersection of 2 array.
//
const findIntersection = (arr1, arr2) => {
  let hashtable = {};
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!hashtable[arr1[i]]) {
      hashtable[arr1[i]] = true;
    }
  }

  for (const number of arr2) {
    if (hashtable[number]) {
      result.push(number);
    }
  }
  return result;
};

console.log(findIntersection([1, 2, 3, 4, 5], [0, 2, 4, 6, 8]));

const findDuplicate = (string) => {
  let hashtable = {};
  for (let i = 0; i < string.length; i++) {
    if (!hashtable[string[i]]) {
      hashtable[string[i]] = 1;
    } else {
      hashtable[string[i]]++;
    }
  }
  for (const letter in hashtable) {
    if (hashtable[letter] > 1) {
      return letter;
    }
  }
};

console.log(findDuplicate(["a", "b", "c", "d", "c", "e", "f"]));

const findMissingAlphabet = (str) => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let hashtable = {};
  const string = str.split(" ").join("");
  for (let i = 0; i < alphabet.length; i++) {
    hashtable[alphabet[i]] = true;
  }
  for (let i = 0; i < string.length; i++) {
    if (hashtable[string[i]]) {
      delete hashtable[string[i]];
    }
  }
  return Object.keys(hashtable)[0];
};

console.log(findMissingAlphabet("the quick brown box jumps over a lazy dog"));
//loop through the array
//

const returnNonDuplicate = (string) => {
  const str = string.split(" ").join("");
  let hashtable = {};
  for (let i = 0; i < str.length; i++) {
    if (!hashtable[str[i]]) {
      hashtable[str[i]] = 1;
    } else {
      hashtable[str[i]]++;
    }
  }
  for (const element in hashtable) {
    if (hashtable[element] === 1) {
      return element;
    }
  }
};

console.log(returnNonDuplicate("minimum"));
