function check(mail) {

    let regexp = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(regexp.test(mail)) {
        console.log("It's a valid mail address")
    } else {
        console.log("It's not a valid mail address")
    }
}

const mail = "sivasooriyan06@gmail.com"

check(mail);