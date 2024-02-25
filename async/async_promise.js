function userLogin(user, pw){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log("user logged in")
            resolve({username: user})
        }, 5000)
    })
}

function getUserProjects(uname ){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log("Returing projects")
            resolve(
                ["Proj1", "Proj2", "Proj3"]
            )
        }, 5000);
    })
}

function projectDetails(proj ){

    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            // console.log("Project details here")
             resolve("Project details here ")
         }, 5000);
    })

}

// userLogin("bvsrao", "&(*&()&")
//         .then( user => getUserProjects(user) )
//         .then( projects => projectDetails(projects[0]))
//         .then( projDetails => console.log(projDetails))
//         .catch( err => console.log(err))
//         .finally( () => console.log("final message"))


async function displayUser(){
    try {
        let loggedinUser = await userLogin("bvsrao", "898080");
        let projects = await getUserProjects(loggedinUser)
        let projDetails = await projectDetails(projects[0])

        console.log(projDetails)
        
    } catch (error) {
        console.log(error)
    }
}