//map() method 

// function multi(n) {
//     return n *3
// }
// arr = new Array(1, 2, 3, 6, 5, 4); 

// var new_arr = arr.map(multi);
// console.log(new_arr);

//reduce() method

// function product(a,b) {
//     return a * b;
// }

// arr = new Array(1, 2, 3, 6, 5, 4); 

// var pro_arr = arr.reduce(product);
// console.log(pro_arr);

//filter() method

// arr = new Array(1, 2, 3, 6, 5, 4); 
// new_arr = []
// for(let i = 0; i < 6; i++) { 
// 	if(arr[i] % 2 == 0) { 
// 		new_arr.push(arr[i]);		 
// 	} 
// } 

// console.log(new_arr)

// function fill(x) {
//     return x % 2==0;
// }

// arr = new Array(1, 2, 3, 6, 5, 4);

// var new_arr = arr.filter(fill);

// console.log(new_arr);

/* Using JS reduce() Method */


// function myFunc(total, num) { 
//     return total * num; 
// }

// const numbers = [2, 4, 7]; 

// console.log(numbers.reduce(myFunc)); 


// const input = [1,2,3,4,5];

// const sqr = input.map(num => num * num);

// console.log(sqr);

// const input = [1,-4,12,0,-3,29,-150]

// const pos = input.filter(num => num > 0)

// const sum = pos.reduce((acc,cv) => acc + cv,0)

// console.log(pos);
// console.log(sum);


//mean-median (sort-reduce)
// const input = [12,46,32,64];

// console.log(input.sort((a,b) => a-b))

// console.log(input.reduce((acc,cv,index,array) => {
//     acc.mean += cv / array.length;

//     if(array.length % 2 == 0) {
//         if(index === array.length / 2-1) {
//             acc.median += cv;
//         } else if (index === array.length / 2) {
//             acc.median += cv;
//             acc.median /=2;
//         }
//     } else {
//         if(index === (array.length - 1) /2) {
//             acc.median = cvv;
//         }
//     }
//     return acc;
// },
// {mean: 0, median: 0}


// const str = "The quick brown fox jumps over the lazy days";

// const copy = str.split;
// console.log(copy);

// const val = input.split(" ").map((word) => word[0])
// .join("");

// console.log(val);





