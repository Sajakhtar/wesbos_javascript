// console.log('it works');

const baseEndpoint = `http://www.recipepuppy.com/api/`;
const proxy = 'https://cors-anywhere.herokuapp.com/';

const form = document.querySelector('form.search');
const recipesGrid = document.querySelector('.recipes');

async function fetchRecipes(query) {
        const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
        const data = await res.json();
        // console.log(data);
        return data;
}

function displayRecipes(recipes) {
        // console.log('creating HTML');
        // console.log(recipes);

        const html = recipes.map(
                (recipe) => `<div class="recipe">
                <h2>${recipe.title}</h2>
                <p>${recipe.ingredients}</p>
                ${recipe.thumbnail && `<img src="${recipe.thumbnail}" alt="${recipe.title}">`}
                <a href="${recipe.href}">View Recipe →</a>
            </div>`
        );
        // console.log(html);
        recipesGrid.innerHTML = html.join('');
}

async function handleSubmit(e) {
        e.preventDefault();
        const el = e.currentTarget;
        // console.log(el.query.value); // pizza default value

        // // turn form off
        // el.submit.disabled = true;

        // // submit the search
        // const recipes = await fetchRecipes(el.query.value);
        // // console.log(recipes);

        // // turn form on
        // el.submit.disabled = false;

        // // render html
        // displayRecipes(recipes.results);
        fetchAndDisplay(el.query.value);
}

async function fetchAndDisplay(query) {
        // turn form off
        form.submit.disabled = true;

        // submit the search
        const recipes = await fetchRecipes(query);
        // console.log(recipes);

        // turn form on
        form.submit.disabled = false;

        // render html
        displayRecipes(recipes.results);
}

form.addEventListener('submit', handleSubmit);

// fetchRecipes('pizza');

// run on page load with pizza
fetchAndDisplay('pizza');
