// variables

var a; // declarando
var b = 'b'; // declarando / asignamos
b = 'bb'; // reasignación
var a = 'aa0' // redeclaración


// Global Scope
var fruit = 'Apple'; // global
console.log(fruit);

function bestFruit(){
    console.log(fruit);
}

bestFruit();


function countries(){
    country = 'Colombia'; // global
    console.log(country);
}

countries();
console.log(country);