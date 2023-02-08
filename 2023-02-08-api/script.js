const randomJokeButton = document.querySelector('#random-joke');
const jokeParagraph = document.querySelector('#joke');

randomJokeButton.addEventListener('click', () => {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(joke => {
      jokeParagraph.textContent = joke.value;
    })
})