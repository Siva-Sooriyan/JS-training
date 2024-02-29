function facOfNum(n) {
    let result = 1
    for(let i = 2;i<=n;i++) {
        result *= i
    }
    return result
}

const n = 4
console.log("The Factorial of",n,"is",facOfNum(n));

// 1! = 1
// 2! = 2
// 3! = 6
// 4! = 24
// 5! = 120

//Big-O = O(n) - Linear complexity
