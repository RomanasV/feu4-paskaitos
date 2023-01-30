let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');
let h4 = document.querySelector('h4');
let h5 = document.querySelector('h5');
let button = document.querySelector('button');

h1.addEventListener('click', function() {
  h1.style.backgroundColor = 'pink';
  h1.style.color = 'green';
  h1.textContent = 'Clicked';
});

h2.addEventListener('click', () => {
  h2.style.fontSize = '50px';
})

h3.addEventListener('click', () => {
  h3.style.color = 'purple';
  h1.style.color = 'purple';
});

// h4.addEventListener('click', () => {
//   changeBorderColors();
// })

// h5.addEventListener('click', () => {
//   changeBorderColors();
// })

h4.addEventListener('click', changeBorderColors);
h5.addEventListener('click', changeBorderColors);

function changeBorderColors() {
  h2.style.border = '2px solid orange';
  h5.style.border = '3px dashed green';
  h1.style.border = '5px dotted blue';
}

button.addEventListener('click', () => {
  document.body.classList.toggle('active-body');

  button.classList.toggle('active');

  if (button.classList.contains('active')) {
    document.body.style.backgroundColor = '#bbb';
  } else {
    document.body.style.backgroundColor = '';
  }
})