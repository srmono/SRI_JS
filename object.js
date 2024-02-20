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

person.gerProf = function(){
    return this.profession
}

