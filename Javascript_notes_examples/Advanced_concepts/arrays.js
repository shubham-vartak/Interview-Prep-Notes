// lets create a new array 

let fisrtArray = [100, 'shubham', null, true, {likes : '1 million', name : 'Shubham'}];
 console.log(fisrtArray);
 console.log(fisrtArray[1]); // access the values of array.
 console.log(fisrtArray[4].likes);
 console.log(fisrtArray[4].name);

// 

// for loop 

 for(let i = 0; i<=4;i++){
     console.log(fisrtArray[i]);
}

//for each loop

fisrtArray.forEach(function(value){
    console.log(value);
});

