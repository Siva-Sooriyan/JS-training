function dateValidation(date) {
    let regexp = /^(0[1-9]|[1-2][0-9]|3[01])[-/.](0[1-9]|1[0-2])[-/.]\d{4}$/;
    if(regexp.test(date)) {
        console.log("Date is valid")
    } else {
        console.log("Date is invalid")
    }
}

const date = '31.02-2023'; 

dateValidation(date);