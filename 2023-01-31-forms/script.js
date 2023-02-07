// const initialData = [
//   {
//     name: 'Vardas 1',
//     surname: 'Pavardė 1',
//     age: 25,
//     phone: '+3704564879',
//     email: 'vardas1@gmail.com',
//     itKnowledge: 7,
//     group: 'feu 3',
//     interests: ['JavaScript', 'PHP'],
//   },
//   {
//     name: 'Vardas 2',
//     surname: 'Pavardė 2',
//     age: 32,
//     phone: '+37045645455',
//     email: 'vardas3@gmail.com',
//     itKnowledge: 10,
//     group: 'feu 1',
//     interests: ['JavaScript'],
//   },
//   {
//     name: 'Vardas 3',
//     surname: 'Pavardė 3',
//     age: 20,
//     phone: '+3704564879',
//     email: 'vardas3@gmail.com',
//     itKnowledge: 2,
//     group: 'feu 4',
//     interests: ['PHP'],
//   },
//   {
//     name: 'Vardas 5',
//     surname: 'Pavardė 5',
//     age: 40,
//     phone: '+3704564879',
//     email: 'vardas5@gmail.com',
//     itKnowledge: 4,
//     group: 'feu 3',
//     interests: [],
//   },
//   {
//     name: 'Vardas 5',
//     surname: 'Pavardė 5',
//     age: 25,
//     phone: '+3704564879',
//     email: 'vardas5@gmail.com',
//     itKnowledge: 7,
//     group: 'feu 3',
//     interests: ['JavaScript', 'PHP'],
//   },
// ];

const initialData = [];

const studentForm = document.querySelector('#student-form');
const studentList = document.querySelector('#students-list');

let editStudent = null;

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

  let studentInterestElements = event.target.querySelectorAll('[name="interest"]:checked');
  
  // let studentInterests = [];

  // studentInterestElements.forEach(interest => {
  //   studentInterests.push(interest.value)
  // })

  // const studentInterests = [...studentInterestElements].map(interest => {
  //   return interest.value;
  // })

  const studentInterests = [...studentInterestElements].map(interest => interest.value);

  let studentDataObj = {
    name: nameInput.value,
    surname: event.target.surname.value,
    age: event.target.age.value,
    phone: event.target.phone.value,
    email: event.target.email.value,
    itKnowledge: event.target['it-knowledge'].value,
    group: event.target.group.value,
    interests: studentInterests,
  }

  console.log(studentDataObj);

  let createdStudentMessage = '';

  if (editStudent) {
    createdStudentMessage = `Studento (${studentName} ${studentSurname}) duomenys sėkmingai pakeisti`;
  } else {
    createdStudentMessage = `Sukurtas studentas (${studentName} ${studentSurname})`;
  }

  alertMessage(event.target, createdStudentMessage, 'green');

  renderSingleStudent(studentDataObj, event.target);
  event.target.reset();
  
  localStorage.setItem('name', '');
  localStorage.setItem('surname', '');
  localStorage.setItem('age', '');
  localStorage.setItem('phone', '');
  localStorage.setItem('email', '');
  localStorage.setItem('it-knowledge', '');
  localStorage.setItem('it-group', '');
  localStorage.setItem('interest', JSON.stringify([]));
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

  const editStudentButton = document.createElement('button');
  editStudentButton.textContent = 'Edit Student';

  editStudentButton.addEventListener('click', () => {
    form.name.value = studentName;
    form.surname.value = studentSurname;
    form.age.value = studentAge;
    form.phone.value = studentPhone;
    form.email.value = studentEmail;
    form['it-knowledge'].value = studentItKnowledge;
    form.group.value = studentGroup;

    studentInterests.forEach(interest => {
      form.querySelector(`[name="interest"][value="${interest}"]`).checked = true;
    })

    form['form-submit'].value = 'Save Changes';
    editStudent = studentItem;
  })

  studentItem.append(nameElement, surnameElement, ageElement, phoneElement, emailElement, itKnowledgeElement, groupElement, interestsWrapper, privateInfoButton, removeStudentButton, editStudentButton);

  if (editStudent) {
    form['form-submit'].value = 'Create Student';
    editStudent.replaceWith(studentItem);
    editStudent = null;
  } else {
    studentList.prepend(studentItem);
  }
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

studentForm.addEventListener('input', (event) => {
  if (event.target.name === 'interest') {
    let checkedInterests = studentForm.querySelectorAll('[name="interest"]:checked');

    let checkedInterestValues = [...checkedInterests].map(interest => {
      return interest.value;
    })

    localStorage.setItem('interest', JSON.stringify(checkedInterestValues));
  } else {
    localStorage.setItem(event.target.name, event.target.value);
  }
});

if (localStorage.getItem('name')) {
  studentForm.name.value = localStorage.getItem('name');
}

if (localStorage.getItem('surname')) {
  studentForm.surname.value = localStorage.getItem('surname');
}

if (localStorage.getItem('age')) {
  studentForm.age.value = localStorage.getItem('age');
}

if (localStorage.getItem('phone')) {
  studentForm.phone.value = localStorage.getItem('phone');
}

if (localStorage.getItem('email')) {
  studentForm.email.value = localStorage.getItem('email');
}

if (localStorage.getItem('it-knowledge')) {
  studentForm['it-knowledge'].value = localStorage.getItem('it-knowledge');
}

if (localStorage.getItem('group')) {
  studentForm.group.value = localStorage.getItem('group');
}

let localStorageInterests = JSON.parse(localStorage.getItem('interest'));

if (localStorageInterests) {
  localStorageInterests.map(localStorageInterest => {
    studentForm.querySelector('[name="interest"][value="' + localStorageInterest + '"]').checked = true;
  })
}