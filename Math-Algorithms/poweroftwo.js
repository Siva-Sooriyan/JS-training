// function powerOfTwo(n) {
//     if( n < 1) {
//         return "It is not a power of 2"
//     }
//     while(n > 1) {
//         if(n % 2 !== 0) {
//             return "It is not a power of 2"
//         }
//         n = n/2
//     }
//     return "It a power of 2"
// }

//Big-O = O(logn)

function powerOfTwo(n) {
    if(n < 1) {
        return "It is not a power of 2"
    }
    if( (n & (n-1)) === 0) {
        return "It is a power of 2"
    }
}

console.log(powerOfTwo(524288))

//Big-O = O(1)