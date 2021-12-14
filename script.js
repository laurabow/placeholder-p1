// const DOMAIN = "https://api.spoonacular.com/recipes/random";
// const apiKey = "6828013b9cb841fa99a28230ff495cab";
// const baseUrl = "https://api.spoonacular.com/recipes/random?apiKey=${apiKey}";

const baseUrl = "www.themealdb.com/api/json/v1/1/random.php";

const recipeButton = document.querySelector("#recipe-button");
const randomRecipe = document.querySelector("#recipe");
const ingredientsList = document.querySelector("#ingredients");

// Recipe Name:
async function fetchRecipeName() {
  try {
    const baseUrl = "www.themealdb.com/api/json/v1/1/random.php";
    let res = await axios.get(`https://boiling-mountain-84087.herokuapp.com/${baseUrl}`)
    // console.log(res.data.meals[0]);
    const recipe = res.data.meals[0];
    console.log(recipe);
    const mealName = recipe.strMeal;
    // console.log(mealName);
    const h2 = document.createElement("h2");
    h2.innerText = mealName;
    randomRecipe.appendChild(h2);
  } catch (error) {
    console.log(error);
  }
}
fetchRecipeName();

// TODO: fix formatting of ingredients list:
async function fetchIngredients() {
  try {
    const baseUrl = "www.themealdb.com/api/json/v1/1/random.php";
    let res = await axios.get(`https://boiling-mountain-84087.herokuapp.com/${baseUrl}`)
    const recipe = res.data.meals[0];
    // console.log(recipe);
    // fix these so they list on individual bullet points:
    const ingredients = [`${recipe.strMeasure1} ${recipe.strIngredient1}`, `${recipe.strMeasure2} ${recipe.strIngredient2}`, `${recipe.strMeasure3} ${recipe.strIngredient3}`, `${recipe.strMeasure4} ${recipe.strIngredient4}`, `${recipe.strMeasure5} ${recipe.strIngredient5}`, `${recipe.strMeasure6} ${recipe.strIngredient6}`, `${recipe.strMeasure7} ${recipe.strIngredient7}`, `${recipe.strMeasure8} ${recipe.strIngredient8}`, `${recipe.strMeasure9} ${recipe.strIngredient9}`, `${recipe.strMeasure10} ${recipe.strIngredient10}`, `${recipe.strMeasure11} ${recipe.strIngredient11}`, `${recipe.strMeasure12} ${recipe.strIngredient12}`, `${recipe.strMeasure13} ${recipe.strIngredient13}`, `${recipe.strMeasure14} ${recipe.strIngredient14}`, `${recipe.strMeasure15} ${recipe.strIngredient15}`, `${recipe.strMeasure16} ${recipe.strIngredient16}`, `${recipe.strMeasure17} ${recipe.strIngredient17}`, `${recipe.strMeasure18} ${recipe.strIngredient18}`, `${recipe.strMeasure19} ${recipe.strIngredient19}`, `${recipe.strMeasure20} ${recipe.strIngredient20}`];
    for (let i = 0; i < ingredients.length; i++) {
      const li = document.createElement("li");
      li.innerText = ingredients;
      randomRecipe.appendChild(li);
    };
  } catch (error) {
    console.log(error);
  }
}
fetchIngredients();

// Instructions:
async function fetchInstructions() {
  try {

    const baseUrl = "www.themealdb.com/api/json/v1/1/random.php";
    let res = await axios.get(`https://boiling-mountain-84087.herokuapp.com/${baseUrl}`)
    const recipe = res.data.meals[0];
    // console.log(recipe);
    const instructions = recipe.strInstructions;
    const p = document.createElement("p");
    p.innerText = instructions;
    randomRecipe.appendChild(p);
  } catch (error) {
    console.log(error);
  }
}
fetchInstructions();

// Recipe Image:
async function fetchImg() {
  try {
    const baseUrl = "www.themealdb.com/api/json/v1/1/random.php";
    let res = await axios.get(`https://boiling-mountain-84087.herokuapp.com/${baseUrl}`)
    const recipe = res.data.meals[0];
    // console.log(recipe);
    const recipePic = recipe.strMealThumb;
    const img = document.createElement("img");
    img.src = recipePic;
    randomRecipe.appendChild(img);
  } catch (error) {
    console.log(error);
  }
}
fetchImg();

// Add youtube link?




// function handleClick() {
//   fetchRecipe();
//   recipes.forEach((recipe) => {
//     console.log(recipes.title);
//     let h2 = document.createElement("h2");
//     h2.innerText = recipes.title;
//     randomRecipe.appendChild(h2);
//   });
// }

// function renderRecipe() {
//   recipes.forEach((recipe) => {
//     console.log(recipes.title);
//     let h2 = document.createElement("h2");
//     h2.innerText = recipes.title;
//     randomRecipe.appendChild(h2);
//   });
// }

// recipeButton.addEventListener("click", handleClick);