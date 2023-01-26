// 1. Sukurti masyvą, kuriame būtų 10 skirtingų miestų. Kiekvienas miestas turi būti objekto tipo ir turi turėti šiuos properties:
//  1.1. name - miesto pavadinimas (string)
//  1.2. population - miesto populiacija (number)
//  1.3. location - (object)
//    1.3.1. continent - žemynas (string)
//    1.3.2. country - šalis (string)
//  1.4. touristAttractions - lankytinos vietos (array)
//  1.5. isCapital - reikšmė nurodanti ar miestas yra sostinė (boolean)

let citiesData = [
  {
    name: 'London',
    population: 11120000,
    location: {
      continent: 'Europe',
      country: 'United Kingdom',
    },
    touristAttractions: ['Big Ben'],
    isCapital: true
  },
  {
    name: 'Paris',
    population: 11027000,
    location: {
      continent: 'Europe',
      country: 'France',
    },
    touristAttractions: [],
    isCapital: true
  },
  {
    name: 'New York',
    population: 19294000,
    location: {
      continent: 'North America',
      country: 'United States of America',
    },
    touristAttractions: ['Metropolitan Museum', 'Central Park', 'Modern Art Museum'],
    isCapital: false
  },
  {
    name: 'Dubai',
    population: 6595000,
    location: {
      continent: 'Asia',
      country: 'United Arab Emirates',
    },
    touristAttractions: ['Burj Khalifa', 'Burj Al Arab', 'Dubai Mall'],
    isCapital: false
  },
  {
    name: 'Tokyo',
    population: 39105000,
    location: {
      continent: 'Asia',
      country: 'Japan',
    },
    touristAttractions: ['Senso-ji', 'Tokyo Skytree', 'Meiji Jingu'],
    isCapital: true
  },
  {
    name: 'Singapore',
    population: 5901000,
    location: {
      continent: 'Asia',
      country: 'Singapore',
    },
    touristAttractions: ['Marina Bay Sands', 'Gardens by the Bay', 'Sentosa'],
    isCapital: true
  },
  {
    name: 'Los Angeles',
    population: 13250000,
    location: {
      continent: 'North America',
      country: 'United States of America',
    },
    touristAttractions: ['Museum of Art', 'Disneyland Park', 'Santa Monica Pie'],
    isCapital: false
  },
  {
    name: 'Barcelona',
    population: 4735000,
    location: {
      continent: 'Europe',
      country: 'Spain',
    },
    touristAttractions: ['La Sagrada Familia', 'Park Guell', 'Casa Batllo'],
    isCapital: false
  },
  {
    name: 'Rio de Janeiro',
    population: 6748000,
    location: {
      continent: 'South America',
      country: 'Brazil',
    },
    touristAttractions: ['Christ the Redeemer', 'Sugaloaf Mountain', 'Copacabana Beach'],
    isCapital: false
  },
];




function renderCities(cities) {
  // 2. HTML faile sukurti tuščią div elementą, kuriame bus atvaizduoti visi miestai.
  //  2.1. Panaudojant ciklą, atvaizduoti visus miestus ekrane pagal nurodytą stilių.

  let citiesWrapper = document.querySelector('#cities-wrapper');

  cities.forEach((city) => {
    // 1.6. Visus miestų masyvų narius išvesti į konsolę.
    console.log(city);
    // 1.6.1. Visų miestų pavadinimis išvesti į konsolę.
    console.log(city.name);
    // 1.6.2. Visų miestų populiaciją išvesti į konsolę.
    console.log(city.population);
    // 1.6.3. Visų miestų žemyną išvesti į konsolę.
    console.log(city.location.continent);
    // 1.6.4. Visų miestų šalį išvesti į konsolę.
    console.log(city.location.country);
    // 1.6.5. Į konsolę išvesti ar miestas yra sostinė, ar ne.
    console.log(city.isCapital);
    // 1.6.6. Į konsolę išvesti visas miesto lankytinas vietas.
    console.log(city.touristAttractions);

    let touristAttractionsListItems = '';

    city.touristAttractions.forEach((singleAttraction) => {
      touristAttractionsListItems += '<li>' + singleAttraction + '</li>';
    });

    citiesWrapper.innerHTML += `<div class="city-item">
                                  <h2 class="city-title">${city.name}</h2>
                                  <p>${city.name} city is located in ${city.location.continent}, ${city.location.country} and has population of ${city.population} people.</p>

                                  <h3>Main Tourist attractions of ${city.name} are:</h3>

                                  <ul>${touristAttractionsListItems}</ul>
                                </div>`;
  });
}

renderCities(citiesData);