// Arrow functions

function sum1(a,b){
    return a + b;
}
console.log(sum1(4, 5));

let sum2 = function(a,b){
    return a + b;   
}
console.log(sum2(5, 5));

// with arrow functions
let sum3 = (a,b) => {
    return a + b; 
}
console.log(sum3(15, 15));

let sum4 = (a,b) => a + b;
console.log(sum4(50, 50));