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


function task1() {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}

// task1();
