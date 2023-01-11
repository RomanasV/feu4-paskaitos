// Kintamojo sukūrimas:
// 1. Iniciavimo žodelis (var, let, const)
// 2. Kintamojo pavadinimas
// 3. Lygybės ženklas
// 4. Kintamojo vertė

var vardas = "John"; // String (tekstas) tipo duomenys
let pavarde = 'Doe'; // String (tekstas) tipo duomenys
let miestas = `Kaunas`; // String (tekstas) tipo duomenys
const asmensKodas = 378946541231; // Number (skaičius) tipo duomenys
let yraStudentas = false; // Boolean (true/false) tipo duomenys
let amzius = 25; // Number (skaičius) tipo duomenys

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

console.log('John Doe (amžius 25 m.), asmens kodas: 37878787878, gyvenamasis miestas: Kaunas.');

console.log("John Doe (amžius 25 m.), asmens kodas: 37878787878, gyvenamasis miestas: Kaunas.");