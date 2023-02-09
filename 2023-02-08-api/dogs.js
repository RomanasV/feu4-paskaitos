function randomImageOnInit() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => {
      const imageUrl = data.message;
      const imageElement = document.createElement('img');
      imageElement.src = imageUrl;

      document.body.append(imageElement);
    })
}

// randomImageOnInit();


function getPictureByBreed() {
  const breedForm = document.querySelector('#breed-form');
  const imageElement = document.createElement('img');
  breedForm.after(imageElement);

  const breedSelect = breedForm.breed;
  const submitButton = breedForm['breed-submit-button'];

  fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => {
      const breeds = data.message;

      // 1 būdas
      // const breedKeys = Object.keys(breeds);
      // breedKeys.map(mainBreed => {
      //   const subBreed = breeds[mainBreed];

      //   console.log(mainBreed);
      //   console.log(subBreed);
      // })

      // 2 būdas
      // const breedKeys = Object.keys(breeds);
      // const breedValues = Object.values(breeds);

      // breedKeys.forEach((mainBreed, index) => {
      //   const subBreed = breedValues[index];

      //   console.log(mainBreed);
      //   console.log(subBreed);
      // })

      // 3 būdas
      // const breedEntries = Object.entries(breeds)

      // breedEntries.forEach(entry => {
      //   const mainBreed = entry[0];
      //   const subBreed = entry[1];
        
      //   console.log(mainBreed);
      //   console.log(subBreed);
      // })

      // 4 būdas
      for (let key in breeds) {
        const mainBreed = key;
        const subBreed = breeds[key];

        if (subBreed.length > 0) {
          subBreed.map(subBreed => {
            const optionElement = document.createElement('option');
            optionElement.textContent = `${mainBreed} (${subBreed})`;
            optionElement.value = `${mainBreed}/${subBreed}`;
            breedSelect.append(optionElement);
          })
        } else {
          const optionElement = document.createElement('option');
          optionElement.textContent = '- ' + mainBreed[0].toUpperCase() + mainBreed.slice(1);
          optionElement.value = mainBreed;
          breedSelect.append(optionElement);
        }
      }

      submitButton.removeAttribute('disabled');
    })
  
  breedForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const selectedBreed = breedSelect.value;
    const apiUrl = `https://dog.ceo/api/breed/${selectedBreed}/images/random`

    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const imageUrl = data.message;

        imageElement.src = imageUrl;
        imageElement.alt = selectedBreed;
      })
    
  })
}

getPictureByBreed();