let numbersWrapper = document.getElementById('numbers');

let numberDisplay = document.createElement('h3');

let minusButton = document.createElement('button');
let plusButton = document.createElement('button');

numbersWrapper.append(numberDisplay, minusButton, plusButton);

numberDisplay.textContent = 5;
minusButton.textContent = '-';
plusButton.textContent = '+';

minusButton.addEventListener('click', () => {
  numberDisplay.textContent--;
})

plusButton.addEventListener('click', () => {
  numberDisplay.textContent++;
})
