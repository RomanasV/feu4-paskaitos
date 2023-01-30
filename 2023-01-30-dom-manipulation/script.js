// Paselektinti HTML elementą
let paragraph = document.querySelector('p');
paragraph.textContent = 'Labas';
paragraph.innerHTML = 'Labas <span style="color: red;" class="test">rytas</span>';

// Sukurti HTML elemntą
let spanElement = document.createElement('span');
spanElement.textContent = '!';

// Append - prideda su JS sukurtą HTML elementą (node) į kito elemento pabaigą
paragraph.append(spanElement);

// Prepend - prideda su JS sukurtą HTML elementą (node) į kito elemento pradžią
paragraph.prepend(spanElement);

// After - prideda su JS sukurtą HTML elemntą (node) po kitu elementu (šalia kito elemento)
paragraph.after(spanElement);

// Before - prideda su JS sukurtą HTML elementą (node) prieš kitą elementą (šalia kito elemento)
paragraph.before(spanElement);

// Remove - pašalina HTML elementą
spanElement.remove();

let newParagraph = document.createElement('p');
newParagraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsum perferendis quasi perspiciatis! Distinctio nisi pariatur officiis, quaerat in cupiditate nam impedit eos ex aliquid, nesciunt doloribus, natus amet debitis.';

paragraph.after(newParagraph);

// Būdas pakeisti HTML elemento klases
newParagraph.className = 'pirma-klase antra-klase';
console.log(newParagraph.className);

// newParagraph.className = 'trecia-klase';
// newParagraph.className = newParagraph.className + ' trecia-klase';
newParagraph.className += ' trecia-klase';

// Prideda klasę prie HTML elemento
newParagraph.classList.add('ketvirta-klase');
newParagraph.classList.add('penkta-klase', 'sesta-klase');

// Pašalina klasę iš HTML elemento
// newParagraph.classList.remove('pirma-klase');
// newParagraph.classList.remove('antra-klase');
newParagraph.classList.remove('pirma-klase', 'antra-klase', 'desimta-klase');

// Pakeičia klasę HTML elemente
newParagraph.classList.replace('trecia-klase', 'septinta-klase');

// Prideda klasę prie HTML elemento, jeigu tokios klasės dar neturi ir pašalina jeigu tokią klasę jau turi
newParagraph.classList.toggle('toggle-klase'); // prideda
newParagraph.classList.toggle('toggle-klase'); // pašalina
newParagraph.classList.toggle('toggle-klase'); // prideda
newParagraph.classList.toggle('toggle-klase'); // pašalina

// Patikrina ar HTML elementas turi nurodytą klasę (grąžina true arba false)
console.log(newParagraph.className);
console.log(newParagraph.classList.contains('penkta-klase'));
console.log(newParagraph.classList.contains('septinta-klase'));
console.log(newParagraph.classList.contains('astunta-klase'));
console.log(newParagraph.classList.contains('klase'));