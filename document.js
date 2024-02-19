//create element
var h1El = document.createElement('div');

//Add element to body
document.body.appendChild(h1El)

//add text to element
var text = document.createTextNode("Java Script");

h1El.appendChild(text)

// add attributes
h1El.setAttribute('id','myid')

// Remove the element
//h1El.remove()
h1El.innerHTML = "<h1> Some Text </h1>"


