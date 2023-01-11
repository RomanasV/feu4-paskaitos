console.groupCollapsed('Variables, math operators');

// Kintamojo sukūrimas:
// 1. Iniciavimo žodelis (var, let, const)
// 2. Kintamojo pavadinimas
// 3. Lygybės ženklas
// 4. Kintamojo vertė

var vardas = "John"; // String (tekstas) tipo duomenys
let pavarde = 'Doe'; // String (tekstas) tipo duomenys
let miestas = `Vilnius`; // String (tekstas) tipo duomenys
const asmensKodas = 45646465464; // Number (skaičius) tipo duomenys
let yraStudentas = false; // Boolean (true/false) tipo duomenys
let amzius = 28; // Number (skaičius) tipo duomenys

console.log(vardas);
console.log(pavarde);
console.log(miestas);
console.log(asmensKodas);

// typeof parodo kokio tai tipo duomenys
console.log(vardas);
console.log(typeof vardas);

console.log(vardas, typeof vardas);
console.log(miestas, typeof miestas);
console.log(asmensKodas, typeof asmensKodas);
console.log(yraStudentas, typeof yraStudentas);
console.log(amzius, typeof amzius);

console.log('Hello, ' + vardas + ' ' + pavarde + '.');
console.log("Hello, " + vardas + " " + pavarde + ".");

// John Doe (amžius 25 m.), asmens kodas: 37878787878, gyvenamasis miestas: Kaunas.

console.log(vardas + ' ' + pavarde + ' (amžius ' + amzius + ' m.), asmens kodas: ' + asmensKodas + ', gyvenamasis miestas: ' + miestas + '.');

amzius = 29;

console.log(vardas + " " + pavarde + " (amžius " + amzius + " m.), asmens kodas: " + asmensKodas + ", gyvenamasis miestas: " + miestas + ".");

// John said: "Good morning".
console.log('John said: "Good morning"');
console.log(`John said: "Good morning".`);

// That's my car.
console.log("That's my car.");
console.log(`That's my car.`);

// John said: "That's my car".
console.log(`John said: "That's my car".`);
console.log('John said: "That' + "'s my car" + '".');

// John `said`: "That's my car".
console.log('John `said`: "' + "That's" + ' my car.');

console.log("John said: \"Good morning\".");
console.log('That\'s my car.');
console.log("John said: \"That's my car\".");
console.log('John said: "That\'s my car".');
console.log('John `said`: "That\'s my car".');
console.log("John `said`: \"That's my car\".");
console.log(`John \`said\`: "That's my car".`);

// John `said`: "That's \my\ car".
console.log('John `said`: "That\'s \\my\\ car".');

// John \`said\`: "That's my car".
console.log(`John \\\`said\\\`: "That's my car".`);


// Matematiniai operatoriai
let num1 = 22;
let num2 = 10;
let num3 = '10';

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

console.log(num1 + num2 * num2);
console.log((num1 + num2) * num2);

console.log(num1 + num3);
console.log(num1 - num3);
console.log(num1 * num3);
console.log(num1 / num3);
console.log(num1 % num3);

console.log(num1 + num3 * num3);
console.log((num1 + num3) * num3);

console.log(num1 + num2 + num3);
console.log(num1 + num2)
console.log(32 + num3)

console.log(num3 + num2 + num1)
console.log(num3 + num2);
console.log('1010' + num1);

// SĄLYGOS

// Dviguba lygybė (loosely Equal ==): tikrina tik reikšmes. Ir nekreipia dėmesio į duomenų tipą. 

console.log(10 == 10); // true
console.log('vienas' == 'vienas'); // true
console.log('10' == '10'); // true
console.log(10 == '10'); // true

// Triguba lygybė (strictly equal ===): pirmiausiai tikrina duomenų tipą ir tik jeigu duomenų tipas sutampa, tada tikrina jų reikšmes.

console.log(10 === 10); // true
console.log('vienas' === 'vienas'); // true
console.log('10' === '10'); // true
console.log(10 === '10'); // false

console.log(10 > 10); // false
console.log(10 >= 10); // true
console.log(10 < 10); // false
console.log(10 <= 10); // true

console.log(10 == 10); // true
console.log(10 != 10); // false

console.log(10 === 10); // true
console.log(10 !== 10); // false

console.log(10 != '10'); // false
console.log(10 !== '10'); // true

console.log(true);
console.log(!true);
console.log(!!true);

console.groupEnd();

// IF, ELSE IF, ELSE
// let light = 'GrEeN';

// console.log(light);

// // OR (||) operator - AR operatorius

// if (light === 'green' || light === 'GREEN' || light === 'Green') {
//   console.log('Galima eiti!');
// } else if (light === 'yellow') {
//   console.log('Pasiruošk');
// } else if (light === 'red') {
//   console.log('STOP');
// } else {
//   console.log('Sugedo');
// }



let originalLight = 'RED';
// let light = 'RED'.toLowerCase();
let light = originalLight.toLowerCase();

console.log(light);

if (light === 'green') {
  console.log('Galima eiti!');
} else if (light === 'yellow') {
  console.log('Pasiruošk');
} else if (light === 'red') {
  console.log('STOP');
} else {
  console.log('Sugedo');
}


let age = 25;

// if (age >= 18) {
//   console.log('Pirkti galima');
// } else {
//   console.log('Pirkti negalima');
// }

// if (age > 17) {
//   console.log('Pirkti galima');
// } else {
//   console.log('Pirkti negalima');
// }

// if (age < 18) {
//   console.log('Pirkti negalima');
// } else {
//   console.log('Pirkti galima');
// }

// if (age <= 17) {
//   console.log('Pirkti negalima');
// } else {
//   console.log('Pirkti galima');
// }


// if (age >= 18) {
//   console.log('Pirkti galima');
// } else if (age >= 16) {
//   console.log('Pirkti galima su tėvų sutikimu');
// } else {
//   console.log('Pirkti negalima');
// }

// if (age >= 18) {
//   console.log('Pirkti galima');
// } else if (age < 16) {
//   console.log('Pirkti negalima');
// } else {
//   console.log('Pirkti galima su tėvų sutikimu');
// }


// AND (&&) operatorius - IR operatorius

// if (age > 120) {
//   console.log('Amžius per didelis');
// } else if (age < 0) {
//   console.log('Amžius per mažas');
// } else if (age >= 18 && age < 120) {
//   console.log('Pirkti galima');
// } else if (age >= 16 && age < 18) {
//   console.log('Pirkti galima su tėvų sutikimu');
// } else  {
//   console.log('Pirkti negalima');
// }

if (age >= 120) {
  console.log('Amžius per didelis');
} else if (age >= 18) {
  console.log('Pirkti negalima');
}