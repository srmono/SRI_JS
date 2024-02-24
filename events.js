// What are event
// types of events
// best way to bind the events (html, direct, addEventListener)
// bubbling phase
// event object
// capturing phase
// target phase
// target
// current target
// stopPropagation
// stopImmediatePropagation
// preventDefault()

function sayHi() {
    alert("hello")
}

//document.getElementById('btn').onclick = sayHi
var anchorEl = document.getElementById('anc')
var prod  = document.getElementById('product')
var fav = document.getElementById('fav')

function openAnotherPage(e){
    //e.stopPropagation();
    //console.log(e.target) /// targetted element
    console.log(e.currentTarget) // the element where event attached
    console.log("Open page funcitonality")
}

function addtofav(e){
    e.stopPropagation()
    console.log("added to favorite")
}

function addtofav_1(e){
    // e.stopPropagation()
    if(true){
        e.stopImmediatePropagation()
    }
    console.log("added to favorite 2nd ")
}

function addtofav_2(e){
    // e.stopPropagation()
    console.log("added to favorite 3rd")
}

function dothis(e){
    e.preventDefault();

    console.log("I am able to prevent default actions")
    
}

// by default bubbling phase
// by passing true, you can change to capturing phase
//Element.addEventListener('event_name/type of even', function, true/false )
//prod.addEventListener('click', openAnotherPage, true)
prod.addEventListener('click', openAnotherPage)

anchorEl.addEventListener('click', dothis)

//fav.addEventListener('click', addtofav)
// fav.addEventListener('click', addtofav_1)
// fav.addEventListener('click', addtofav_2)
