function linearSearch(arr,target) {
    for(let i = 0;i < arr.length;i++) {
        if(arr[i] === target) {
            return i
        }
    }
    return -1
}

arr=[-5,-1,0,1,5,10]
const target = 10

console.log(linearSearch(arr,target))

//Big-O = O(n)