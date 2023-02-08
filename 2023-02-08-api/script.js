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