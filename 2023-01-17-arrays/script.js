// Masyvas / array
let numsArray = [5, 4, 6, 456, 789, 4641, 4, 3154, 456.789, 45, 555];
// Indeksai      0  1  2   3    4     5   6    7      8

// console.log(numsArray);
// console.log(numsArray.length);

let arr = ['Vienas', 'Du', 'Trys', 3.5, 'Keturi', false, [2, 3, 5]];
// index      0       1       2     3      4        5        6
//                                                        0  1  2

// console.log(arr);
// console.log(arr.length);

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[6][0]);
// console.log(arr[6][1]);
// console.log(arr[6][2]);

// console.log(numsArray);

// console.log(numsArray[0]);
// console.log(numsArray[1]);
// console.log(numsArray[2]);
// console.log(numsArray[3]);
// console.log(numsArray[4]);
// console.log(numsArray[5]);
// console.log(numsArray[6]);
// console.log(numsArray[7]);
// console.log(numsArray[8]);

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

// task61();

// 1. Skaičius nuo 1 iki 100.
// 2. Skaičiai, kurie dalinasi iš 3 turi būti pakeisti į žodį „Fizz";
// 3. Skaičiai, kurie dalinasi iš 5 turi būti pakeisti į žodį „Buzz";
// 4. Skaičiai, kurie dalinasi iš 3 ir 5 turi būti pakeisti į žodį „FizzBuzz";

// 5. Skaičiai, kurie dalinasi iš 7, turi būti pakeisti į žodį „Biff".
// 5.1. Skaičiai, kurie dalinasi iš 7 ir 3 turi būti pakeisti į žodį „FizzBiff";
// 5.2. Skaičiai, kurie dalinasi iš 7 ir 5 turi būti pakeisti į žodį „BuzzBiff";
// 5.3. Skaičiai, kurie dalinasi iš 7, iš 5 ir iš 3 turi būti pakeisti į žodį „FizzBuzzBiff";

// 6. Skaičiai, kurie dalinasi iš 9, turi būti pakeisti į žodį „Fuzz".

// 7. Skaičiai, kurie dalinasi iš 11, turi būti pakeisti į žodį „Bizz".

// 3 5 7 9 11
// 3 5 7 9
// 3 5 7 11
// 5 7 9 11
// 3 5 7
// 3 5 9
// 3 7 9
// 5 7 9
// 3 5 11
// 3 7 11
// 3 9 11
// 5 7 11
// 5 9 11
// 7 9 11
// 3 5
// 3 7
// 5 7
// 3 9
// 5 9
// 7 9
// 3 11
// 5 11
// 7 11
// 9 11
// 3
// 5
// 7
// 9
// 11


function fizzBuzz1() {
  for (let i = 1; i <= 500; i++) {

    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0 && i % 9 === 0) {
      console.log('FizzBuzzBiffFuzz');
    } else if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
      console.log('FizzBuzzBiff');
    } else if (i % 3 === 0 && i % 5 === 0 && i % 9 === 0) {
      console.log('FizzBuzzFuzz');
    } else if (i % 3 === 0 && i % 7 === 0 && i % 9 === 0) {
      console.log('FizzBiffFuzz');
    } else if (i % 5 === 0 && i % 7 === 0 && i % 9 === 0) {
      console.log('BuzzBiffFuzz');
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0 && i % 7 === 0) {
      console.log('FizzBiff');
    } else if (i % 5 === 0 && i % 7 === 0) {
      console.log('BuzzBiff');
    } else if (i % 3 === 0 && i % 9 === 0) {
      console.log('FizzFuzz');
    } else if (i % 5 === 0 && i % 9 === 0) {
      console.log('BuzzFuzz');
    } else if (i % 7 === 0 && i % 9 === 0) {
      console.log('BiffFuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else if (i % 7 === 0) {
      console.log('Biff');
    } else if (i % 9 === 0) {
      console.log('Fuzz');
    } else {
      console.log(i);
    }

  } 
}

// fizzBuzz1();

function fizzBuzz2() {
  for (let i = 1; i <= 500; i++) {
    let output = '';

    if (i % 3 === 0) {
      output += 'Fizz';
    }

    if (i % 5 === 0) {
      output += 'Buzz';
    }

    if (i % 7 === 0) {
      output += 'Biff';
    }

    if (i % 9 === 0) {
      output += 'Fuzz';
    }

    if (i % 11 === 0) {
      output += 'Bizz';
    }

    if (i % 37 === 0) {
      output += 'Puzz';
    }
    
    if (!output) {
      output = i;
    }

    console.log(output);
  } 
}

// fizzBuzz2();


function fizzBuzz3(start, end) {
  for (let i = start; i <= end; i++) {
    let output = '';

    // i % 3 === 0 && (output += 'Fizz');
    // i % 5 === 0 && (output += 'Buzz');
    // i % 7 === 0 && (output += 'Biff');
    // i % 9 === 0 && (output += 'Fuzz');
    // i % 11 === 0 && (output += 'Bizz');
    // i % 37 === 0 && (output += 'Puzz');
    // i % 111 === 0 && (output += 'jusu zodis');
    // !output && (output = i);

    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    if (i % 7 === 0) output += 'Biff';
    if (i % 9 === 0) output += 'Fuzz';
    if (i % 11 === 0) output += 'Bizz';
    if (i % 37 === 0) output += 'Puzz';
    if (i % 111 === 0) output += 'jusu zodis';
    if (!output) output = i;

    console.log(output);
  } 
}

fizzBuzz3(150, 500);