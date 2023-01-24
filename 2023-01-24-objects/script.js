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
};

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
