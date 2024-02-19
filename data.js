// Data Types Primary Data Types
var name = "venkat"; //String
var price = 120.50; //Number , Float
var bool = true; // Boolean true/false

//null and undefined
var data = null; // Null is special data type
var address; //undefined

//console.log(x) //Uncaught ReferenceError: x is not defined

// Complex data types 

//Array
var tools = [ "html", "css", "js", name, 180, ['jenkins', "docker"] ]
console.log(tools[0])
console.log(tools[5][1])

//Object
var person = {
    name: "venkat",
    age: 36,
    skills: [ "html", "css", "js"],
    address: {
        city: "bangalore"
    },
    getName: function(){
        return this.name
    }
}

// person.name
person.age = 32
// person.skills[1]
// person.address.city
console.log(person.name) 

// functions 
function myFunc(x){
    return x * x
}

//myFunc(3)

var name = "javascript"

console.log(name)