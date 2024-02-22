function sayHi() {
    alert("hello")
}

//document.getElementById('btn').onclick = sayHi

var prod  = document.getElementById('product')
var fav = document.getElementById('fav')

function openAnotherPage(){
    console.log("Open page funcitonality")
}

function addtofav(){
    console.log("added to favorite")
}

// by default bubbling phase
// by passing true, you can change to capturing phase
prod.addEventListener('click', openAnotherPage, true)

fav.addEventListener('click', addtofav, true)