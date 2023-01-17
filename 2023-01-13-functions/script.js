// UŽDUOTIS:
// Į konsole išvesti apskaičiuotus keturkampio perimetrus pagal šias kraštines:
// 1. 10 ilgis ir 10 plotis.
// 2. 10 ilgis ir 25 plotis.
// 3. 10 ilgis ir 30 plotis.
// 4. 10 ilgis ir 35 plotis.
// 5. 10 ilgis ir 40 plotis.
// 6. 10 ilgis ir 45 plotis.
// 7. 10 ilgis ir 50 plotis.
// 8. 10 ilgis ir 55 plotis.
// 9. 10 ilgis ir 60 plotis.
// 10. 10 ilgis ir 120 plotis.

console.log('Perimetras: ' + (10 + 10) * 2 + ' cm.');
console.log('Perimetras: ' + (10 + 25) * 2 + ' cm.');
console.log('Perimetras: ' + (10 + 30) * 2 + ' cm.');
console.log('Perimetras: ' + (10 + 35) * 2 + ' cm.');
console.log('Perimetras: ' + (10 + 40) * 2 + ' cm.');
console.log('Perimetras: ' + (10 + 45) * 2 + ' cm.');
console.log('Perimetras: ' + (10 + 50) * 2 + ' cm.');
console.log('Perimetras: ' + (10 + 55) * 2 + ' cm.');
console.log('Perimetras: ' + (10 + 60) * 2 + ' cm.');
console.log('Perimetras: ' + (10 + 120) * 2 + ' cm.');

// DRY - Don't Repeat Yourself

// FUNKCIJOS
// Funkcijos sukūrimas:
// 1. Iniciavimo žodelio (function).
// 2. Pavadinimo.
// 3. Paprasti skliaustai () - funkcijos argumentams.
// 4. Riestiniai skliaustai {} - funkcijos apibrėžimas.

function hello() {
  console.log('Hello, John');
}

// Funkcijos iškvietimas
// 1. Funkcijos pavadinimą
// 2. Paprasti skliaustai ()

hello();

// Funkcijos su argumentais (funkcija, kuri turi besikeičiančias dalis)
function helloWithName(personName, personSurname = '') {
  // console.log('Hello, ' + personName + ' ' + personSurname + '.');

  // if (personSurname) {
  //   console.log(`Hello, ${personName} ${personSurname}`);
  // } else {
  //   console.log(`Hello, ${personName}`);
  // }

  console.log(`Hello, ${personName} ${personSurname}`);
}

helloWithName('John', 'Doe');
helloWithName('Steve');
helloWithName('Peter');
helloWithName('Mike');


function perimeter(width = 0, length = 0, units = 'cm') {
  if (width && length) {
    let answer = (width + length) * 2;
    let output = `Perimetras: ${answer} ${units}.`;
    console.log(output);
  } else {
    console.log('Įvesti neteisingi duomenys');
  }
}

perimeter(10, 20);
perimeter(10, 20, 'm');
perimeter(100, 20, 'dm');
perimeter(10, 55, 'km');
perimeter(10, 46, 'cm');
perimeter(10);
perimeter();

// Užduotis 1:
// 1. Sukurti funkciją, kuri skaičiuotų stačiakampio plotą.
// 2. Funkcija turi priimti du argumentus (ilgį ir plotį).
// 3. Funkcija turi grąžinti tekstą: „Stačiakampio plotas yra 10 kv. vnt."
// 4. Į konsolę išvesti šios funkcijos rezultatą.

function rectArea(rectWidth = 0, rectHeight = 0) {
  let answer = rectWidth * rectHeight;
  let output = `Stačiakampio plotas yra ${answer} kv. vnt.`;

  console.log(output);
}

// rectArea(15);
// rectArea(50, 159);

// Užduotis 2:
// Atlikti tą patį kaip ir pirmoje užduotyje, tačiau apskaičiuoti stačiojo trikampio plotą.

function triangleArea(triangleWidth = 0, triangleHeight = 0) {
  let answer = triangleWidth * triangleHeight / 2;
  let output = `Stačiojo trikampio plotas yra ${answer} kv. vnt.`;

  console.log(output);
}

// triangleArea(50, 20);
// triangleArea(15);

// Užduotis 3:
// Sukurti naują funkciją, kuri apjungtų šias dvi užduotis ir išvestų abu rezultatus.

function allAreas(width = 0, height = 0) {
  rectArea(width, height);
  triangleArea(width, height);
}

allAreas(100, 100);

// 1. Funkciją, kuri paverčia žmogaus metus į šuns metus:
// 1.1. Funkcija priima vieną parametrą: žmogaus amžius.
// 1.2. Funkcija grąžina atsakymą tokiu formatu: 5 žmogaus metai yra 35 šuns metai.

function humanToDogYears(humanAge) {
  let dogsAge = humanAge * 7;
  let output = `${humanAge} žmogaus metai yra ${dogsAge} šuns metai.`

  console.log(output);
}

humanToDogYears(5);

// 2. Funkciją, kuri skaičiuoja per kiek laiko reikia perskaityti knygą, kad pasiekti užsibrėžtą knygų per metaus skaičių:
// 2.1. Funkcija priima vieną parametrą: norimų per metus perskaityti knygų skaičių.
// 2.1. Funkcija grąžina atsakymą tokiu formatu: norint perskaityti 10 knygų per metus, vienai knygai perskaityti turėsi 36 dienas.

function bookDays(booksPerYear) {
  let daysPerBook = Math.round(365 / booksPerYear)
  let output = `Norint perskaityti ${booksPerYear} knygų per metus, vienai knygai perskaityti turėsi ${daysPerBook} dienas.`;
  
  console.log(output);
}

bookDays(5);

// 3. Funkciją, kuri konvertuoja dienas į savaites:
// 3.1. Funkcija priima vieną argumentą: dienų skaičių.
// 3.2. Funkcija grąžina atsakymą tokiu formatu: 35 dienos yra 5 savaitės.

function daysToWeeks(days) {
  let weeks = (days / 7).toFixed(1);
  let output = `${days} dienos yra ${weeks} savaitės.`;
  
  console.log(output);
}

daysToWeeks(100);

// 4. Funkciją, kuri konvertuoja dienas į metus:
// 4.1. Funkcija priima vieną argumentą: dienų skaičių.
// 4.1. Funkcija grąžina atsakymą tokiu formatu (atsakymą apvalinant): 365 dienos yra 1 metai.

function daysToYears(days) {
  let years = (days / 365).toFixed(2);
  let output = `${days} dienos yra ${years} metai.`;
  
  console.log(output);
}

daysToYears(501);

// 5. Funkciją, kuri konvertuoja metus į valandas:
// 5.1. Funkcija priima vieną argumentą: metų skaičių.
// 5.2. Funkcija grąžina atsakymą tokiu formatu: 5 metai turi 43800 valandas.

function yearsToHours(years) {
  let hours = years * 365 * 24;
  let output = `${years} metai turi ${hours} valandas.`;

  console.log(output);
}

yearsToHours(5);

// 6. Funkciją, kuri konvertuoja mėnesius į valandas:
// 6.1. Funkcija priima vieną argumentą: mėnesių skaičių.
// 6.2. Funkcija grąžina atsakymą tokiu formatu: 3 mėnesiai turi 2190 valandas.

function monthsToHours(months) {
  let hours = months * 30 * 24;
  let output = `${months} mėnesiai turi ${hours} valandas.`;

  console.log(output);
}

monthsToHours(3);

// 7. Funkciją, kuri konvertuoja mėnesius į minutes:
// 7.1. Funkcija priima vieną argumentą: mėnesių skaičių.
// 7.2. Funkcija grąžina atsakymą tokiu formatu: 2 mėnesiai turi 87600 minutes.

function monthsToMinutes(months) {
  let minutes = months * 30 * 24 * 60;
  let output = `${months} mėnesiai turi ${minutes} minutes.`;

  console.log(output);
}

monthsToMinutes(2);

// 8. Funkciją, kuri konvertuoja dienas į pasirinktą formatą (minutes, valandas, savaites, mėnesius arba metus):
// 8.1. Funkcija priima du argumentus: 
//   8.1.1. Dienų skaičių.
//   8.1.2. Formatą. Galimos formato reikšmės yra:
//     8.1.2.1. minutes
//     8.1.2.2. hours
//     8.1.2.3. weeks
//     8.1.2.4. months
//     8.1.2.5. years
// 8.2. Funkcija konvertuoja dienas į pasirinktą formatą ir grąžina atsakymą tokiu formatu: 5 days - 7200 minutes.

function convertDays(days, format) {
  let answer;

  if (format === 'minutes') {
    answer = days * 24 * 60;
  } else if (format === 'hours') {
    answer = days * 24;
  } else if (format === 'weeks') {
    answer = (days / 7).toFixed(1);
  } else if (format === 'months') {
    answer = (days / 30).toFixed(2);
  } else if (format === 'years') {
    answer= (days / 365).toFixed(2);
  } else {
    console.log('Wrong data...');
  }

  console.log(`${days} days - ${answer} ${format}.`);
}

convertDays(45, 'years');

// 9. Funkciją, kuri patikrina ar skaičius dalinasi iš kito skaičiaus:
// 9.1. Funkcija priima du argumentus: 
//   9.1.1. Skaičių, kuris bus dalinamas (dalinys).
//   9.1.2. Skaičių, iš kurio bus dalinama (daliklis).
// 9.2. Funkcija grąžina atsakymą tokiu formatu:
//   9.2.1. Jeigu dalinasi: 10 dalinasi iš 5.
//   9.2.2. Skaičius 11 nesidalina iš 5. Liekana yra 1.

function numberChecker(num1, num2) {
  let answer = num1 % num2;

  if (answer === 0) {
    console.log(`${num1} dalinasi iš ${num2}.`);
  } else {
    console.log(`Skaičius ${num1} nesidalina iš ${num2}. Liekana yra ${answer}.`)
  }
}

numberChecker(1547, 1234)


// 10. Funkciją, kuri patikrina ar įvestas tekstas turi porini raidžių skaičių ar neporinį.
function textChecker(word) {
  let wordLength = word.length;

  if (wordLength % 2 === 0) {
    console.log('Porinis');
  } else {
    console.log('Ne porinis');
  }
}

textChecker('laba');

// 11. Funkciją, kuri paima nurodytą simbolį iš žodžio ar sakinio. 
// 11.1. Funkcija priima du argumentus: tekstą ir kelintą simbolį reikia grąžinti.
// 11.2. Funkcija grąžina atsakymą tokiu formatu: Teksto "Labas" 3 raidė yra "b".

// 11.3. Jeigu nurodytas skaičius yra didesnis nei tekstas turi simbolių, tai reikia grąžinti error'ą tokiu formatu: Tekstas "Labas" turi 5 simbolius, o jūs nurodėte grąžinti 8.

// 11.4. Patobulinti funkciją, kad būtų galima įrašyti neigiamą skaičių, jeigu norima gauti teksto simbolį skaičiuojant nuo jo galo, o ne nuo priekio.

function getLetter(str, num) {
  let strLength = str.length;
  let output = '';

  if (num < 0) {
    let convertedNum = num * -1;
    if (convertedNum > strLength) {
        output = `Tekstas "${str}" turi ${strLength} simbolius, o jūs nurodėte grąžinti ${convertedNum} nuo galo`;
    } else {
      let answer = str[strLength + num];
      output = `Teksto "${str}" ${convertedNum} raidė nuo galo yra "${answer}"`;
    }

  } else if (num > 0) { 
    if (num > strLength) {
      output = `Tekstas "${str}" turi ${strLength} simbolius, o jūs nurodėte grąžinti ${num}`;
    } else {
      let index = num - 1;
      let letter = str[index];
      output = `Teksto "${str}" ${num} raidė yra "${letter}"`;
    }
  } else {
    output = 'Error...';
  }
  
  console.log(output);
}

getLetter('Labas', 0);