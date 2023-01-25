// UŽDUOTIS:
// 1. Naudojant Object() metodą sukurti kintamąjį įmonei apibūdinti.
let company1 = new Object();
// let company1 = {};

// 2. Prie objekto pridėti:
// 2.1. Property „company name" ir priskirti įmonės pavadinimo reikšmę.
company1['company name'] = 'Company ABC';

// 2.2. Property „opened" ir priskirti įmonės įkūrimo metų reikšmę.
company1.opened = 2000;

// 2.3. Property „companyCode" ir priskirti įmonės kodo reikšmę.
company1.companyCode = 45445646546;

// 2.4. Property „employees" ir priskirti įmonėje dirbančių darbuotojų kiekio reikšmę.
company1.employees = 30;

// 2.5. Property „ceo" ir priskirti įmonės vadovo reikšmę.
company1.ceo = 'John Doe';

// 2.6. Property „nvo" ir priskirti boolean reikšmę (ar įmonė turi NVO statusą).
company1.nvo = true;

// 2.7. Property „workingLocation" ir priskirti įmonės veiklos šalių value (turi būti bent 2 veiklos šalys).
company1.workingLocations = ['Lithuania', 'Poland'];

// 2.8. Property „activityAreas" ir priskirti įmonės veiklos sričių reikšmę (turi būti bent dvi veiklos sritys).
company1.activityAreas = ['B2B sales', 'Marketing'];

// 2.9. Property „contacts", kuris turės:
company1.contacts = {};
//       2.9.1. „phone"
company1.contacts.phone = 8645664646;
//       2.9.2. „email"
company1.contacts.email = 'info@abc.lt';
//       2.9.3. „address", kuris turės:
company1.contacts.address = {};
//           2.9.3.1. „country"
company1.contacts.address.country = 'Lithuania';
//           2.9.3.2. „city"
company1.contacts.address.city = 'Vilnius';
//           2.9.3.3. „street"
company1.contacts.address.street = 'Vilniaus st.';
//           2.9.3.4. „apartment"
company1.contacts.address.apartment = 15;
// 2.10. Property „subsidiary", kurio reikšmė bus naujas objektas.
company1.subsidiaries = [];

// 5. Sukurti funkciją, kuri sukuria adreso string'ą: „Vilniaus st. 15, Vilnius, Lithuania.".
company1.getAddress = function() {
  return `${this.contacts.address.street} ${this.contacts.address.apartment}, ${this.contacts.address.city}, ${this.contacts.address.country}`;
}

console.log(company1.getAddress());

// 6. Sukurti dvi funkcijas, kurios:
//        6.1. Pakeičia NVO statusą į true.
company1.setNVO = function() {
  this.nvo = true;
}
//        6.2. Pakeičia NVO statusą į false.
company1.setNonNVO = function() {
  this.nvo = false;
}
//        6.3. BONUS, sukurti funkciją, kuri keičia NVO statusą iš true į false ir iš false į true.
company1.switchNVO = function() {
  // if (this.nvo === true) {
  //   this.nvo = false;
  // } else {
  //   this.nvo = true;
  // }

  this.nvo = !this.nvo;
}

// 7. Sukurti funkcijas, kurios grąžina:
//        7.1. Šalis, kuriose veikia įmonė į vieną string'ą.
company1.getWorkingLocations = function() {
  // return this.workingLocations.reduce((str, currentLocation) => str + ', ' + currentLocation);
  return this.workingLocations.join(', ');
}

console.log(company1.getWorkingLocations());

//        7.2. Veiklos sritis, kuriose veikia įmonė į vieną string'ą.
company1.getActivityAreas = function() {
  return this.activityAreas.join(', ');
}

console.log(company1.getActivityAreas());

// 8. Sukurti funkcijas, kurios prideda:
//        8.1. Naują veiklos šalį prie šalių masyvo.
company1.addWorkingLocation = function(newLocation) {
  this.workingLocations.push(newLocation);
  return this.workingLocations;
}

console.log(company1.addWorkingLocation('Italy'));

//        8.2. Naują veiklos rūšį prie veiklų masyvo.
company1.addActivityArea = function(newArea) {
  this.activityAreas.push(newArea);
}

company1.addActivityArea('Tourism');
console.log(company1.activityAreas);

// 9. Sukurti funkcijas, kurios pašalina:
//        9.1. Veiklos šalį iš šalių masyvo.
company1.removeWorkingLocation = function(locationToRemove) {
  // let updatedWorkingLocations = this.workingLocations.filter(location => location !== locationToRemove);
  
  // this.workingLocations = updatedWorkingLocations;

  this.workingLocations = this.workingLocations.filter(location => location !== locationToRemove);

  return this.workingLocations;
}

console.log(company1.removeWorkingLocation('Poland'));

//        9.2. Veiklos rūšį iš veiklų masyvo.
company1.removeActivityArea = function(areaToRemove) {
  this.activityAreas = this.activityAreas.filter(area => area !== areaToRemove);
}

company1.removeActivityArea('Marketing');
console.log(company1.activityAreas);


let company2 = {
  'company name': 'Company XYZ',
  opened: 2005,
  companyCode: 789779797,
  employees: 20,
  ceo: 'Doe John',
  nvo: false,
  workingLocations: ['Germany'],
  activityAreas: ['Tourism', 'B2C Sales'],
  contacts: {
    phone: 7646546464,
    email: 'info@xyz.de',
    address: {
      country: 'Lithuania',
      city: 'Vilnius',
      street: 'Vilniaus st.',
      apartment: 25,
    }
  },
  subsidiaries: [company1],
  getAddress: function() {
    return `${this.contacts.address.street} ${this.contacts.address.apartment}, ${this.contacts.address.city}, ${this.contacts.address.country}`;
  },
  setNVO: function() {
    this.nvo = true;
  },
  setNonNVO: function() {
    this.nvo = false;
  },
  switchNVO() {
    this.nvo = !this.nvo;
  },
  getWorkingLocations() {
    return this.workingLocations.join(', ');
  },
  getActivityAreas() {
    return this.activityAreas.join(', ');
  },
  addWorkingLocation(newLocation) {
    this.workingLocations.push(newLocation);
    return this.workingLocations;
  },
  addActivityArea(newArea) {
    this.activityAreas.push(newArea);
    return this.activityAreas;
  },
  removeWorkingLocation(locationToRemove) {
    let updatedWorkingLocations = this.workingLocations.filter(location => location !== locationToRemove);
    this.workingLocations = updatedWorkingLocations;
  },
  removeActivityArea(areaToRemove) {
    let updatedActivityAreas = this.activityAreas.filter(area => area !== areaToRemove);
    this.activityAreas = updatedActivityAreas;
    return this.activityAreas;
  }
}

console.log(company2)
console.log(company2.getAddress());
console.log(company2.nvo);
company2.setNVO();
console.log(company2.nvo);
company2.setNonNVO();
console.log(company2.nvo);
company2.switchNVO();
console.log(company2.nvo);
company2.switchNVO();
console.log(company2.nvo);
console.log(company2.getWorkingLocations());
console.log(company2.getActivityAreas());
console.log(company2.addWorkingLocation('France'));
console.log(company2.getWorkingLocations());
console.log(company2.getActivityAreas());
company2.addActivityArea('Marketing');
console.log(company2.getActivityAreas());
console.log(company2.getWorkingLocations());
company2.removeWorkingLocation('Germany');
console.log(company2.getWorkingLocations());
console.log(company2.getActivityAreas());
console.log(company2.removeActivityArea('Tourism'));
console.log(company2.getActivityAreas());