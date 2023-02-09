function init() {
  const nameForm = document.querySelector('#name-form');
  
  nameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameValue = nameForm.name.value;
    
    fetch('https://api.agify.io/?name=' + nameValue)
      .then(res => res.json())
      .then(data => {
        console.log(data.age);
      })

    fetch('https://api.genderize.io/?name=' + nameValue)
      .then(res => res.json())
      .then(data => {
        console.log(data.gender);
      })
    
    fetch('https://api.nationalize.io/?name=' + nameValue)
      .then(res => res.json())
      .then(data => {
        console.log(data.country[0].country_id);
      })
  })
}

init();