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
    const ingredients = [`${recipe.strMeasure1} of ${recipe.strIngredient1}`, `${recipe.strMeasure2} of ${recipe.strIngredient2}`, `${recipe.strMeasure3} of ${recipe.strIngredient3}`, `${recipe.strMeasure4} of ${recipe.strIngredient4}`, `${recipe.strMeasure5} of ${recipe.strIngredient5}`, `${recipe.strMeasure6} of ${recipe.strIngredient6}`, `${recipe.strMeasure7} of ${recipe.strIngredient7}`, `${recipe.strMeasure8} of ${recipe.strIngredient8}`, `${recipe.strMeasure9} of ${recipe.strIngredient9}`, `${recipe.strMeasure10} of ${recipe.strIngredient10}`, `${recipe.strMeasure11} of ${recipe.strIngredient11}`, `${recipe.strMeasure12} of ${recipe.strIngredient12}`, `${recipe.strMeasure13} of ${recipe.strIngredient13}`, `${recipe.strMeasure14} of ${recipe.strIngredient14}`, `${recipe.strMeasure15} of ${recipe.strIngredient15}`, `${recipe.strMeasure16} of ${recipe.strIngredient16}`, `${recipe.strMeasure17} of ${recipe.strIngredient17}`, `${recipe.strMeasure18} of ${recipe.strIngredient18}`, `${recipe.strMeasure19} of ${recipe.strIngredient19}`, `${recipe.strMeasure20} of ${recipe.strIngredient20}`];
    const li = document.createElement("li");
    li.innerText = ingredients;
    randomRecipe.appendChild(li);
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