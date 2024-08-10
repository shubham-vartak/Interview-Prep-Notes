// Object oriented Language

let student = {
    rollNo : 35,
    name : 'Shubham Vartak',
    Class : 'First',
    division : 'C'
};

console.log(student);
// First way to access object by dot notation
console.log(student.name);
console.log(student.rollNo);
console.log(student.Class);

// Second way to access object property name by using under []
console.log(student['rollNo']);
console.log(student['Class']);

console.log(typeof student);

// we can also delete any property from object by using delete
delete student.division;
console.log(student);

// Same way we can add it also
student.year = 'third';

console.log(student);