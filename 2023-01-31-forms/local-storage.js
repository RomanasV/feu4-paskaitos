localStorage.setItem('test', 'labas');
localStorage.removeItem('test');
console.log(localStorage.getItem('test'));

const input = document.querySelector('form input');

input.value = localStorage.getItem('input-field');

input.addEventListener('input', (event) => {
  localStorage.setItem('input-field', input.value);
})