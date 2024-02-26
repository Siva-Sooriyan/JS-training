function urlCheck(url) {
    let regexp = /^(https?:\/\/)?([\da-z\.]+)\.([a-z\.]{2,6})([\/\w \.]*)*\/?$/;
    if(regexp.test(url)) {
        console.log("Valid url")
    } else {
        console.log("Invalid url")
    }
}

const url = "https://google.com/index.html"

urlCheck(url);


