const initialData = [
  {
    name: 'Vardas 1',
    surname: 'Pavardė 1',
    age: 25,
    phone: '+3704564879',
    email: 'vardas1@gmail.com',
    itKnowledge: 7,
    group: 'feu 3',
    interests: ['JavaScript', 'PHP'],
  },
  {
    name: 'Vardas 2',
    surname: 'Pavardė 2',
    age: 32,
    phone: '+37045645455',
    email: 'vardas3@gmail.com',
    itKnowledge: 10,
    group: 'feu 1',
    interests: ['JavaScript'],
  },
  {
    name: 'Vardas 3',
    surname: 'Pavardė 3',
    age: 20,
    phone: '+3704564879',
    email: 'vardas3@gmail.com',
    itKnowledge: 2,
    group: 'feu 4',
    interests: ['PHP'],
  },
  {
    name: 'Vardas 5',
    surname: 'Pavardė 5',
    age: 40,
    phone: '+3704564879',
    email: 'vardas5@gmail.com',
    itKnowledge: 4,
    group: 'feu 3',
    interests: [],
  },
  {
    name: 'Vardas 5',
    surname: 'Pavardė 5',
    age: 25,
    phone: '+3704564879',
    email: 'vardas5@gmail.com',
    itKnowledge: 7,
    group: 'feu 3',
    interests: ['JavaScript', 'PHP'],
  },
];

const studentForm = document.querySelector('#student-form');
const studentList = document.querySelector('#students-list');

const itKnowledgeInput = studentForm.querySelector('#student-it-knowledge');
const itKnowledgeOutput = studentForm.querySelector('#it-knowledge-output');

itKnowledgeInput.addEventListener('input', (event) => {
  itKnowledgeOutput.textContent = event.target.value;
});

studentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let formIsValid = formValidation(event.target);
  if (!formIsValid) {
    return;
  }

  const nameInput = event.target.name;
  const studentName = nameInput.value;
  const studentSurname = event.target.surname.value;
  const studentAge = event.target.age.value;
  const studentPhone = event.target.phone.value;
  const studentEmail = event.target.email.value;
  const studentItKnowledge = event.target['it-knowledge'].value;
  // const studentGroup = event.target.querySelector('[name="group"]:checked');
  const studentGroup = event.target.group.value;
  const studentInterests = event.target.querySelectorAll('[name="interest"]:checked');

  const studentItem = document.createElement('div');
  studentItem.classList.add('student-item');

  const nameElement = document.createElement('p');
  nameElement.innerHTML = `<strong>Name:</strong> ${studentName}`;

  const surnameElement = document.createElement('p');
  surnameElement.innerHTML = `<strong>Surname:</strong> ${studentSurname}`;

  const ageElement = document.createElement('p');
  ageElement.innerHTML = `<strong>Age:</strong> ${studentAge}`;

  const phoneElement = document.createElement('p');
  phoneElement.innerHTML = `<strong>Phone:</strong> ****`;

  const emailElement = document.createElement('p');
  emailElement.innerHTML = `<strong>Email:</strong> ****`;

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

  const privateInfoButton = document.createElement('button');
  privateInfoButton.textContent = 'Show Private Info';

  let privateInfoHidden = true;

  privateInfoButton.addEventListener('click', () => {
    
    if (privateInfoHidden) {
      privateInfoButton.textContent = 'Hide Private Info';
      phoneElement.innerHTML = `<strong>Phone:</strong> ${studentPhone}`;
      emailElement.innerHTML = `<strong>Email:</strong> ${studentEmail}`;
    } else {
      privateInfoButton.textContent = 'Show Private Info';
      phoneElement.innerHTML = `<strong>Phone:</strong> ****`;
      emailElement.innerHTML = `<strong>Email:</strong> ****`;
    }

    privateInfoHidden = !privateInfoHidden;
  })

  const removeStudentButton = document.createElement('button');
  removeStudentButton.textContent = 'Remove Student';

  removeStudentButton.addEventListener('click', () => {
    studentItem.remove();

    let removedStudentMessage = `Studentas (${studentName} ${studentSurname}) sėkmingai ištrintas.`;
    alertMessage(event.target, removedStudentMessage);
  })

  studentItem.append(nameElement, surnameElement, ageElement, phoneElement, emailElement, itKnowledgeElement, groupElement, interestsWrapper, privateInfoButton, removeStudentButton);
  studentList.prepend(studentItem);

  event.target.reset();

  // alertMessage(event.target, `Sukurtas studentas (${studentName} ${studentSurname})`);

  let createdStudentMessage = `Sukurtas studentas (${studentName} ${studentSurname})`;
  alertMessage(event.target, createdStudentMessage, 'green');
})

function alertMessage(element, message, color = 'black') {
  const previousMessageElement = document.querySelector('.popup-info-message');
  if (previousMessageElement) {
    previousMessageElement.remove();
  }
  
  const messageElement = document.createElement('span');
  messageElement.textContent = message;
  messageElement.style.color = color;
  messageElement.classList.add('popup-info-message');

  element.after(messageElement);

  setTimeout(() => {
    messageElement.remove();
  }, 5000)
}

function renderInitialData(students, studentForm) {
  students.forEach(studentData => {
    renderSingleStudent(studentData, studentForm);
  });
}

function renderSingleStudent(student, form) {
  const studentName = student.name;
  const studentSurname = student.surname;
  const studentAge = student.age;
  const studentPhone = student.phone;
  const studentEmail = student.email;
  const studentItKnowledge = student.itKnowledge;
  const studentGroup = student.group;
  const studentInterests = student.interests;

  const studentItem = document.createElement('div');
  studentItem.classList.add('student-item');

  const nameElement = document.createElement('p');
  nameElement.innerHTML = `<strong>Name:</strong> ${studentName}`;

  const surnameElement = document.createElement('p');
  surnameElement.innerHTML = `<strong>Surname:</strong> ${studentSurname}`;

  const ageElement = document.createElement('p');
  ageElement.innerHTML = `<strong>Age:</strong> ${studentAge}`;

  const phoneElement = document.createElement('p');
  phoneElement.innerHTML = `<strong>Phone:</strong> ****`;

  const emailElement = document.createElement('p');
  emailElement.innerHTML = `<strong>Email:</strong> ****`;

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
      interestElement.textContent = interest;
  
      interestListElement.append(interestElement);
    })
    
    interestsWrapper.append(interestListElement);
  }

  const privateInfoButton = document.createElement('button');
  privateInfoButton.textContent = 'Show Private Info';

  let privateInfoHidden = true;

  privateInfoButton.addEventListener('click', () => {
    
    if (privateInfoHidden) {
      privateInfoButton.textContent = 'Hide Private Info';
      phoneElement.innerHTML = `<strong>Phone:</strong> ${studentPhone}`;
      emailElement.innerHTML = `<strong>Email:</strong> ${studentEmail}`;
    } else {
      privateInfoButton.textContent = 'Show Private Info';
      phoneElement.innerHTML = `<strong>Phone:</strong> ****`;
      emailElement.innerHTML = `<strong>Email:</strong> ****`;
    }

    privateInfoHidden = !privateInfoHidden;
  })

  const removeStudentButton = document.createElement('button');
  removeStudentButton.textContent = 'Remove Student';

  removeStudentButton.addEventListener('click', () => {
    studentItem.remove();

    let removedStudentMessage = `Studentas (${studentName} ${studentSurname}) sėkmingai ištrintas.`;
    alertMessage(form, removedStudentMessage);
  })

  studentItem.append(nameElement, surnameElement, ageElement, phoneElement, emailElement, itKnowledgeElement, groupElement, interestsWrapper, privateInfoButton, removeStudentButton);
  studentList.prepend(studentItem);
}

function formValidation(form) {
  const previousInputErrorMessage = form.querySelectorAll('.input-error-message');
  previousInputErrorMessage.forEach(errorMessage => errorMessage.remove());

  const requiredInputs = form.querySelectorAll('input:required');

  let validForm = true;

  requiredInputs.forEach(requiredInput => {
    requiredInput.classList.remove('input-error');

    if (!requiredInput.value) {
      validForm = inputErrorMessage(requiredInput, form, 'Field required');
    } else if (requiredInput.name === 'name') {
      if (requiredInput.value.length < 3) {
        validForm = inputErrorMessage(requiredInput, form, 'Vardas privalo būti bent 3 simbolių ilgumo');
      }
    } else if (requiredInput.name === 'surname') {
      if (requiredInput.value.length < 3) {
        validForm = inputErrorMessage(requiredInput, form, 'Pavardė privalo būti bent 3 simbolių ilgumo');
      }
    } else if (requiredInput.name === 'age') {
      if (requiredInput.valueAsNumber < 0) {
        validForm = inputErrorMessage(requiredInput, form, 'Amžius privalo būti teigiamas skaičius');
      } else if (requiredInput.valueAsNumber > 120) {
        validForm = inputErrorMessage(requiredInput, form, 'Įvestas amžius yra per didelis');
      }
    } else if (requiredInput.name === 'phone') {
      let phoneLength = requiredInput.value.replaceAll(' ', '').replaceAll('-', '').length;
      if (phoneLength < 8 || phoneLength > 12) {
        validForm = inputErrorMessage(requiredInput, form, 'Įvestas telefono numeris yra neteisingas');
      }
    } else if (requiredInput.name === 'email') {
      console.log(requiredInput.value)
      if (requiredInput.value.length < 8 || !requiredInput.value.includes('@') || !requiredInput.value.includes('.')) {
        validForm = inputErrorMessage(requiredInput, form, 'Įvestas elektroninis paštas yra neteisingas');
      } 
    }

  });

  return validForm;
}

function inputErrorMessage(input, form, errorMessage) {
  const inputErrorMessage = document.createElement('span');
  inputErrorMessage.classList.add('input-error-message');
  inputErrorMessage.textContent = errorMessage;
  
  input.after(inputErrorMessage);

  input.classList.add('input-error');
  alertMessage(form, 'Ne visi laukeliai yra užpildyti teisingai.', 'red');

  return false;
}

renderInitialData(initialData, studentForm);