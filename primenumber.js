function Prime(num) {
    if (num <= 1) {
        return "not a prime number";
    }
    if (num === 2) {
        return "prime number";
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return "not a prime number";
        }
    }
    return "prime number";
}

console.log(Prime(61));  