const randomJokeButton = document.querySelector('#random-joke');
const jokeParagraph = document.querySelector('#joke');

randomJokeButton.addEventListener('click', () => {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(joke => {
      jokeParagraph.textContent = joke.value;
    })
})

const categorySelect = document.querySelector('#category-select');

fetch('https://api.chucknorris.io/jokes/categories')
  .then(res => res.json())
  .then(categories => {
    categories.map(category => {
      const categoryOption = document.createElement('option');
      categoryOption.textContent = category;
      categorySelect.append(categoryOption);
    })

    document.querySelector('#category-submit-button').removeAttribute('disabled');
  })

const categoryForm = document.querySelector('#category-form');

categoryForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const selectedCategory = event.target.category.value;
  // const selectedCategory = categorySelect.value;

  fetch('https://api.chucknorris.io/jokes/random?category=' + selectedCategory)
    .then(res => res.json())
    .then(joke => {
      jokeParagraph.textContent = joke.value;
    })
})

const searchForm = document.querySelector('#search-form');
searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const searchQuery = event.target['search-input'].value;

  console.log(searchQuery)

  fetch('https://api.chucknorris.io/jokes/search?query=' + searchQuery)
    .then(res => res.json())
    .then(data => {
      const jokesCount = data.total;

      if (data.error) {
        jokeParagraph.textContent = `${data.error} (${data.message})`;
        return;
      }

      if (jokesCount > 0) {       
        const jokesList = data.result;
        const index = Math.floor(Math.random() * jokesCount);
        const randomJoke = jokesList[index];
        jokeParagraph.textContent = randomJoke.value;
        return;
      }

      jokeParagraph.textContent = 'No jokes :(';
    })
});