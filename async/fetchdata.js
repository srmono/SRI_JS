async function getUserDetails(){
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    //let response = await fetch("https://jsonplaceholder.typicode.com/users")
    //console.log(response.json())
    let userData = await response.json()

    console.log(userData)

    var output = `
        <div>
            <h2> user details</h2>
            <p> Name: ${userData.name}</p>
            <p> Email: ${userData.email}</p>
            <p> Phone: ${userData.phone}</p>
        </div>
    `

    document.getElementById('userData').innerHTML = output


}

getUserDetails()