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

// O(N)

inp.on("close", () => {
    let words = userInput[0].split(' ');
    
    // create an empty stack
    let stack = new Stack();

    // iterate the words array
    for (let word of words) {
        // for every word in the words array
        // check if the stack is empty
        if (stack.isEmpty()) {
            // stack is empty
            // push the word to the stack
            stack.push(word);
        } else {
            // stack is not empty
            // compare the current word with the tos
            if (stack.peek() == word) {
                // pop the stack
                stack.pop();
            } else {
                // push the word to the stack
                stack.push(word);
            }
        }
    }

    console.log(stack.items.join(' '));
});