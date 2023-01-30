let numbersWrapper = document.getElementById('numbers');

let numberDisplay = document.createElement('h3');

let minusButton = document.createElement('button');
let plusButton = document.createElement('button');
let resetButton = document.createElement('button');

numbersWrapper.append(numberDisplay, minusButton, plusButton, resetButton);

numberDisplay.textContent = 5;
minusButton.textContent = '-';
plusButton.textContent = '+';
resetButton.textContent = 'Reset';

numberDisplay.style.color = 'green';

minusButton.addEventListener('click', () => {
  numberDisplay.textContent--;
  
  if (numberDisplay.textContent < 2) {
    minusButton.setAttribute('disabled', true);
  }
  
  plusButton.removeAttribute('disabled');

  if (numberDisplay.textContent > 4) {
    numberDisplay.style.color = 'green';
  } else {
    numberDisplay.style.color = 'red';
  }
})

plusButton.addEventListener('click', () => {
  numberDisplay.textContent++;

  if (numberDisplay.textContent > 9) {
    plusButton.setAttribute('disabled', true);
  }

  minusButton.removeAttribute('disabled');

  if (numberDisplay.textContent > 4) {
    numberDisplay.style.color = 'green';
  } else {
    numberDisplay.style.color = 'red';
  }
})

resetButton.addEventListener('click', () => {
  numberDisplay.textContent = 5;
  plusButton.removeAttribute('disabled');
  minusButton.removeAttribute('disabled');
})