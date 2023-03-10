console.groupCollapsed('Masyvai');
// Masyvų kūrimas
let students = ['Steve', 'John', 'Mark'];

// Masyvo narių pasiekimas
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);

// Kaip iteruojama per masyva (ciklas/loop)

// for ciklas
for (let i = 0; i < students.length; i++) {
  console.log('For ciklas: ' + students[i]);
}

// map ciklas
students.map((student) => {
  console.log('Map ciklas: ' + student);
});

// forEach ciklas
students.forEach((student) => {
  console.log('ForEach ciklas: ' + student);
});

// while ciklas
let n = 0;
while (n < students.length) {
  console.log('While ciklas: ' + students[n]);
  n++;
}

// do while ciklas
let m = 0;
do {
  console.log('Do While ciklas: ' + students[m]);
  m++;
} while (m < students.length);

// for ...of ciklas
for (let student of students) {
  console.log('For ...of ciklas: ' + student);
}


//                 Vardas                   Pavarde   Amzius Grupe Miestas
let studentas1 = ['Petras', 'Petrauskas', 'Petraitis', 25, 'FEU4', 'Vilnius'];

console.log(studentas1);
console.log(studentas1[0]);
console.log(studentas1[1]);
console.log(studentas1[2]);
console.log(studentas1[3]);
console.log(studentas1[4]);
console.log(studentas1[5]);

console.groupEnd();

/*

Objekto sintaksė:

let object = {
  key: 'value',
}

Studentas 1:
  - Vardas: Petras,
  - Antras vardas: Petrauskas,
  - Pavarde: Petraitis,
  - Amzius: 25,
  - Grupe: FEU4,
  - Miestas: Vilnius

*/

let studentObj = {
  name: 'Petras', // Property (key: value)
  'middle name': 'Petrauskas',
  surname: 'Petraitis',
  age: 25,
  group: 'FEU4',
  city: 'Vilnius',
  getFullName: function() {
    return `${this.name} ${this['middle name']} ${this.surname}`;
  },
  setStudentInactive() {
    this.isActive = false;
  },
  setStudentActive() {
    this.isActive = true;
  },
  addHobby(newHobby) {
    this.hobbies.push(newHobby);
  }
};

console.log(studentObj.getFullName());
studentObj.setStudentInactive();
console.log(studentObj.isActive);
studentObj.setStudentActive();
console.log(studentObj.isActive);



// Objekto properties pasiekimas
console.log(studentObj);
console.log(studentObj['name']);
console.log(studentObj['middle name']);
console.log(studentObj['surname']);
console.log(studentObj['age']);
console.log(studentObj['group']);
console.log(studentObj['city']);

let propertyName = 'city';
console.log(studentObj[propertyName]);

console.log(studentObj.name);
console.log(studentObj.surname);
console.log(studentObj.age);
console.log(studentObj.group);
console.log(studentObj.city);

// Objekto properties keitimas
console.log(studentObj.age);
studentObj.age = 26;
console.log(studentObj.age);

studentObj['city'] = 'Kaunas';
console.log(studentObj['city']);

// Objekto properties sukūrimas
console.log(studentObj.isActive);
studentObj.isActive = true;
console.log(studentObj.isActive);

studentObj['birth city'] = 'Klaipėda';
console.log(studentObj['birth city']);

// Objekto properties ištrynimas
delete studentObj['birth city'];
console.log(studentObj['birth city']);

studentObj.hobbies = ['sports', 'reading'];
console.log(studentObj.hobbies);
console.log(studentObj.hobbies[0]);
console.log(studentObj.hobbies[1]);
console.log(studentObj.hobbies.length);

studentObj.hobbies.map((hobby) => {
  console.log(hobby);
})

// Pirmas bŪdas - kurti adreso objektą tiesiogiai studento objekte
// studentObj.address = {
//   city: 'Vilnius',
//   street: 'Vilniaus st.',
//   country: 'Lithuania',
//   apartment: 15,
// }

// Antras būdas - kurti naują kintamąjį
// let studentAddress = {
//   city: 'Vilnius',
//   street: 'Vilniaus st.',
//   country: 'Lithuania',
//   apartment: 15,
// }

// studentObj.address = studentAddress;

// Trečias būdas
studentObj.address = {};
// studentObj.address = new Object();
studentObj.address.city = 'Vilnius';
studentObj.address.street = 'Vilniaus st.';
studentObj.address.country = 'Lithuania';
studentObj.address.apartment = 15;

console.log(studentObj);
console.log(studentObj.address.city);
console.log(studentObj.address.street);
console.log(studentObj.address.country);
console.log(studentObj.address.apartment);



console.log(studentObj.hobbies);
studentObj.addHobby('Siuvinejimas');
console.log(studentObj.hobbies);

studentObj.removeHobby = function(hobbyToRemove) {
  // let updatedHobbies = this.hobbies.filter((hobby) => {
  //   return hobby !== hobbyToRemove;
  // })

  // let updatedHobbies = this.hobbies.filter(hobby => hobby !== hobbyToRemove);
  // this.hobbies = updatedHobbies;

  this.hobbies = this.hobbies.filter(hobby => hobby !== hobbyToRemove);
}

studentObj.removeHobby('Siuvinejimas');
studentObj.removeHobby('sports');
studentObj.addHobby('traveling');
console.log(studentObj.hobbies)