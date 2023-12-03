// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

class Stack {
    constructor() {
        this.items = [];
        this.top = -1;
    }

    // push
    push(data) {
        this.items.push(data);
        this.top++;
    }

    isEmpty() {
        return this.top == -1;
    }

    pop() {
        if (this.isEmpty()) {
            return;
        }
        this.items.pop();
        this.top--;
    }

    peek() {
        if (!this.isEmpty()) return this.items[this.top];
    }
}

inp.on("close", () => {
  let expression = userInput[0];

  let stack = new Stack();

  let assumption = true;

  for (let bracket of expression) {
    if (bracket == '{' || bracket == '[' || bracket == '(') {
      stack.push(bracket);
    } else {
      if (bracket == ')' && stack.peek() == '(') {
        stack.pop();
      } else if (bracket == '}' && stack.peek() == '{') {
        stack.pop();
      } else if (bracket == ']' && stack.peek() == '[') {
        stack.pop();
      } else {
        assumption = false;
      }
    }
  }

  if (stack.isEmpty()) {
    console.log(assumption ? 'yes' : 'no');
  } else {
    console.log('no');
  }
});