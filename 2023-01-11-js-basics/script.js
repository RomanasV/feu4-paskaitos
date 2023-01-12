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
  console.log('Pirkti galima');
} else if (age >= 16) {
  console.log('Pirkti galima su tėvų sutikimu');
} else if (age >= 0) {
  console.log('Pirkti negalima');
} else {
  console.log('Amžius per mažas');
}

// 1. Jeigu slaptažodis yra trumpesnis už 16 simbolių, tai parašyti jog „Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo."
// 2. Jeigu slaptažodis yra ilgesnis už 15 simbolių, tai:
// 2.1. Patikrinti ar jis yra ilgesnis už 20 simbolių. Jeigu ilgesnis, tai parašyti: „Slaptažodis tinkamas".
// 2.2. Jeigu jis nėra ilgesnis už 20 simbolių, tai parašyti jog: „Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo."

let originalPassword = 'aasdasdsda';
let passwordLength = originalPassword.replaceAll(' ', '').length;

console.log(passwordLength);

console.log(originalPassword.includes('#'));

if (originalPassword.includes('#')) {
  console.log('Slaptažodis privalo turėti # simbolį.');
} else if (passwordLength < 16) {
  console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.');
} else {

  if (passwordLength > 20) {
    console.log('Slaptažodis tinkamas');
  } else {
    console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.');
  }

}


// if (passwordLength > 20) {
//   console.log('Slaptažodis tinkamas');
// } else if (passwordLength > 15) {
//   console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.');
// } else {
//   console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.');
// }



// Pagal amžiu surašyti į kurią klasė eina mokinys:
// 1. Iki 6 metų į mokyklą neina.
// 2. 7-10 metų eina į pradinę klasę.
// 3. 11-14 metų eina į pagrindinę.
// 4. 15-18 metų eina į gimnaziją.
// 5. 19+ mokyklą baigė.

// let personAge = -5;

// if (personAge >= 0 && personAge < 7) {
//   console.log('Į mokyklą neina');
// } else if (personAge >= 7 && personAge < 11) {
//   console.log('Pradinukas');
// } else if (personAge >= 11 && personAge < 15) {
//   console.log('Pagrindinė');
// } else if (personAge >= 15 && personAge < 19) {
//   console.log('Gimnazija');
// } else {
//   console.log('Mokyklą baigė');
// }

// 6.1. Jeigu amžius yra mažiau nei 0, tai parašyti jog įvestas amžius yra per mažas.
// 6.2. Jeigu amžius yra daugau nei 120, tai parašyti jog įvestas amžius yra per didelis.

// 7.1. Jeigu amžius yra 6 metai, tai parašyti: "Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas."
// 7.2. Jeigu amžius yra 10 metai, tai parašyti: "Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas."
// 7.3. Jeigu amžius yra 14 metai, tai parašyti: "Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas."
// 7.3. Jeigu amžius yra 18 metai, tai parašyti: "Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs."

// 8. Jeigu įvestas ne amžius (t.y. ne skaičius), tai parašyti: "Netinkamai nurodytas amžius, amžius privalo būti skaičius."
// 9. Panaudoti prompt funkciją amžiui įvesti.

let personAge = prompt('Įvesti amžių');
console.log(personAge);
console.log(typeof personAge);
console.log(isNaN(personAge));

if (isNaN(personAge)) {
  console.log('Netinkamai nurodytas amžius, amžius privalo būti skaičius.');
} else if (personAge < 0) {
  console.log('Įvestas skaičius yra per mažas');
} else if (personAge < 6) {
  console.log('Į mokyklą neina');
} else if (personAge < 7) {
  console.log('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.');
} else if (personAge < 10) {
  console.log('Pradinukas');
} else if (personAge < 11) {
  console.log('Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.');
} else if (personAge < 14) {
  console.log('Pagrindinė');
} else if (personAge < 15) {
  console.log('Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.');
} else if (personAge < 18) {
  console.log('Gimnazija');
} else if (personAge < 19) {
  console.log('Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.');
} else if (personAge < 120) {
  console.log('Mokyklą baigė');
} else if (personAge >= 120) {
  console.log('Įvestas per didelis skaičius');
} else {
  console.log('Error...');
}