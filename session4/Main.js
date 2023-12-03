const StackArray = require('./StackArray');

let stack = new StackArray();

stack.push(10);
stack.push(20);

stack.pop();

console.log(stack.peek());