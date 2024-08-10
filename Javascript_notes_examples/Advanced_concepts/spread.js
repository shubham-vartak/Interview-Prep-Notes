let arr1 = [1, 2, 3];
let arr2 = [arr1];

console.log(arr1);
console.log(arr2);
console.log(arr2.length); // its basically we have only 1 element that is arr1

// Output 
[ 1, 2, 3 ]
[ [ 1, 2, 3 ] ]
1

// instead we can use spread opeartor 

let arr3 =[...arr1];
console.log(arr3);
console.log(arr3.length);

// output 
[ 1, 2, 3 ]
3

