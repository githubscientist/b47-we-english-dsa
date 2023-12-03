/*
    LinkedList

    - Linked List is a linear data structure.
    - Abstract data type: a data type defined by its behavior from the point of view of a user of the data
    - chain of nodes linked together
    - each node has two components: data and pointer to the next node

    types:
        - singly linked list
        - doubly linked list
        - circularly linked list
*/

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// let node1 = new Node(3);
// let node2 = new Node(5);

// node1.next = node2;

// console.log(node1);
// console.log(node1.next);
// console.log(node1.data, node1.next.data);

/*
    node1 = Node {
        data: 3,
        next: Node {
            data: 5,
            next: null
        }
    }

    node2 = Node {
        data: 5,
        next: null
    }
*/

const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    toArray() {
        // create an array
        let nodes = [];

        let thead = this.head;

        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }

        return nodes;
    }

    insertTail(data) {
        let newNode = new Node(data);

        if (this.head == null) {
            // list is empty
            this.head = this.tail = newNode;
        } else {
            // list is not empty
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
    }

    insertHead(data) {
        let newNode = new Node(data);

        newNode.next = this.head;

        this.head = newNode;
    }

    length() {
        let nodes = 0;

        let thead = this.head;

        while (thead != null) {
            nodes++;
            thead = thead.next;
        }

        return nodes;
    }

    // remove the first node
    removeHead() {
        // check whether the linked list is empty
        if (this.head == null) {
            // the list is empty
            return;
        } else {
            this.head = this.head.next;
        }
    }

    // remove the last node
    removeTail() {
        // check if the list is empty
        if (this.head == null) {
            // the list is empty
            return;
        } else if (this.head.next == null) {
            // the list has only one element
            this.head = null;
        } else {
            // the list has more than one node
            // find the node previous of tail node
            let previousTail = this.head;

            while (previousTail.next != this.tail) {
                previousTail = previousTail.next;
            }

            previousTail.next = null;
            this.tail = previousTail;
        }
    }
}

module.exports = LinkedList;