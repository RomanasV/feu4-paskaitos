// UŽDUOTIS (reduce):
// 1. Sukurti 10-ies skaičių masyvą.
let numbersArray = [4, 65, -8, 8, -91, 1, 3, 8498, 188, -6165, 2, 516, 7, 5151, 651, 11, 78, -787, -20, 100, 456, -444];

// 2. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina jų vidurkį.
// 2.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) vidurkis yra 15"

function task2(nums) {
  let numsToStr = arrToString(nums);

  let total = nums.reduce((sum, current) => sum + current);
  let average = total / nums.length;

  renderText(numsToStr, 'vidurkis', average, '#task-2');
}

task2(numbersArray);

// 3. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina jų medianą.
// 3.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) mediana yra 15"

function task3(nums) {
  let numsToStr = arrToString(nums);

  let median;
  let middleIndex = Math.floor(nums.length / 2);

  if (nums.length % 2 === 0) {
    let middleIndex2 = middleIndex - 1;
    median = (nums[middleIndex] + nums[middleIndex2]) / 2;
  } else {
    median = nums[middleIndex];
  }

  renderText(numsToStr, 'mediana', median, '#task-3');
}

task3(numbersArray);

// 4. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina didžiausia jame esantį skaičių.
// 4.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) didžiausias skaičius yra 15"

function task4(nums) {
  let numsToStr = arrToString(nums);

  // let max = nums[nums.length - 1];
  let max = Math.max(...nums);

  renderText(numsToStr, 'didžiausias skaičius', max, '#task-4');
}

task4(numbersArray);

// 5. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina mažiausią jame esantį skaičių.
// 5.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) mažiausias skaičius yra 1"

function task5(nums) {
  let numsToStr = arrToString(nums);

  // let min = nums[0];
  let min = Math.min(...nums);

  renderText(numsToStr, 'mažiausias skaičius', min, '#task-5');
}

task5(numbersArray);

// 6. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina n-tąjį skaičių pagal dydį (skaičiuojant nuo mažiausio iki didžiausio).
// 6.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) 3 skaičius pagal dydį yra 3"

function task6(nums, nth) {
  let numsToStr = arrToString(nums);

  let index = nth - 1;
  let nthNumber = nums[index];

  let text = `${nth} skaičius pagal dydį`;
  
  renderText(numsToStr, text, nthNumber, '#task-6');
}

task6(numbersArray, 15);

function arrToString(arr) {
  arr.sort((a, b) => a - b);
  // let str = nums.join(', ');
  let str = arr.reduce((str, current) => str + ', ' + current);
  return str;
}

function renderText(numsToStr, text, answer, selector) {
  let output = `Skaičių (${numsToStr}) ${text} yra ${answer}.`;

  let htmlElement = document.querySelector(selector);
  htmlElement.textContent = output;
}