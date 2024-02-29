function perfectInteger(num) {
    if (num <= 1) {
        return "Not a perfect number";
    }

    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    return sum === num ? "perfect" : "not perfect";
}


console.log(perfectInteger(25)); 

