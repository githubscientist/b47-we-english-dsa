/*
    Iteration: A loop that repeats until a condition is met!
    Recursion: A function that calls itself!
*/

// function sayHello() {
//     console.log("Hello");
//     sayHello();
// }

// sayHello();

/*
    Recursion Tree

    sayHello()
        - console.log("Hello")
        - sayHello()
            - console.log("Hello")
            - sayHello()
                - console.log("Hello")
                - sayHello()
                    - ...
                    - ...
*/

// Problem: To print hello message for n times

// Iterative Way

// function sayHello(n) {
//     for (let i = 0; i < n; i++){
//         // this loop will run for n times
//         console.log("hello");
//     }
// }

// sayHello(5);

// Recursive Way

// function sayHello(n) {
//     if (n == 0) {
//         return;
//     }
//     console.log("hello");
//     sayHello(n-1);
// }

// sayHello(3);

/*
    Exercise: Write a recursive function to print the first n natural numbers in decreasing order and then try to print them in increasing order.
*/

// Iterative Way
// function fnPrint(n) {
//     for (let i = n; i >= 1; i--){
//         console.log(i);
//     }
// }

// fnPrint(5);

// function fnPrint(n) {
//     for (let i = 1; i <= n; i++){
//         console.log(i);
//     }
// }

// fnPrint(5);

// Recursive Way
// function fnPrint(n) {
//     if (n == 0) {
//         return;
//     }
//     console.log(n);
//     fnPrint(n - 1);
// }

// fnPrint(5);

/*
    Recursion Tree

    fnPrint(5)
        - n = 5; is n == 0? No; 
        - console.log(5);
        - fnPrint(4)
            - n = 4; is n == 0? No;
            - console.log(4);
            - fnPrint(3)
                - n = 3; is n == 0? No;
                - console.log(3);
                - fnPrint(2)
                    - n = 2; is n == 0? No;
                    - console.log(2);
                    - fnPrint(1)
                        - n = 1; is n == 0? No;
                        - console.log(1);
                        - fnPrint(0)
                            - n = 0; is n == 0? Yes;
                            - return;
*/

// function fnPrint(n) {
//     if (n == 0) {
//         return;
//     }
//     fnPrint(n - 1);
//     console.log(n);
// }

// fnPrint(5);

/*
    Recursion Tree

    fnPrint(5)
        - n = 5; is n == 0? No;
        - fnPrint(4)
            - n = 4; is n == 0? No;
            - fnPrint(3)
                - n = 3; is n == 0? No;
                - fnPrint(2)
                    - n = 2; is n == 0? No;
                    - fnPrint(1)
                        - n = 1; is n == 0? No;
                        - fnPrint(0)
                            - n = 0; is n == 0? Yes;
                            - return;
                        - console.log(1); # waiting for fnPrint(0) to finish execution
                    - console.log(2); # waiting for fnPrint(1) to finish execution
                - console.log(3); # waiting for fnPrint(2) to finish execution
            - console.log(4); # waiting for fnPrint(3) to finish execution
        - console.log(5); # waiting for fnPrint(4) to finish execution

    
    fnPrint(5)

*/

/*
    Exercise: Write a recursive function to calculate the sum of first n natural numbers.

    Input: 5
    Output: 15

    Input: 10
    Output: 55
*/

// // iterative way
// function S(n) {
//     // initialize a sum variable to keep track of the sum of n numbers
//     let sum = 0;

//     // iterate from 1 to n => natural numbers
//     for (let number = 1; number <= n; number++){
//         sum = sum + number;
//     }

//     // return the sum
//     return sum;
// }

// console.log(S(10));

// recursive way

// let sum = 0;

// function S(n) {
//     if (n == 0) {
//         return sum;
//     }
//     sum = sum + n;
//     return S(n - 1);
// }

// console.log(S(10));

// function S(n, sum) {
//     if (n == 0) {
//         return sum;
//     }
//     return S(n - 1, sum + n);
// }

// console.log(S(10, 0));

// Recurrence Relation: a function that is defined in terms of itself

/*
    S(n) = ?

    Assume some base cases:

    S(1) = 1

    ----------------------------

    S(2) = 1 + 2 = 3
    S(3) = 1 + 2 + 3 = 6
    S(4) = 1 + 2 + 3 + 4 = 10
    S(5) = 1 + 2 + 3 + 4 + 5 = 15

    ----------------------------

    See using the following to find the pattern and then generalize it.
    Backward Substitution

    S(1) = 1
    S(2) = S(1) + 2 = 3
    S(3) = S(2) + 3 = 6
    S(4) = S(3) + 4 = 10
    S(5) = S(4) + 5 = 15

    See the pattern?

    S(n) = S(n-1) + n => Recurrence Relation
*/

// function S(n) {
//     // base case
//     if (n == 1) return 1;
//     return S(n - 1) + n;
// }

// console.log(S(10));

/*
    Recurrence Tree

    S(5)
        - return S(4) + 5
                  |
                  |____ return S(3) + 4
                                |
                                |____ return S(2) + 3
                                              |
                                              |____ return S(1) + 2
                                                            |
                                                            |____ return 1
    
    
    S(5)
        - return 15                                                         
*/

/*
    Exercise: Write a recursive function to calculate the factorial of a number.

    Input: 5
    Output: 120

    Input: 4
    Output: 24
*/

/*
    Recurrence Relation:

    F(n) = ?

    Assume some base cases:

    F(1) = 1

    ----------------------------

    F(2) = 1 * 2 = 2
    F(3) = 1 * 2 * 3 = 6
    F(4) = 1 * 2 * 3 * 4 = 24
    F(5) = 1 * 2 * 3 * 4 * 5 = 120

    ----------------------------

    See using the following to find the pattern and then generalize it.
    Backward Substitution

    F(1) = 1
    F(2) = F(1) * 2 = 2
    F(3) = F(2) * 3 = 6
    F(4) = F(3) * 4 = 24
    F(5) = F(4) * 5 = 120

    See the pattern?

    F(0) = 1, for n = 0
    F(1) = 1, for n = 1

    F(n) = F(n-1) * n => Recurrence Relation, for all values greater than 1
*/

// function F(n) {
//     if (n==0 || n == 1) return 1;
//     return F(n - 1) * n;
// }

// console.log(F(0)); // edge case

/*
    Exercise: Write a recursive function to calculate the nth fibonacci number.

    Fibonacci Series: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

    Input: 5
    Output: 3

    Input: 10
    Output: 34
*/

/*
    F(n) = F(n-1) + F(n-2)
*/

function F(n) {
    if (n == 1) return 0;
    else if (n == 2) return 1;
    else return F(n - 1) + F(n - 2);
}

console.log(F(10));