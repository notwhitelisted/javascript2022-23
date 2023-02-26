import '/core-js/stable';
import '/regenerator-runtime/runtime';

import * as model from './model.js';
import recipeView from './views/recipeView.js';

const recipeContainer = document.querySelector('.recipe');


// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function() {
  try {
    const id = window.location.hash.slice(1);;
    console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    //1. loading recipe
    await model.loadRecipe(id);
    const { recipe } = model.state;

    //2. rendering recipe
    recipeView.render(model.state.recipe);

  } catch (err) {
    // console.error(err);
    recipeView.renderError();
  }
}

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await model.loadSearchResults(query);

    // 3) Render results
    resultsView.render(model.getSearchResultsPage());

    // 4) Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const init = function() {
  recipeView.addHandlerRender(controlRecipes);
}
init();


// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);