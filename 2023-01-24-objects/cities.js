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
    touristAttractions: ['Burj Khalifa', 'Burj Al Arab', 'Dubai Mall', 'test'],
    isCapital: false
  },
  {
    name: 'Tokyo',
    population: 39105000,
    location: {
      continent: 'Asia',
      country: 'Japan',
    },
    touristAttractions: ['Senso-ji', 'Tokyo Skytree', 'Meiji Jingu', 'test', 'test'],
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

  cities.forEach((city, index) => {
    // 1.6. Visus miestų masyvų narius išvesti į konsolę.
    // console.log(city);
    // // 1.6.1. Visų miestų pavadinimis išvesti į konsolę.
    // console.log(city.name);
    // // 1.6.2. Visų miestų populiaciją išvesti į konsolę.
    // console.log(city.population);
    // // 1.6.3. Visų miestų žemyną išvesti į konsolę.
    // console.log(city.location.continent);
    // // 1.6.4. Visų miestų šalį išvesti į konsolę.
    // console.log(city.location.country);
    // // 1.6.5. Į konsolę išvesti ar miestas yra sostinė, ar ne.
    // console.log(city.isCapital);
    // // 1.6.6. Į konsolę išvesti visas miesto lankytinas vietas.
    // console.log(city.touristAttractions);


    // 3.1. Jeigu miestas yra sostinė, tai:
    //  3.1.1. Prie miesto pavadinimo pridėti žodį capital, pvz.: Vilnius (capital)
    //  3.1.2. Prie miesto aprašymo pridėti tekstą, kuris nusako jog tai šalies sostinė, pvz.: „Vilnius is the capital of Lithuania."
    //  3.1.3. Jeigu miestas yra sostinė, tai prie apgaubiančio elemento pridėti klasę „capital".
    let capitalTitle = '';
    let capitalClass = '';
    let capitalText = '';

    if (city.isCapital) {
      capitalTitle = ' (capital)';
      capitalClass = ' capital';
      capitalText = ` ${city.name} is the capital of ${city.location.country}.`;
    }

    //  4. Priklausomai nuo miesto lankytinų objektų kiekio, tekstas turi skirtis:
    //  4.1. Jeigu lankytina vieta tik viena, tai turėtų būti naudojama vienaskaita, pvz.: „Main Tourist attraction of Vilnius is".
    //  4.2. Jeigu lankytinų vietų yra daugiau, nei viena, tai tekstas turėtų būti daugiskaitoje, pvz. „Main Tourist attractions of Kaunas are".
    //  4.3. Jeigu lankytinų vietų nėra, tai tekstas neturėtų būti atvaizduojamas.
    let touristAttractionElement = '';

    if (city.touristAttractions.length > 0) {
      let touristAttractionTitle = `Main Tourist attraction of ${city.name} is:`;

      if (city.touristAttractions.length > 1) {
        touristAttractionTitle = `Main Tourist attractions of ${city.name} are:`;
      }

      let touristAttractionsListItems = '';

      city.touristAttractions.forEach((singleAttraction) => {
        touristAttractionsListItems += '<li>' + singleAttraction + '</li>';
      });

      touristAttractionElement = `<h3>${touristAttractionTitle}</h3>
                                  <ul>${touristAttractionsListItems}</ul>`;
    }

    citiesWrapper.innerHTML += `<div class="city-item${capitalClass}">
                                  <h2 class="city-title">${city.name}${capitalTitle}</h2>
                                  <p>${city.name} city is located in ${city.location.continent}, ${city.location.country} and has population of ${city.population} people.${capitalText}</p>
                                  ${touristAttractionElement}
                                </div>`;
  });
}

renderCities(citiesData);


// 5. Naudojant tik JavaScript:
//  5.1. Pakeisti visų sostinių pavadinimo teksto spalvą.

function task51() {
  let cityItems = document.querySelectorAll('.city-item.capital .city-title');
  cityItems.forEach((cityItem) => {
    cityItem.style.color = 'green';
  })
}

task51();

//  5.2. Pakeisti kas antro miesto fono spalvą.

function task52() {
  // let cities = document.querySelectorAll('.city-item');

  // cities.forEach((city, index) => {
  //   if (index % 2 === 0) {
  //     city.style.backgroundColor = '#bbb';
  //   }
  // });

  // for (let i = 0; i < cities.length; i++) {
  //   if (i % 2 === 0) {
  //     cities[i].style.backgroundColor = '#bbb';
  //   }
  // }

  // for (let i = 0; i < cities.length; i+=2) {
  //   cities[i].style.backgroundColor = '#bbb';
  // }

  let cities = document.querySelectorAll('.city-item:nth-of-type(odd)');
  cities.forEach(city => city.style.backgroundColor = '#bbb');
}

// task52();

//  5.3. Pakeisti visų lankytinų vietų sąrašo pirmo nario spalvą į žalią.
//  5.4. Pakeisti visų lankytinų vietų sąrašo paskutinių narių spalvą į raudoną, jeigu narių (lankytinų vietų) yra daugiau nei 3.

function task53() { 
  // let firstLiElements = document.querySelectorAll('.city-item li:first-of-type');
  // let firstLiElements = document.querySelectorAll('.city-item li:first-child');
  // firstLiElements.forEach(element => element.style.color = 'green');

  // let lastLiElements = document.querySelectorAll('.city-item li:nth-of-type(1n+4)');
  // lastLiElements.forEach(element => element.style.color = 'red');

  let attractionLists = document.querySelectorAll('.city-item ul');
  attractionLists.forEach(list => {
    let liElements = list.querySelectorAll('li');
    
    liElements.forEach((li, index) => {
      if (index === 0) {
        li.style.color = 'green';
      } else if (index > 2) {
        li.style.color = 'red';
      } else {
        li.style.color = 'blue';
      }
    });
  })
}

task53();

// 6. Jeigu miestų skaičius nėra porinis, tai paskutinio miesto plotis turi būti 100%, o visų kitų - 50%.
function task6() {
  let citiesWrapper = document.querySelector('#cities-wrapper');
  // citiesWrapper.style.display = 'flex';
  // citiesWrapper.style.flexWrap = 'wrap';
  // citiesWrapper.style.gap = '20px';
  
  citiesWrapper.style = `display: flex;
                         flex-wrap: wrap;
                         gap: 20px;`;
  
  let cityItems = document.querySelectorAll('.city-item');
  console.log(cityItems);

  cityItems.forEach((city, index) => {
    // city.style = `width: calc((100% - 20px) / 2);
    //               padding: 15px;
    //               box-sizing: border-box;`;

    city.style.width = 'calc((100% - 20px) / 2)';
    city.style.padding = '15px';
    city.style.boxSizing = 'border-box';

    if (index + 1 === cityItems.length && cityItems.length % 2 !== 0) {
      city.style.width = '100%';
    }
  })

}

task6();
task52();