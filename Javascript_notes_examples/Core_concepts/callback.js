function greeting(name){
    console.log(`hello ${name}`);
}

function getUsserInput(callback){
    var name = prompt('Please Enter your name - ');
    callback(name);
}

getUsserInput(greeting)