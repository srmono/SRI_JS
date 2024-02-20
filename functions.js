// create function 
// call function 
// passing params
// passing additional params
// call function without () 
// arguments
// hoisting 
// self invoking function 

// function sayHello(){
//     console.log("Hello I am a function")
// }

// sayHello()

// return
var x = 10;

function calc(a){
    return a * a;
}

//console.log(calc(x))

//calc() // function call

// without () : it returns itself
var newCalc = calc 

//newCalc(x)


//total of values passed 

var prices = [30,45,78,234]

// function totalPrices(itemValues){

//     var total = 0;

//     for(p of itemValues){
//         total += p
//     }

//     return total;
// }

//arguments 
console.log(
    totalPrices(34,56,78)
)

function totalPrices(){

    //console.log(arguments)

    var total = 0;

    for(p of arguments){
        total += p
    }

    return total;
}

//literal way
// console.log(
//     sum(10)
// )
var sum = function(a){
    return a + a
}

console.log(
    sum(10)
)
// ----------------

//self invoking function
//()()
//myFunc()
// (function(){
//     alert("I am a function")
// })() 


