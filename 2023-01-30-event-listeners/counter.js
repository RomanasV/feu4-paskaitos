// Užduotis:
// 1. Sukurti HTML elementą, kurio id „numbers"
// let numbersWrapper = document.querySelector('#numbers');
let numbersWrapper = document.getElementById('numbers');

// 2. JavaScript pagalba šio elemento viduje sukurti: h3 elementą ir du mygtukų elementus
let numberDisplay = document.createElement('h3');

let minusButton = document.createElement('button');
let plusButton = document.createElement('button');

// numbersWrapper.append(numberDisplay);
// numbersWrapper.append(minusButton);
// numbersWrapper.append(plusButton);

numbersWrapper.append(numberDisplay, minusButton, plusButton);

// 3. h3 elemento tekstas turėtų būti „5"
numberDisplay.textContent = 5;
// 4. Mygtukų tekstas turėtų būti „+" ir „-"
minusButton.textContent = '-';
plusButton.textContent = '+';

// 5. Sukurti „click" (paspaudimo) event listener'ius abiems mygtukams.
// 6. „-" mygtuko event listeneris turėtų iškviesti funkciją, kuri sumažina skaičių h3 elemente, o „+" mygtuko paspaudimas turėtų skaičių padidinti

minusButton.addEventListener('click', () => {
  numberDisplay.textContent--;
})

plusButton.addEventListener('click', () => {
  numberDisplay.textContent++;
})
