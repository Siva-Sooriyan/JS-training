function password(pw) {
    let regexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

    if(regexp.test(pw)) {
        console.log("Password is strong");
    } else {
        console.log("Password is weak,enter a strong password")
    }
}

const pw = '1Sasiprso!'

password(pw);