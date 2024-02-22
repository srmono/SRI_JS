//arrow functions 

// function myfunc(){
//     console.log("I am a function")
// }

// var myfunc = () => {
//     console.log("I am a function")
// }

//var myfunc = () => "I am a function"

//var myfunc = (name) => `Hello ${name}`
//var myfunc = name => `Hello ${name}`
var myfunc = (name,prof) => `Hello ${name}, your profession is ${prof}`

var calc = (prices) => {
    var total = 0;

    for(p of prices){
        total += p
    }

    return total;
}

//myfunc()