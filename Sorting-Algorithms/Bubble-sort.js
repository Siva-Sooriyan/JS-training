function bubbleSort(arr) {
    let swapped
    do{
        swapped = false
        for(let i = 0;i < arr.length;i++) {
            if(arr[i] > arr[i+1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i+1] = temp
                swapped = true
            }
        }
    } while(swapped)
}

arr = [21,-35,9,-12,-5,22,0,]

bubbleSort(arr)
console.log(arr)

//Big-O = O(n^2)