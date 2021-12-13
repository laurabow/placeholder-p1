// const DOMAIN = "https://api.spoonacular.com/recipes/random";
// const apiKey = "6828013b9cb841fa99a28230ff495cab";
// const baseUrl = "https://api.spoonacular.com/recipes/random?apiKey=${apiKey}";

const baseUrl = "www.themealdb.com/api/json/v1/1/random.php";

const recipeButton = document.querySelector("#recipe-button");
const randomRecipe = document.querySelector("#recipe");

async function fetchRecipeName() {
  try {
    const baseUrl = "www.themealdb.com/api/json/v1/1/random.php";
    let res = await axios.get(`https://boiling-mountain-84087.herokuapp.com/${baseUrl}`)
    // console.log(res.data.recipes[0]);
    // const recipes = res.data.recipes[0];
    // // console.log(recipes);
    // const recipeTitle = recipes.title;
    // // console.log(recipeTitle);
    // const h2 = document.createElement("h2");
    // h2.innerText = recipeTitle;
    // randomRecipe.appendChild(h2);
  } catch (error) {
    console.log(error);
  }
}
fetchRecipeName();

async function fetchIngredients() {
  try {

    const baseUrl = "www.themealdb.com/api/json/v1/1/random.php";
    let res = await axios.get(`https://boiling-mountain-84087.herokuapp.com/${baseUrl}`)
    // console.log(res.data.recipes[0]);
    // const recipes = res.data.recipes[0];
    // // console.log(recipes);
    // const ingredients = recipes.extendedIngredients;
    // const p = document.createElement("p");
    // p.innerText = ingredients;
    // randomRecipe.appendChild(p);
  } catch (error) {
    console.log(error);
  }
}
fetchIngredients();

async function fetchInstructions() {
  try {

    const baseUrl = "www.themealdb.com/api/json/v1/1/random.php";
    let res = await axios.get(`https://boiling-mountain-84087.herokuapp.com/${baseUrl}`)
    // console.log(res.data.recipes[0]);
    // const recipes = res.data.recipes[0];
    // console.log(recipes);
    // const instructions = recipes.instructions;
    // const p = document.createElement("p");
    // p.innerText = instructions;
    // randomRecipe.appendChild(p);
  } catch (error) {
    console.log(error);
  }
}
fetchInstructions();

async function fetchImg() {
  try {

    const baseUrl = "www.themealdb.com/api/json/v1/1/random.php";
    let res = await axios.get(`https://boiling-mountain-84087.herokuapp.com/${baseUrl}`)
    // console.log(res.data.recipes[0]);
    // const recipes = res.data.recipes[0];
    // // console.log(recipes);
    // const recipePic = recipes.image;
    // const img = document.createElement("img");
    // img.src = recipes.recipePic;
    // randomRecipe.appendChild(p);
  } catch (error) {
    console.log(error);
  }
}
fetchImg();


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