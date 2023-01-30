let numbersWrapper = document.getElementById('numbers');

let numberDisplay = document.createElement('h3');

let minusButton = document.createElement('button');
let minus2Button = document.createElement('button');
let plusButton = document.createElement('button');
let plus2Button = document.createElement('button');
let resetButton = document.createElement('button');

numbersWrapper.append(numberDisplay, minus2Button, minusButton, resetButton, plusButton, plus2Button);

numberDisplay.textContent = 5;
minusButton.textContent = '-';
minus2Button.textContent = '-2';
plusButton.textContent = '+';
plus2Button.textContent = '+2';
resetButton.textContent = 'Reset';

changeColor();

minusButton.addEventListener('click', () => {
  numberDisplay.textContent = Number(numberDisplay.textContent) - 1;
  
  if (numberDisplay.textContent < 3) {
    minus2Button.setAttribute('disabled', true);
  }

  if (numberDisplay.textContent < 2) {
    minusButton.setAttribute('disabled', true);
  }

  if (numberDisplay.textContent < 9) {
    plus2Button.removeAttribute('disabled');
  }
  
  if (numberDisplay.textContent < 10) {
    plusButton.removeAttribute('disabled');
  }

  changeColor();
})

minus2Button.addEventListener('click', () => {
  numberDisplay.textContent = Number(numberDisplay.textContent) - 2;

  if (numberDisplay.textContent < 3) {
    minus2Button.setAttribute('disabled', true);
  }

  if (numberDisplay.textContent < 2) {
    minusButton.setAttribute('disabled', true);
  }

  if (numberDisplay.textContent < 9) {
    plus2Button.removeAttribute('disabled');
  }

  if (numberDisplay.textContent < 10) {
    plusButton.removeAttribute('disabled');
  }

  changeColor();
});

plusButton.addEventListener('click', () => {
  numberDisplay.textContent = Number(numberDisplay.textContent) + 1;

  if (numberDisplay.textContent > 9) {
    plusButton.setAttribute('disabled', true);
  }

  if (numberDisplay.textContent > 8) {
    plus2Button.setAttribute('disabled', true);
  }

  if (numberDisplay.textContent > 2) {
    minus2Button.removeAttribute('disabled');
  }

  if (numberDisplay.textContent > 0) {
    minusButton.removeAttribute('disabled');
  }

  changeColor();
})


plus2Button.addEventListener('click', () => {
  numberDisplay.textContent = Number(numberDisplay.textContent) + 2;

  if (numberDisplay.textContent > 9) {
    plusButton.setAttribute('disabled', true);
  }

  if (numberDisplay.textContent > 8) {
    plus2Button.setAttribute('disabled', true);
  }

  if (numberDisplay.textContent > 2) {
    minus2Button.removeAttribute('disabled');
  }

  if (numberDisplay.textContent > 0) {
    minusButton.removeAttribute('disabled');
  }

  changeColor();
})

resetButton.addEventListener('click', () => {
  numberDisplay.textContent = 5;
  plusButton.removeAttribute('disabled');
  plus2Button.removeAttribute('disabled');
  minusButton.removeAttribute('disabled');
  minus2Button.removeAttribute('disabled');
  changeColor();
})

function changeColor() {
  if (numberDisplay.textContent > 4) {
    numberDisplay.style.color = 'green';
  } else {
    numberDisplay.style.color = 'red';
  }
}


// 12. Sukurti du naujus mygtukus, kurie:
// 12.1. Prideda dvejetą prie esamos h3 elemento reikšmės.
// 12.2. Atima dvejetą iš esamos h3 elemento reikšmės.