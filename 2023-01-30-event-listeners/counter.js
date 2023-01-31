let numbersWrapper = document.getElementById('numbers');

let numberInput = document.createElement('input');
let numberDisplay = document.createElement('h3');

let minusButton = document.createElement('button');
let minus2Button = document.createElement('button');
let minus5Button = document.createElement('button');
let plusButton = document.createElement('button');
let plus2Button = document.createElement('button');
let plus5Button = document.createElement('button');
let resetButton = document.createElement('button');
let saveGrade = document.createElement('button');

let gradesTitle = document.createElement('h4');
let gradesList = document.createElement('ul');

// numberInput.setAttribute('type', 'number');
numberInput.type = 'number';
numberInput.max = 10;
numberInput.min = 1;

minusButton.textContent = '-';
minus2Button.textContent = '-2';
minus5Button.textContent = '-5';
plusButton.textContent = '+';
plus2Button.textContent = '+2';
plus5Button.textContent = '+5';
resetButton.textContent = 'Reset';
saveGrade.textContent = 'Add Grade';
gradesTitle.textContent = 'Balai:';

numbersWrapper.append(numberInput, numberDisplay, minus5Button, minus2Button, minusButton, resetButton, plusButton, plus2Button, plus5Button, saveGrade, gradesTitle, gradesList);

const defaultValue = 5;
let counter = defaultValue;
checkData(0);

minusButton.addEventListener('click', () => { 
  checkData(-1);
})

minus2Button.addEventListener('click', () => {
  checkData(-2);
});

minus5Button.addEventListener('click', () => {
  checkData(-5);
});

plusButton.addEventListener('click', () => {
  checkData(1);
})

plus2Button.addEventListener('click', () => {
  checkData(2);
})

plus5Button.addEventListener('click', () => {
  checkData(5);
})

resetButton.addEventListener('click', () => {
  counter = defaultValue;
  checkData(0);
})

saveGrade.addEventListener('click', () => {
  let gradeItem = document.createElement('li');
  gradeItem.textContent = counter;
  gradeItem.style.color = numberDisplay.style.color;

  gradesList.prepend(gradeItem);

  counter = defaultValue;
  checkData(0);
})

numberInput.addEventListener('input', () => {
  if (!numberInput.valueAsNumber) {
    return;
  }
  
  if (numberInput.valueAsNumber > 10) {
    numberInput.value = 10;
  } else if (numberInput.valueAsNumber < 1) {
    numberInput.value = 1;
  }

  counter = numberInput.valueAsNumber;
  checkData(0);
})

function changeColor() {
  let color;
  
  if (counter < 5) {
    color = 'red';
  } else if (counter < 7 ) {
    color = 'orange';
  } else {
    color = 'green';
  }

  numberDisplay.style.color = color;
}

function checkData(num) {
  counter += num;
  numberDisplay.textContent = counter;
  numberInput.value = counter;

  if (counter > 9) {
    plusButton.setAttribute('disabled', true);
  } else {
    plusButton.removeAttribute('disabled');
  }

  if (counter > 8) {
    plus2Button.setAttribute('disabled', true);
  } else {
    plus2Button.removeAttribute('disabled');
  }

  if (counter > 5) {
    plus5Button.setAttribute('disabled', true);
  } else {
    plus5Button.removeAttribute('disabled');
  }

  if (counter > 5) {
    minus5Button.removeAttribute('disabled');
  } else {
    minus5Button.setAttribute('disabled', true);
  }

  if (counter > 2) {
    minus2Button.removeAttribute('disabled');
  } else {
    minus2Button.setAttribute('disabled', true);
  }

  if (counter > 1) {
    minusButton.removeAttribute('disabled');
  } else {
    minusButton.setAttribute('disabled', true);
  }

  changeColor();
}

// 12. Sukurti du naujus mygtukus, kurie:
// 12.1. Prideda dvejetą prie esamos h3 elemento reikšmės.
// 12.2. Atima dvejetą iš esamos h3 elemento reikšmės.