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
  
  nameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameValue = nameForm.name.value;
    nameForm.after(paragraph);

    paragraph.textContent = '';
    
    fetch('https://api.agify.io/?name=' + nameValue)
      .then(res => res.json())
      .then(data => {
        const age = data.age;
        paragraph.textContent += `Person's age is ${age}. `;

        fetch('https://api.genderize.io/?name=' + nameValue)
          .then(res => res.json())
          .then(data => {
            const gender = data.gender;
            paragraph.textContent += `Gender is ${gender}. `;
    
            fetch('https://api.nationalize.io/?name=' + nameValue)
              .then(res => res.json())
              .then(data => {
                const country = data.country[0].country_id;
                paragraph.textContent += `${nameValue}'s country is ${country}. `;
              })
          })
      })
  })
}

init();