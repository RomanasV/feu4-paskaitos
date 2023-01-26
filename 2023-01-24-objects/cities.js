// 1. Sukurti masyvą, kuriame būtų 10 skirtingų miestų. Kiekvienas miestas turi būti objekto tipo ir turi turėti šiuos properties:
//  1.1. name - miesto pavadinimas (string)
//  1.2. population - miesto populiacija (number)
//  1.3. location - (object)
//    1.3.1. continent - žemynas (string)
//    1.3.2. country - šalis (string)
//  1.4. touristAttractions - lankytinos vietos (array)
//  1.5. isCapital - reikšmė nurodanti ar miestas yra sostinė (boolean)

let cities = [
  {
    name: 'Vilnius',
    population: 450000,
    location: {
      continent: 'Europe',
      country: 'Lithuania',
    },
    touristAttractions: ['Pirma lankytina vieta', 'Antra lankytina vieta', 'Trečia lankytina vieta'],
    isCapital: true,
  },
  {
    name: 'Kaunas',
    population: 450000,
    location: {
      continent: 'Europe',
      country: 'Lithuania',
    },
    touristAttractions: ['Pirma lankytina vieta', 'Antra lankytina vieta', 'Trečia lankytina vieta'],
    isCapital: false,
  },
  {
    name: 'Klaipėda',
    population: 200000,
    location: {
      continent: 'Europe',
      country: 'Lithuania',
    },
    touristAttractions: ['Pirma lankytina vieta', 'Antra lankytina vieta', 'Trečia lankytina vieta'],
    isCapital: false,
  },
];

console.log(cities);