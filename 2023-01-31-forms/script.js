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

  const studentItem = document.createElement('div');
  studentItem.classList.add('student-item');

  studentItem.textContent = studentName;

  studentList.prepend(studentItem);
})