/*
    Problem A
        - Algorithm 1
        - Algorithm 2
        - Algorithm 3

    Either to compare one algorithm with another or to evaluate the performance of a single algorithm, we need performance factors
        - time complexity
            => amount of time taken by an algorithm to run as a function of the length of the input
        - space complexity
            => amount of memory used by an algorithm to run as a function of the length of the input
    
    Mathematical notations : Asymptotic Notations

    1. Big O Notation - Upper Bound
    2. Big Omega Notation - Lower Bound
    3. Theta Notation - Tight Bound

    Situtaions/Cases: Input

    1. Best Case
    2. Average Case
    3. Worst Case

    Example: Algorithm - Linear Search

    How does it works?
        - Compare each element of the array with the key
        - If the element is found, return the index
        - If the element is not found, return -1

    Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    Case(first element): If the key is 1, comparisons = 1 => best case => O(1) - abbr: constant time or Order of 1

    Case(middle element): If the key is 5, comparisons = 5 => average case => O(n/2) => O(n) - abbr: linear time or Order of n

    Case(last element): If the key is 10, comparisons = 10 => worst case => O(n) - abbr: linear time or Order of n
    Case(not found): If the key is 11, comparisons = 10 => worst case => O(n) - abbr: linear time or Order of n
*/

/*
    Example 1:

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < M; j++) {
        b = b + rand();
    }

    Time Complexity: O(N + M) => O(N)

    Options:

    O(1)
    O(logN)
    O(N)
    O(NlogN)
    O(N^2)
    O(2^N)
    O(N!)

    Solution: 

    let a = 0, b = 0; // declarations, initializations, assignments, conditional expressions => O(1)
    => O(1)

    for (i = 0; i < N; i++) {
        a = a + rand();
    }

    total executions = values of i
    i = 0, 1, 2, 3, 4, 5, ..., N - 1 => N times

    => O(N)

    for (j = 0; j < M; j++) {
        b = b + rand();
    }

    total executions = values of j
    j = 0, 1, 2, 3, 4, 5, ..., M - 1 => M times

    => O(M)

    total time complexity, T(N) = 1 + N + M
                                = N + M (as 1 is a constant)
                                = O(N + M) => O(N)
*/

/*
    Example 2:

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < N; j++) {
        b = b + rand();
    }

    Time Complexity = ?

    Solution:

    let a = 0, b = 0; => O(1)

    for (i = 0; i < N; i++) {
        a = a + rand();
    }

    => O(N)

    for (j = 0; j < N; j++) {
        b = b + rand();
    }

    => O(N)

    total time complexity, T(N) = 1 + N + N
                                = 1 + 2N
                                = 2N
                                = O(N)  
*/

/*
    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
        for (j = 0; j < N; j++) {
            b = b + rand();
        }
    }

    Time Complexity = ?

    Solution:

    Two ways:

    1. Calculate the time complexity of the inner loop and multiply it with the time complexity of the outer loop

    let a = 0, b = 0; => executions = 1

    outer loop: for (i = 0; i < N; i++) => executions = N

    inner loop: for (j = 0; j < N; j++) => executions = N

    total time complexity, T(N) = 1 + N * N
                                = 1 + N^2
                                = O(N^2)
    
    2. Second Approach:
        a. Assume some random values for N

        N = 4
            i = 0; j = 0, 1, 2, 3 => 4 times
            i = 1; j = 0, 1, 2, 3 => 4 times
            i = 2; j = 0, 1, 2, 3 => 4 times
            i = 3; j = 0, 1, 2, 3 => 4 times

            total executions = 4 + 4 + 4 + 4 = 16 times

        N = 5
            i = 0; j = 0, 1, 2, 3, 4 => 5 times
            i = 1; j = 0, 1, 2, 3, 4 => 5 times
            i = 2; j = 0, 1, 2, 3, 4 => 5 times
            i = 3; j = 0, 1, 2, 3, 4 => 5 times
            i = 4; j = 0, 1, 2, 3, 4 => 5 times

            total executions = 5 + 5 + 5 + 5 + 5 = 25 times

        N = 6
            i = 0; j = 0, 1, 2, 3, 4, 5 => 6 times
            i = 1; j = 0, 1, 2, 3, 4, 5 => 6 times
            i = 2; j = 0, 1, 2, 3, 4, 5 => 6 times
            i = 3; j = 0, 1, 2, 3, 4, 5 => 6 times
            i = 4; j = 0, 1, 2, 3, 4, 5 => 6 times
            i = 5; j = 0, 1, 2, 3, 4, 5 => 6 times

            total executions = 6 + 6 + 6 + 6 + 6 + 6 = 36 times

        b. Find the number of executions for every assumption of N
            N = 4, executions = 16
            N = 5, executions = 25
            N = 6, executions = 36

        c. Find the relation between N and the number of executions

            For a given N, we can find the number of executions as N^2
    
        d. Find the time complexity

            total time complexity, T(N) = 1 + N^2
                                        = O(N^2)
*/


/*
    let a = 0;
    for (i = 0; i < N; i++) {
        for (j = N; j > i; j--) {
            a = a + i + j;
        }
    }

    Time Complexity = ?

    Solution:

    let a = 0; => O(1)

    1. Assume some random values for N

        N = 4
        N = 5
        N = 6
    
    2. Find the number of executions for every assumption of N

        N = 4
            i = 0; j = 4, 3, 2, 1 => 4 times
            i = 1; j = 4, 3, 2 => 3 times
            i = 2; j = 4, 3 => 2 times
            i = 3; j = 4 => 1 time
        
            total executions = 4 + 3 + 2 + 1 = 10 times
        
        N = 5
            i = 0; j = 5, 4, 3, 2, 1 => 5 times
            i = 1; j = 5, 4, 3, 2 => 4 times
            i = 2; j = 5, 4, 3 => 3 times
            i = 3; j = 5, 4 => 2 times
            i = 4; j = 5 => 1 time
        
            total executions = 5 + 4 + 3 + 2 + 1 = 15 times
        
        N = 6
            i = 0; j = 6, 5, 4, 3, 2, 1 => 6 times
            i = 1; j = 6, 5, 4, 3, 2 => 5 times
            i = 2; j = 6, 5, 4, 3 => 4 times
            i = 3; j = 6, 5, 4 => 3 times
            i = 4; j = 6, 5 => 2 times
            i = 5; j = 6 => 1 time
        
            total executions = 6 + 5 + 4 + 3 + 2 + 1 = 21 times
        
    3. Find the relation between N and the number of executions by summarizing the above results

        N = 4, executions = 10
        N = 5, executions = 15
        N = 6, executions = 21

        For a given N, we can find the number of executions as N * (N + 1) / 2

        executions = sum of first N natural numbers
                   = N + (N - 1) + (N - 2) + ... + 3 + 2 + 1
                   = N * (N + 1) / 2
        
        S(N) = N + N-1 + N-2 + ... + 3 + 2 + 1
        S(N) = 1 + 2 + 3 + ... + N-2 + N-1 + N

        2S(N) = (N + 1) + (N + 1) + (N + 1) + ... + (N + 1) + (N + 1) + (N + 1)
        2S(N) = N * (N + 1)
        S(N) = N * (N + 1) / 2

        N = 10, S(10) = 10 * (10 + 1) / 2 = 55
    
    4. Find the time complexity

        total time complexity, T(N) = 1 + N * (N + 1) / 2
                                    = N * (N + 1) / 2
                                    = N^2 / 2 + N / 2
                                    = 1/2 (N^2 + N)
                                    = N^2 + N
                                    = O(N^2) [as N^2 is the dominant term or highest degree term]

*/

// let N = 4;
// console.log(`For N = ${N}, Executions = ${N * (N + 1) / 2}`);
// N = 5;
// console.log(`For N = ${N}, Executions = ${N * (N + 1) / 2}`);
// N = 6;
// console.log(`For N = ${N}, Executions = ${N * (N + 1) / 2}`);

/*
    int i, j, k = 0;
    for (i = n / 2; i <= n; i++) { 
        for (j = 2; j <= n; j = j * 2) {
            k = k + n / 2;
        }
    }

    Time Complexity = ?

    Solution: 

    int i, j, k = 0; => O(1) => executions = 1

    outer loop: for (i = n / 2; i <= n; i++) => executions = n / 2 + 1

    inner loop: for (j = 2; j <= n; j = j * 2)

        Assume some values for n

        n = 5, j = 2, 4 => 2 executions
        n = 6, j = 2, 4 => 2 executions
        n = 10, j = 2, 4, 8 => 3 executions
        n = 20, j = 2, 4, 8, 16 => 4 executions
        n = 25, j = 2, 4, 8, 16 => 4 executions
        n = 30, j = 2, 4, 8, 16 => 4 executions
        n = 40, j = 2, 4, 8, 16, 32 => 5 executions

        2^2 = 4 => 2 executions
        2^3 = 8 => 3 executions
        2^4 = 16 => 4 executions
        2^5 = 32 => 5 executions

        2^x = n, solve for x?

        take log2 on both sides

        log2(2^x) = log2(n)
        x log2(2) = log2(n)
        x(1) = log2(n) [since, log2(2) = 1]
        x = log2(n)

        so, for a given n, the number of executions of the inner loop is log2(n)

        total time complexity, T(n) = 1 + (n/2 + 1) * log2(n)
                                    = 1 + n/2 * log2(n) + log2(n)
                                    = n/2 * log2(n) + log2(n) [as 1 is a constant]
                                    = n/2 * log2(n) [as n is the dominant term or highest degree term]
                                    = 1/2 * n * log2(n)
                                    = O(nlogn) [as 1/2 is a constant]
*/

// check the number of executions of the inner loop for different values of n
// console.log(`For n = 5, Executions = ${Math.log2(5)}`);
// console.log(`For n = 6, Executions = ${Math.log2(6)}`);
// console.log(`For n = 10, Executions = ${Math.log2(10)}`);
// console.log(`For n = 20, Executions = ${Math.log2(20)}`);
// console.log(`For n = 25, Executions = ${Math.log2(25)}`);
// console.log(`For n = 30, Executions = ${Math.log2(30)}`);
// console.log(`For n = 40, Executions = ${Math.log2(40)}`);

/* 
    Time Complexity: 2^n
    
    Example: Given an array of size N, to find all the subsets of the array

    input: [1, 2, 3]

    output: 

    0: []
    1: [1], [2], [3]
    2: [1, 2], [1, 3], [2, 3]
    3: [1, 2, 3]

    input: [1, 2, 3, 4]

    output:

    0: []
    1: [1], [2], [3], [4]
    2: [1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]
    3: [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]
    4: [1, 2, 3, 4]

    N = number of elements in the array

    N = 2, executions (number of subsets) = 4
    N = 3, executions (number of subsets) = 8
    N = 4, executions (number of subsets) = 16

    2^N = number of subsets
*/

/*
    Time complexity: N!

    Example: Given an array of size N, to find all the permutations of the array

    input: [1, 2, 3]

    output:

    [1, 2, 3]
    [1, 3, 2]
    [2, 1, 3]
    [2, 3, 1]
    [3, 1, 2]
    [3, 2, 1]

    executions = 6

    input: [1, 2, 3, 4]

    output:

    [1, 2, 3, 4]
    [1, 2, 4, 3]
    [1, 3, 2, 4]
    [1, 3, 4, 2]
    [1, 4, 2, 3]
    [1, 4, 3, 2]
    [2, 1, 3, 4]
    [2, 1, 4, 3]
    [2, 3, 1, 4]
    [2, 3, 4, 1]
    [2, 4, 1, 3]
    [2, 4, 3, 1]
    [3, 1, 2, 4]
    [3, 1, 4, 2]
    [3, 2, 1, 4]
    [3, 2, 4, 1]
    [3, 4, 1, 2]
    [3, 4, 2, 1]
    [4, 1, 2, 3]
    [4, 1, 3, 2]
    [4, 2, 1, 3]
    [4, 2, 3, 1]
    [4, 3, 1, 2]
    [4, 3, 2, 1]

    executions = 24

    input = [1, 2]  

    output:

    [1, 2]
    [2, 1]

    executions = 2

    N = 2, executions = 2
    N = 3, executions = 6
    N = 4, executions = 24

    For a given N, the number of executions is N!
*/