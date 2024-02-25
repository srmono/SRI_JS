let promise = new Promise( (resolve, reject) => {
    setTimeout( () => {
        // console.log("user is available")
        // resolve( {user: "venkat"})

        reject( new Error("No User"))
    }, 5000)
})

promise
    .then( (result) => console.log(result))
    .catch( err => console.log(err))
    .finally( () => console.log("final message"))