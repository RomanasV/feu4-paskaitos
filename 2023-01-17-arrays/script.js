// Masyvas / array
let numsArray = [5, 4, 6, 456, 789, 4641, 4, 3154, 456.789, 45, 555];
// Indeksai      0  1  2   3    4     5   6    7      8

console.log(numsArray);
console.log(numsArray.length);

let arr = ['Vienas', 'Du', 'Trys', 3.5, 'Keturi', false, [2, 3, 5]];
// index      0       1       2     3      4        5        6
//                                                        0  1  2

console.log(arr);
console.log(arr.length);

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[6][0]);
console.log(arr[6][1]);
console.log(arr[6][2]);

console.log(numsArray);

console.log(numsArray[0]);
console.log(numsArray[1]);
console.log(numsArray[2]);
console.log(numsArray[3]);
console.log(numsArray[4]);
console.log(numsArray[5]);
console.log(numsArray[6]);
console.log(numsArray[7]);
console.log(numsArray[8]);

/* 

FOR CIKLAS

for (kintamasis; sąlyga; kintamojo pakeitimas) {
  ...
}


*/

// for (let i = 0; i < numsArray.length; i++) {
//   console.log(i + '. ' + numsArray[i]);
// }


// Sukurti funkcijas, kurios paleidžia ciklą su skaičiais nuo 1 iki 100. Šie ciklai:
// 1. Padaugina skaičių iš 2.
// 2. Padaugina skaičių iš 5.
// 3. Prideda prie skaičiaus 5.
// 4. Atima iš skaičiaus 2.
// 5. Pakelia skaičių kvadratu.
// 6. Pakelia skaičių kūbu.

// 7. Sukurti analogiškas funkcijas pirmoms užduotims, tačiau padaryti, jog ciklai skaičiuotųsi nuo 100 iki 1.

// 8. Kiekvienos užduoties išvesties tekstą suformuluoti, jog būtų parašytas užduoties sprendimas, pvz.: 
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// ir t.t.

// 9. Papildyti funkcijas, jog jos priimtu šiuos argumentus:
// 9.1. Nusakytų nuo kokio skaičiaus prasidės ciklas.
// 9.2. Nusakytų iki kokio skaičiaus ciklas tęsis.
// 9.3. Nusakytų kelinto ciklo metu turi išvesti atsakymą į konsolę.

function task1(start = 1, end = 100, nth = 1) {
  for (let i = start; i <= end; i += nth) {
    // console.log(i + '*' + 2 + ' = ' + (i * 2));
    
    let answer = i * 2;
    let output = `${i} * 2 = ${answer}`;
    
    console.log(output);
  }
}

// task1(1, 100, 15);

function task11(start = 100, end = 1, nth = 1) {
  for (let i = start; i >= end; i -= nth) {
    let answer = i * 2;
    let output = `${i} * 2 = ${answer}`;
    
    console.log(output);
  }
}

// task11(100, 1, 15);

function task61(start = 1, end = 100, nth = 1) {
  for (let i = start; i <= end; i += nth) {
    // console.log(i * i * i);
    // console.log(Math.pow(i, 3));
    console.log(i**3);
  }
}

task61();