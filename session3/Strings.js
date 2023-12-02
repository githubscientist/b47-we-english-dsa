/*
    Strings
        - String is a sequence of characters
        - Strings are immutable (unchangeable)
        - Strings are indexed
*/

let word = 'apple';

// access the first character
// console.log(word[0]);

// access the last character
// console.log(word[word.length - 1]);

// replace the character at index 1 with 'm'
// word[1] = 'm'; // does not work

// workaround to replace the character at index 1 with 'm'
let index = 1;
let char = 'm';

word = word.slice(0, index) + char + word.slice(index + 1,);

console.log(word);

// String Methods

// convert all the characters to uppercase
console.log(word.toUpperCase());

// convert all the characters to lowercase
console.log(word.toLowerCase());

// split a sentence into an array of words
let sentence = 'I love JavaScript';

console.log(sentence.split(' '));