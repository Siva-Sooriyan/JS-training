function phoneNumber(num) {
    let regexp = /^[7-9]\d{9}$/;
    if(regexp.test(num)) {
        console.log("Valid phone number")
    } else {
        console.log("Invalid phone number")
    }

}

let num = 7010225381;

phoneNumber(num);