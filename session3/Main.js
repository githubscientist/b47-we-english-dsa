const LinkedList = require('./LinkedList');

let list = new LinkedList();

list.insertTail(4);
list.insertTail(6);
list.insertTail(10);

list.insertHead(2);
list.insertHead(1);
list.insertHead(0);

console.log(list.toArray());
console.log(list.length());