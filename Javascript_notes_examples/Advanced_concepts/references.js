// This is object
let student = {
    rollNo : 35,
    name : 'Shubham Vartak',
    Class : 'First',
    division : 'C'
};

// This is normal variable
let num1 = 10;

let num2 = num1;
let student2 = student;

console.log(num2);
console.log(student2);

num1 = 15;
delete student.name;

console.log(num2);
console.log(student2);

// here we can see that when we change the num1 value to 15 then also num2 value which is the copy of num1 still remains 10 that means 
//it is complete copy of variable where as when we change student object to means we deleted name from it and then we print student2 it 
// gets deleted there also means it takes by reference so basically objects are references, it does not copy the object just reference.

// so here we can say that varible is pass by value whereas object is pass by reference.
// as we previous learned about primitive and non primitive types we can say that primitive types are passed by value and non primitive (reference type )
// are passed by reference.

