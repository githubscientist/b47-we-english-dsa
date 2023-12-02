/*
    Arrays
        - Arrays are used to store multiple values in a single variable.
        - built-in data structure
        - can be used to store any type of data and stored contiguously in memory
        - can be accessed by index
        - methods of array
            - push: add element to the end of the array
            - pop: remove element from the end of the array
            - shift: remove element from the beginning of the array
            - unshift: add element to the beginning of the array
            - splice: remove or replace elements
*/

let numbers = [3, 7, 11, 2, 5]

// console.log(numbers[0]); // access the first element of the array

// access the last element of the array
// console.log(numbers[4]);

// length property
// console.log(numbers.length); // length of the array

// methods of array
numbers.push(9); // add element to the end of the array 

numbers.pop(); // remove element from the end of the array

numbers.unshift(10); // add element to the beginning of the array

numbers.shift(); // remove element from the beginning of the array

// insert an element 24 between 11 and 2
// index: 3
numbers.splice(3, 0, 24); // (index, how many elements to remove, element to add)

// remove 11 from the array
numbers.splice(2, 1); // (index, how many elements to remove)

// replace the value 2 with 20
numbers[3] = 20;

console.log(numbers);