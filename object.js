//singleton pattern
var person = {
    name: "venkat",
    age: 36,
    skills: [ "html", "css", "js"],
    address: {
        city: "bangalore"
    },
    getName: function(){
        return this.name
    },
    setName: function(n){
        this.name = n
    }
}
//person.name 
person.age = 46
//person.getName()
//person.setName("Sri")

person.profession = "Trainer"

person.getProf = function(){
    return this.profession
}


// Constructor Pattern
function Laptop(color, brand, ram){

    this.color = color;
    this.brand = brand;
    this.ram = ram;

    this.getBrand = function(){
        return this.brand
    }

    this.setBrand = function(newBrand){
        this.brand = newBrand
    }
}

//Laptop.os = "linux"

Laptop.prototype.os = "linux"

let laptopOne = new Laptop("Black", "Lenovo", "16gb");
let laptopTwo = new Laptop("Silver", "Apple", "8gb");


//laptopOne.os = 'linux'

laptopOne.cores = 4

laptopOne.getCores = function(){
    this.cores
}

//till 100 laptops
//i have missed to add the defult OS

var name  = "venkat"; //String
//name.toUpperCase()

String.prototype.myOwnUpperCase = function(){
    return this.toUpperCase()
}

var arr = [];
//Array.prototype.yourownmethods = () => {}
//var arr = new Array()
arr[0] = 12

//laptopOne.brand
//laptopOne.color