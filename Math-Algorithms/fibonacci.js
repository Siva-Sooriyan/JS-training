function fibonacci(n) {
    const fib =[0,1]
    for(let i=2;i < n;i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}

const n = 5
console.log("Fibonacci Series of",n,"is",fibonacci(n));


//fib [0,1]
//fib[i] = fib[i-1] + fib[i-2]
//fib[1] = [0,1]
//fib[2] = [0,1]
//fib[3] = [0,1,1]
//fib[4] = [0,1,1,2]
//fib[5] = [0,1,1,2,3]

//Big-O = O(n) - Linear Complexity