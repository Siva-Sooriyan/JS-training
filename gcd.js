function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

const a = 98;
const b = 67;
console.log("GCD is", gcd(a,b));
