// function init() {
//   const nameForm = document.querySelector('#name-form');
//     const paragraph = document.createElement('p');
  
//   nameForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const nameValue = nameForm.name.value;
//     nameForm.after(paragraph);

//     const ageElement = document.createElement('span');
//     const genderElement = document.createElement('span');
//     const countryElement = document.createElement('span');
//     paragraph.append(ageElement, genderElement, countryElement);
    
//     fetch('https://api.agify.io/?name=' + nameValue)
//       .then(res => res.json())
//       .then(data => {
//         const age = data.age;
//         ageElement.textContent = `Person's age is ${age}. `;
//       })

//     fetch('https://api.genderize.io/?name=' + nameValue)
//       .then(res => res.json())
//       .then(data => {
//         const gender = data.gender;
//         genderElement.textContent = `Gender is ${gender}. `;
//       })
    
//     fetch('https://api.nationalize.io/?name=' + nameValue)
//       .then(res => res.json())
//       .then(data => {
//         const country = data.country[0].country_id;
//         countryElement.textContent = `${nameValue}'s country is ${country}. `;
//       })
//   })
// }

function init() {
  const nameForm = document.querySelector('#name-form');
  const paragraph = document.createElement('p');
  
  nameForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const nameValue = nameForm.name.value;
    nameForm.after(paragraph);

    const age = await getAgeText(nameValue);
    const gender = await getGenderText(nameValue);
    const country = await getCountryText(nameValue);

    paragraph.textContent = `${age} ${gender} ${country}`;
  })
}

async function getAgeText(nameValue) {
  const res = await fetch('https://api.agify.io/?name=' + nameValue);
  const data = await res.json();
  
  const age = data.age;
  const result = `Person's age is ${age}.`;

  return result;
}

async function getGenderText(nameValue) {
  const res = await fetch('https://api.genderize.io/?name=' + nameValue);
  const data = await res.json();
  
  const gender = data.gender;
  const result = `Gender is ${gender}.`;

  return result;
}

async function getCountryText(nameValue) {
  const res = await fetch('https://api.nationalize.io/?name=' + nameValue);
  const data = await res.json();

  const country = data.country[0].country_id;
  const result = `${nameValue}'s country is ${country}.`;

  return result;
}


init();