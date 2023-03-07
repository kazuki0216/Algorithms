const linterCheck = "(var x = {y: [1,2,3]})";

const stacks = (texts) => {
  let stack = [];
  let stacklength = 0;
  let open = {
    "(": true,
    "{": true,
    "[": true,
  };
  let validParenthesis = {
    "{}": true,
    "[]": true,
    "()": true,
  };
  for (let i = 0; i < texts.length; i++) {
    let text = texts[i];
    if (open[text]) {
      stack.push(text);
      stacklength++;
    }
    console.log(stack);
    if (text === ")" || text === "}" || text === "]") {
      if (!validParenthesis[stack.pop() + text]) {
        return false;
      } else {
        stacklength--;
      }
    }
  }
  return stacklength === 0 ? true : false;
};

// if (
//   stack.pop() + text === "()" ||
//   stack.pop() + text === "[]" ||
//   stack.pop() + text === "{}"
// ) {
//   console.log(stack.pop() + text);
//   result = true;
// }

console.log(stacks(linterCheck));

class Stack {
  constructor() {
    this.stack = [];
  }

  reverseString(string) {
    let reversedString = "";
    for (let i = 0; i < string.length; i++) {
      this.stack.push(string[i]);
    }
    for (let i = this.stack.length - 1; i >= 0; i--) {
      reversedString += this.stack.pop();
    }
    console.log(reversedString);
    return reversedString;
  }
}

class Queue {
  constructor() {
    this.queue = [];
  }
}

const stackImp = new Stack();

stackImp.reverseString("abcde");
