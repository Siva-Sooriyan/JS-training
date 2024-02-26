function sumOfDivisors(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum;
}

const num = 12;

console.log("The sum of divisors is", sumOfDivisors(num));
