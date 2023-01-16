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
// allAreas(45);