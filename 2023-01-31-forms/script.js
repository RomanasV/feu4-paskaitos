// let form = document.querySelector('form');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   // console.log(form);
//   // console.log(event.target);

//   // let firstName = document.querySelector('#user-first-name').value;
//   // let lastName = document.querySelector('[name="last-name"]').value;
//   // let age = document.querySelectorAll('[name="age"]')[0].value;
//   // let color = document.getElementsByName('color')[0].value;
//   // let date = document.getElementById('user-date').value;

//   // let firstName = form.querySelector('#user-first-name').value;
//   // let lastName = form.querySelector('[name="last-name"]').value;
//   // let age = form.querySelectorAll('[name="age"]')[0].value;

//   // let firstName = event.target.querySelector('#user-first-name').value;
//   // let lastName = event.target.querySelector('[name="last-name"]').value;
//   // let age = event.target.querySelectorAll('[name="age"]')[0].value;

//   let firstName = event.target['user-first-name'].value;
//   let lastName = event.target['last-name'].value;
//   let age = event.target.age.value;

//   console.dir(event.target.elements);
// });

const studentForm = document.querySelector('#student-form');
// const studentList = document.getElementById('students-list');
const studentList = document.querySelector('#students-list');

studentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let studentName = event.target.name.value;
  let studentSurname = event.target.surname.value;
  let studentAge = event.target.age.value;
  let studentPhone = event.target.phone.value;
  let studentEmail = event.target.email.value;
  let studentItKnowledge = event.target['it-knowledge'].value;
  // let studentGroup = event.target.querySelector('[name="group"]:checked');
  let studentGroup = event.target.group.value;
  let studentInterests = event.target.querySelectorAll('[name="interest"]:checked');

  const studentItem = document.createElement('div');
  studentItem.classList.add('student-item');

  const nameElement = document.createElement('p');
  nameElement.innerHTML = `<strong>Name:</strong> ${studentName}`;

  const surnameElement = document.createElement('p');
  surnameElement.innerHTML = `<strong>Surname:</strong> ${studentSurname}`;

  const ageElement = document.createElement('p');
  ageElement.innerHTML = `<strong>Age:</strong> ${studentAge}`;

  const phoneElement = document.createElement('p');
  phoneElement.innerHTML = `<strong>Phone:</strong> ${studentPhone}`;

  const emailElement = document.createElement('p');
  emailElement.innerHTML = `<strong>Email:</strong> ${studentEmail}`;

  const itKnowledgeElement = document.createElement('p');
  itKnowledgeElement.innerHTML = `<strong>IT Knowledge:</strong> ${studentItKnowledge}`;

  const groupElement = document.createElement('p');
  groupElement.innerHTML = `<strong>Group:</strong> ${studentGroup.toUpperCase()} group`;

  const interestsWrapper = document.createElement('div');
  interestsWrapper.classList.add('interests-wrapper');

  const interestsTitle = document.createElement('h4');
  interestsTitle.classList.add('interests-title');
  interestsTitle.textContent = 'No interests :(';
  
  interestsWrapper.append(interestsTitle);
  
  if (studentInterests.length > 0) {
    interestsTitle.textContent = 'Student interests:';
    const interestListElement = document.createElement('ul');

    studentInterests.forEach(interest => {
      const interestElement = document.createElement('li');
      interestElement.textContent = interest.value;
  
      interestListElement.append(interestElement);
    })
    
    interestsWrapper.append(interestListElement);
  }

  studentItem.append(nameElement, surnameElement, ageElement, phoneElement, emailElement, itKnowledgeElement, groupElement, interestsWrapper);
  studentList.prepend(studentItem);
})