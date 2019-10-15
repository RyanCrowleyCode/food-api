// Practice: Displaying Foods
// Once you have retrieved all of the foods from your own Food API, display each one of them in the DOM. Create an HTML representation of each food which will display the name of the food, its type, and its ethnicity.
fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => { //Got stuff from JSON, have JS Array now that we will call "parsedFoods"
        parsedFoods.forEach (food => {
            const foodAsHTML = htmlString(food)
            addFoodToDom(foodAsHTML)
        })
    })

// Create a DOM element in your index.html with a class of foodList.
const foodContainer = document.querySelector(".foodList")

// Create a function which returns a string template. The template is the HTML representation for a food item.

const htmlString = food => {
    return `
    <h2 class="food-name">${food.name}</h2>
    <div class="food-ethnicity">${food.ethnicity}</div>
    <div class="food-categor">${food.category}</div>

    `
}
// Create a function that inserts an HTML representation of a food into the DOM
const addFoodToDom = foodTemplate => {
    const foodDiv = document.createElement('div')
    foodDiv.className = "foodItem"
    foodDiv.innerHTML = foodTemplate
    foodContainer.appendChild(foodDiv)
}



// Use Flexbox row direction so that you have a horizontal list of items.

