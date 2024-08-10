function greeting(){
    console.log("Hello Good Morning..!! ");

}

greeting();

function getPrimeNumber(){
    return 7;
}

let prime = getPrimeNumber();

console.log(prime);

function sum(first,second){ // this first and second are parameters here
 let add = first + second ;
 return add;
}

let result = sum(5, 5); // here 5,5 are called as arguments 
console.log(result);