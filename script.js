// const DOMAIN = "https://api.spoonacular.com/recipes/random";
// const apiKey = "6828013b9cb841fa99a28230ff495cab";
// const baseUrl = "https://api.spoonacular.com/recipes/random?apiKey=${apiKey}";

const recipeButton = document.querySelector("#recipe-button");
const randomRecipe = document.querySelector("#recipe");

async function fetchRecipe() {
  try {
    const apiKey = "6828013b9cb841fa99a28230ff495cab";
    const baseUrl = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`;
    let res = await axios.get(`https://boiling-mountain-84087.herokuapp.com/${baseUrl}`)
    // console.log(res.data.recipes[0]);
    const recipes = res.data.recipes[0];
    console.log(recipes);
    const recipeTitle = recipes.title;
    console.log(recipeTitle);
    const ingredients = recipes.extendedIngredients;
    console.log(ingredients);
    const instructions = recipes.instructions;
    console.log(instructions);
    renderRecipe();
  } catch (error) {
    console.log(error);
  }
}
fetchRecipe();



function handleClick() {
  fetchRecipe();
};

function renderRecipe() {
  recipes.forEach((recipe) => {
    console.log(recipes.title);
  });
}

recipeButton.addEventListener("click", handleClick);