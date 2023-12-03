// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

// O(N)
function findIndex(words) {
    for (let index = 0; index < words.length-1; index++){
        if (words[index] == words[index + 1]) {
            return index;
        }
    }
    return -1;
}

// O(N^2)
inp.on("close", () => {
    let words = userInput[0].split(' ');
    let index;

    do {
        index = findIndex(words);

        if (index != -1) {
            words.splice(index, 2);
        }
    } while (index != -1);
    console.log(words.join(' '));
});