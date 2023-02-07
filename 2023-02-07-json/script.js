let obj = {
  name: 'John',
  test: "Lab\"as",
  age: 28,
  nextAge: 28 + 1,
  children: ['Child 1', 'Child 2'],
  address: {
    street: 'Vilniaus st.',
    city: 'Vilnius',
    country: 'Lithuania',
  },
  married: true,
  getAddressInfo() {
    return `Address is ${this.address.street} ${this.address.city}, ${this.address.country}.`
  }
}

console.log(obj.name);
console.log(obj.age);
console.log(obj.nextAge);
console.log(obj['children']);
console.log(obj.children);
console.log(obj.children[0]);
console.log(obj.children[1]);
console.log(obj.getAddressInfo());

// Įprastas objektas
console.log(obj);

// Objektas paverstas į JSON objektą
let json = JSON.stringify(obj);
console.log(json);

// JSON to OBJ
let convertedObj = JSON.parse(json);
console.log(convertedObj);

let jsonObj = {
  "name": "John",
}

console.log(jsonObj);

// FETCH API
fetch('movies.json')
  .then(response => response.json())
  .then(movies => {
    console.log(movies);
  });