// const DOMAIN = "https://api.spoonacular.com/recipes/random";
// const apiKey = "6828013b9cb841fa99a28230ff495cab";
// const baseUrl = "https://api.spoonacular.com/recipes/random?apiKey=${apiKey}";

const recipeButton = document.querySelector("#recipe-button");


async function fetchRecipe() {
  try {
    const apiKey = "6828013b9cb841fa99a28230ff495cab";
    const baseUrl = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`;
    let res = await axios.get(`https://boiling-mountain-84087.herokuapp.com/${baseUrl}`)
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
fetchRecipe();