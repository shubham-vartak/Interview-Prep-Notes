function greeting(){
    console.log("Hello shubham");
}
console.log('Before');
setTimeout(greeting, 1000);
console.log('After');

// output 
/*Before
After
Hello shubham*/
// output

// Another way 
console.log('Before');
setTimeout(function (){
    console.log("Hello shubham");
}, 1000);
console.log('After');

// Another way by assigning to variable
const multiply = function(a ,b){ // storing function in variable
   return mul = a*b;
    
}
console.log(multiply(5,5));