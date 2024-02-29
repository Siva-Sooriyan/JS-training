function binarySearch(arr,target) {
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if(target === arr[middleIndex]) {
            return middleIndex
        } 
        if(target < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex =  middleIndex + 1
        }
    }
    return -1
}

arr = [-15,-10,-5,0,5,10,15]
const target = 10

console.log(binarySearch(arr,target))

//Big-O = O(logn)