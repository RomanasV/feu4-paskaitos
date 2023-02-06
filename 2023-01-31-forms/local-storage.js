localStorage.setItem('test', 'labas');
localStorage.removeItem('test');
console.log(localStorage.getItem('test'));


const input = document.querySelector('form input');
input.value = localStorage.getItem('input-field');

input.addEventListener('input', () => {
  localStorage.setItem('input-field', input.value);
})

// Išsaugoma reikšmė number tipo
// localStorage.setItem('personAge', 25);
localStorage.setItem('personAge', 25);

// Gaunama reikšmė string tipo
console.log(localStorage.getItem('personAge'));
console.log(JSON.parse(localStorage.getItem('personAge')));
console.log(typeof JSON.parse(localStorage.getItem('personAge')));

// String tipo reikšmės pakeitimas į number tipą
console.log(localStorage.getItem('personAge'));
console.log(Number(localStorage.getItem('personAge')));
console.log(typeof Number(localStorage.getItem('personAge')));

// Objekto išsaugojimas localStorage / sessionStorage
const obj = {
  name: 'John',
  surname: 'Doe'
}

console.log(obj);
console.log(typeof obj);

// Objekto pakeitimas į string'ą
const strObj = JSON.stringify(obj);
console.log(strObj);
console.log(typeof strObj);

localStorage.setItem('strObj', strObj);
console.log(localStorage.getItem('strObj'));
console.log(typeof localStorage.getItem('strObj'));

// Sting'o pakeitimas į objektą
const localStrObj = localStorage.getItem('strObj');
console.log(localStrObj);

const localObj = JSON.parse(localStrObj);
console.log(localObj);
console.log(typeof localObj);
console.log(localObj.name);
console.log(localObj.surname);


let arr = ['Vienas', "Du", `Trys`, 4, '5', true];

console.log(arr);

localStorage.setItem('arr', arr);
console.log(localStorage.getItem('arr'));
console.log(typeof localStorage.getItem('arr'));

// console.log(localStorage.getItem('arr').split(','))

let strArr = JSON.stringify(arr);
console.log(strArr);
console.log(typeof strArr);

localStorage.setItem('strArr', strArr);

let localStrArr = localStorage.getItem('strArr');
console.log(localStrArr);

let localArr = JSON.parse(localStrArr);

console.log(localArr);
console.log(typeof localArr);
console.log(localArr[0]);
console.log(localArr[1]);

localArr.map(item => console.log(item));

localStorage.clear();