
// The GET method requests a representation of the specified resource. Requests using GET should only retrieve data. By default, fetch performs a GET operation, so it requires no other configuration.

// making a call to database.json
fetch("http://localhost:8088/food")
    //parse results of fetch request to json
    .then(foods => foods.json()) // what is this doing?
    .then(parsedFoods => {
        // display json data in the console
        console.log(parsedFoods)
        parsedFoods.forEach(food => {
            // console.log("food", food)
            // console.log(food.name)
        })
    })


// // written out with a normal function instead of fat arrow
// fetch("http://localhost:8088/food")
//     //parse results of fetch request to json
//     .then(function (foods) {
//     return foods.json()
//     })
//     .then(function (taco) {
//     // display json data in the console
//     console.table(taco)
//     })