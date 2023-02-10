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

    

    const ageRes = await fetch('https://api.agify.io/?name=' + nameValue);
    const ageData = await ageRes.json();

    const genderRes = await fetch('https://api.genderize.io/?name=' + nameValue);
    const genderData = await genderRes.json();

    const countryRes = await fetch('https://api.nationalize.io/?name=' + nameValue);
    const countryData = await countryRes.json();

    const age = ageData.age;
    const gender = genderData.gender;
    const country = countryData.country[0].country_id; 

    paragraph.textContent = `Person's age is ${age}. Gender is ${gender}. ${nameValue}'s country is ${country}.`;

    // fetch('https://api.agify.io/?name=' + nameValue)
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
      

    // fetch('https://api.agify.io/?name=' + nameValue)
    //   .then(res => res.json())
    //   .then(data => {
    //     age = data.age;
    //     paragraph.textContent += `Person's age is ${age}. `;
    //   })

    // fetch('https://api.genderize.io/?name=' + nameValue)
    //   .then(res => res.json())
    //   .then(data => {
    //     const gender = data.gender;
    //     paragraph.textContent += `Gender is ${gender}. `;
    //   })

    // fetch('https://api.nationalize.io/?name=' + nameValue)
    //   .then(res => res.json())
    //   .then(data => {
    //     const country = data.country[0].country_id;
    //     paragraph.textContent += `${nameValue}'s country is ${country}. `;
    //   })
  })
}

function getAgeData(nameValue, paragraph) {
  let age;

  fetch('https://api.agify.io/?name=' + nameValue)
    .then(res => res.json())
    .then(data => {
      age = data.age;
      paragraph.textContent += `Person's age is ${age}. `;

    })

  return `Person's age is ${age}. `;
}


init();