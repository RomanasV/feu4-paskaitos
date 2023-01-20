const arr = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];

console.log(arr);

// 1.1. Pašalinti pirmą masyvo narį.
arr.shift();
console.log(arr);

// 1.2. Pašalinti paskutinį masyvo narį.
arr.pop();
console.log(arr);

// 1.3. Rasti vidurinį masyvo narį ir jį pašalinti.
arr.splice(Math.floor(arr.length / 2), 1);
console.log(arr);

// 1.4. Pašalinti priešpaskutinį masyvo narį.
arr.splice(-2, 1);
console.log(arr);

// 1.5. Pašalinti antrą masyvo narį.
arr.splice(1, 1);
console.log(arr);

// 1.6. Pašalinti 7 ir 8 masyvo narius.
arr.splice(6, 2);
console.log(arr);

// 1.7. Pašalinti 4 ir 5 masyvo narius skaičiuojant nuo galo.
arr.splice(-6, 3);
console.log(arr);

// 1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.
arr.splice(2, 1, 888);
console.log(arr);

// 1.9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.
arr.splice(9, 1, 33, 789, 6543);
console.log(arr);

// 1.10. Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.
arr.splice(-1, 1, 321, 654, 987);
console.log(arr);

// 1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.
arr.splice(1, 0, 11);
console.log(arr);

// 1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.
arr.splice(13, 0, 1);
console.log(arr);

// 1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.
arr.splice(-1, 0, -1);
console.log(arr);

// 1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.
arr.splice(0, 0, 1, 2, 3);
console.log(arr);

// 1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.
arr.splice(arr.length, 0, -333, -321, -312);
console.log(arr);

// 1.16. Į masyvo vidurį pridėti skaičių 0.
arr.splice(arr.length / 2, 0, 0);
console.log(arr);

// 1.17. Pašalinti pirmą masyvo narį.
arr.shift();
console.log(arr);

// 1.18. Pašalinti paskutinį masyvo narį.
arr.pop();
console.log(arr);

// 1.19. Į masyvo pradžią pridėti žodį "start"
arr.unshift('start');
console.log(arr);

// 1.20. Į masyvo pabaigą pridėti žodį "end".
arr.push('end');
console.log(arr);

// 2.1. Gauti pirmą masyvo narį.
let task21 = arr.slice(0, 1);
console.log(task21);

// 2.2. Gauti paskutinį masyvo narį.
let task22 = arr.slice(-1);
console.log(task22);

// 2.3. Gauti antrą masyvo narį.
let task23 = arr.slice(1, 2);
console.log(task23);

// 2.4. Gauti priešpaskutinį masyvo narį.
let task24 = arr.slice(-2, -1);
console.log(task24);

// 2.5. Gauti aštuntą masyvo narį.
let task25 = arr.slice(7, 8);
console.log(task25);

// 2.6. Gauti devintą masyvo narį skaičiuojant nuo galo.
let task26 = arr.slice(-9, -8);
console.log(task26);

// 2.7. Gauti vidurinį masyvo narį.
let middle = Math.floor(arr.length / 2);
let task27 = arr.slice(middle, middle + 1);
console.log(task27);

// 2.8. Gauti pirmus tris masyvo narius.
let task28 = arr.slice(0, 3);
console.log(task28);

// 2.9. Gauti paskutinius tris masyvo narius.
let task29 = arr.slice(-3);
console.log(task29);

// 2.10. Gauti pirmus 10 masyvo narius.
let task210 = arr.slice(0, 10);
console.log(task210);

// 2.11. Gauti paskutinius 10 masyvo narius.
let task211 = arr.slice(-10);
console.log(task211);

// Gauti nuo 3 iki 8 masyvo nario (iš viso 6 nariai).
let task212 = arr.slice(2, 8);
console.log(task212);

// 2.13. Gauti nuo 5 iki 9 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 5 nariai).
let task213 = arr.slice(-9, -4);
console.log(task213);

// 2.14. Gauti nuo 11 iki 19 masyvo nario (iš viso 9 nariai).
let task214 = arr.slice(10, 19);
console.log(task214);

// 2.15. Gauti nuo 9 iki 17 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 9 nariai).
let task215 = arr.slice(-20, -8);
console.log(task215);

// 2.16. Gauti visus masyvo narius išskyrus pirmą.
let task216 = arr.slice(1);
console.log(task216);

// 2.17. Gauti visus masyvo narius išskyrus paskutinį.
let task217 = arr.slice(0, -1);
console.log(task217);

// 2.18. Gauti visus masyvo narius išskyrus pirmus 5.
let task218 = arr.slice(5);
console.log(task218);

// 2.19. Gauti visus masyvo narius išskyrus paskutinius 5.
let task219 = arr.slice(0, -5);
console.log(task219);

// 2.20. Gauti visus masyvo narius iki vidurinio masyvo nario, vidurinio nario neįskaičiuojant (iš viso 13 narių).
let task220 = arr.slice(0, Math.floor(arr.length / 2));
console.log(task220);

// 2.21. Gauti visus masyvo narius nuo vidurinio masyvo nario, vidurinio nario neįskaičiuojant, iki pabaigos (iš viso 13 narių).
let task221 = arr.slice(Math.ceil(arr.length / 2));
console.log(task221);

// 2.22. Gauti visus narius išskyrus pirmą ir paskutinį.
let task222 = arr.slice(1, -1);
console.log(task222);

// 2.23. Gauti visus narius išskyrus pirmus penkis ir paskutinius tris.
let task223 = arr.slice(5, -3);
console.log(task223);

// 2.24. Gauti visus narius išskyrus pirmą ir paskutinius 8.
let task224 = arr.slice(1, -8);
console.log(task224);

// 2.25. Gauti visus narius išskyrus pirmus 7 ir paskutinį.
let task225 = arr.slice(7, -1);
console.log(task225);

// 2.26. Gauti visus narius išskyrus pirmus 9 ir paskutinius 12.
let task226 = arr.slice(9, -12);
console.log(task226);

// 2.27. Gauti 9 narius skaičiuojant nuo 11.
let task227 = arr.slice(10, 10 + 9);
console.log(task227);

// 2.28. Gauti 12 narių skaičiuojant nuo 8.
let task228 = arr.slice(7, 7 + 12);
console.log(task228);

// 3.1. Gauti tik teigiamus skaičius.
let task31 = arr.filter(item => item > 0);
console.log(task31);

// 3.2. Gauti tik neigiamus skaičius.
let task32 = arr.filter(item => item < 0);
console.log(task32);

// 3.3. Gauti tik skaičius, kurie dalinasi iš 2.
let task33 = arr.filter(item => item % 2 === 0);
console.log(task33);

// 3.4. Gauti tik skaičius, kurie dalinasi iš 3.
let task34 = arr.filter(item => item % 3 === 0);
console.log(task34);

// 3.5. Gauti tik skaičius, kurie dalinasi iš 5.
let task35 = arr.filter(item => item % 5 === 0);
console.log(task35);

// 3.6. Gauti tik skaičius, kurie dalinasi iš 11.
let task36 = arr.filter(item => item % 11 === 0);
console.log(task36);

// 3.7. Gauti tik skaičius, kurie dalinasi iš 33.
let task37 = arr.filter(item => item % 31 === 0);
console.log(task37);

// 3.8. Gauti tik skaičius, kurie dalinasi iš 2 ir iš 3.
let task38 = arr.filter(item => item % 2 === 0 && item % 3 === 0);
console.log(task38);

// 3.9. Gauti tik skaičius, kurie dalinasi iš 3 ir iš 7.
let task39 = arr.filter(item => item % 3 === 0 && item % 7 === 0);
console.log(task39);

// 3.10. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 9.
let task310 = arr.filter(item => item % 5 === 0 && item % 5 === 0);
console.log(task310);

// 3.11. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 11.
let task311 = arr.filter(item => item % 5 === 0 && item % 11 === 0);
console.log(task311);

// 3.12. Gauti tik skaičius, kurie dalinasi iš 2, 8 ir 12.
let task312 = arr.filter(item => item % 2 === 0 && item % 8 === 0 && item % 12 === 0);
console.log(task312);

// 3.13. Gauti tik skaičius, kurie dalinasi iš 2 arba iš 3.
let task313 = arr.filter(item => item % 2 === 0 || item % 3 === 0);
console.log(task313);

// 3.14. Gauti tik skaičius, kurie dalinasi iš 3 arba iš 5.
let task314 = arr.filter(item => item % 3 === 0 || item % 5 === 0);
console.log(task314);

// 3.15. Gauti tik skaičius, kurie dalinasi iš 5 arba iš 6.
let task315 = arr.filter(item => item % 5 === 0 || item % 6 === 0);
console.log(task315);

// 3.16. Gauti tik skaičius, kurie dalinasi iš 7 arba iš 8.
let task316 = arr.filter(item => item % 7 === 0 || item % 8 === 0);
console.log(task316);

// 3.17. Gauti tik skaičius, kurie dalinasi iš 9 arba iš 13.
let task317 = arr.filter(item => item % 9 === 0 || item % 13 === 0);
console.log(task317);

// 3.18. Gauti tik skaičius, kurie dalinasi iš 2, 3 arba iš 5.
let task318 = arr.filter(item => item % 2 === 0 || item % 3 === 0 || item % 5 === 0);
console.log(task318);

// 3.19. Gauti tik skaičius, kurie dalinasi iš 5, 7 arba iš 9.
let task319 = arr.filter(item => item % 5 === 0 || item % 7 === 0 || item % 9 === 0);
console.log(task319);

// 3.20. Gauti tik skaičius, kurie dalinasi iš 7, 8 arba iš 11.
let task320 = arr.filter(item => item % 7 === 0 || item % 8 === 0 || item % 11 === 0);
console.log(task320);

// 3.21. Gauti tik skaičius, kurie dalinasi iš 9, 12 arba iš 13.
let task321 = arr.filter(item => item % 9 === 0 || item % 12 === 0 || item % 13 === 0);
console.log(task321);

// 3.22. Gauti tik skaičius, kurie yra didesni už 100.
let task322 = arr.filter(item => item > 100);
console.log(task322);

// 3.23. Gauti tik skaičius, kurie yra didesni už 555.
let task323 = arr.filter(item => item > 555);
console.log(task323);

// 3.24. Gauti tik skaičius, kurie yra didesni arba lygūs 888.
let task324 = arr.filter(item => item >= 888);
console.log(task324);

// 3.25. Gauti tik skaičius, kurie yra didesni arba lygūs 6789.
let task325 = arr.filter(item => item >= 6789);
console.log(task325);

// 3.26. Gauti tik skaičius, kurie yra mažesni už 50.
let task326 = arr.filter(item => item < 50);
console.log(task326);

// 3.27. Gauti tik skaičius, kurie yra mažesni už 1000.
let task327 = arr.filter(item => item < 1000);
console.log(task327);

// 3.28. Gauti tik skaičius, kurie yra mažesni arba lygūs -1.
let task328 = arr.filter(item => item <= -1);
console.log(task328);

// 3.29. Gauti tik skaičius, kurie yra mažesni arba lygūs -5564.
let task329 = arr.filter(item => item <= -5564);
console.log(task329);

// 3.30. Gauti tik skaičius, kurie yra mažesni už 1000 ir didesni už 500.
let task330 = arr.filter(item => item < 1000 && item > 500);
console.log(task330);

// 3.31. Gauti tik skaičius, kurie yra mažesni už 100 ir didesni už 0.
let task331 = arr.filter(item => item < 1000 && item > 500);
console.log(task331);

// 3.32. Gauti tik skaičius, kurie yra mažesni už 0 ir didesni už -50.
let task332 = arr.filter(item => item < 0 && item > -50);
console.log(task332);

// 3.33. Gauti tik skaičius, kurie yra mažesni arba lygūs 0 ir didesni už -100.
let task333 = arr.filter(item => item <= 0 && item > -100);
console.log(task333);

// 3.34. Gauti tik skaičius, kurie yra didesni arba lygūs 0 ir mažesni už 55.
let task334 = arr.filter(item => item >= 0 && item < 55);
console.log(task334);

// 3.35. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir mažesni arba lygūs 654.
let task335 = arr.filter(item => item >= 444 && item <= 654);
console.log(task335);

// 3.36. Gauti tik teigiamus skaičius, kurie dalinasi iš 2.
let task336 = arr.filter(item => item > 0 && item % 2 === 0);
console.log(task336);

// 3.37. Gauti tik teigiamus skaičius, kurie dalinasi iš 3.
let task337 = arr.filter(item => item > 0 && item % 3 === 0);
console.log(task337);

// 3.38. Gauti tik neigiamus skaičius, kurie dalinasi iš 4.
let task338 = arr.filter(item => item < 0 && item % 4 === 0);
console.log(task338);

// 3.39. Gauti tik neigiamus skaičius, kurie dalinasi iš 111.
let task339 = arr.filter(item => item < 0 && item % 111 === 0);
console.log(task339);

// 3.40. Gauti tik skaičius, kurie yra didesni už 500 ir kurie dalinasi iš 2.
let task340 = arr.filter(item => item > 500 && item % 2 === 0);
console.log(task340);

// 3.41. Gauti tik skaičius, kurie yra didesni už 1000 ir kurie dalinasi iš 3.
let task341 = arr.filter(item => item > 1000 && item % 3 === 0);
console.log(task341);

// 3.42. Gauti tik skaičius, kurie yra mažesni už 1000 ir kurie dalinasi iš 9.
let task342 = arr.filter(item => item < 1000 && item % 9 === 0);
console.log(task342);

// 3.43. Gauti tik skaičius, kurie yra mažesni už 500 ir kurie dalinasi iš 2.
let task343 = arr.filter(item => item < 500 && item % 2 === 0);
console.log(task343);

// 3.44. Gauti tik skaičius, kurie yra didesni arba lygūs 33 ir kurie dalinasi iš 3.
let task344 = arr.filter(item => item >= 33 && item % 3 === 0);
console.log(task344);

// 3.45. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir kurie dalinasi iš 12.
let task345 = arr.filter(item => item >= 444 && item % 12 === 0);
console.log(task345);

// 3.46. Gauti tik skaičius, kurie yra mažesni arba lygūs 155 ir kurie dalinasi iš 5.
let task346 = arr.filter(item => item <= 155 && item % 5 === 0);
console.log(task346);

// 3.47. Gauti tik skaičius, kurie yra mažesni arba lygūs -333 ir kurie dalinasi iš 9.
let task347 = arr.filter(item => item <= -333 && item % 9 === 0);
console.log(task347);

// 3.48. Gauti tik skaičius, kurie yra didesni už 100, mažesni už 500 ir kurie dalinasi iš 5.
let task348 = arr.filter(item => item > 100 && item < 500 && item % 5 === 0);
console.log(task348);

// 3.49. Gauti tik skaičius, kurie yra didesni arba lygūs 888, mažesni už 1000 ir kurie dalinasi iš 2.
let task349 = arr.filter(item => item >= 888 && item < 1000 && item % 2 === 0);
console.log(task349);

let task350 = arr.filter(item => item <= 888 && item >= -333 && item % 3 === 0 && item !== 0);
console.log(task350);

// 3.51. Gauti tik skaičius.
let task351 = arr.filter(item => isNaN(item));
console.log(task351);

// 3.52. Gauti tik tekstą (string).
let task352 = arr.filter(item => !isNaN(item));
console.log(task352);

// 3.53. Gauti tik tekstus (string), kurie turi daugiau nei 5 simbolius.
let task353 = arr.filter(item => isNaN(item) && item.length > 5);
console.log(task353);

// 3.54. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.
let task354 = arr.filter(item => isNaN(item) && item.length <= 5);
console.log(task354);

// 3.55. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.
let task355 = arr.filter(item => isNaN(item) && item.length <= 5);
console.log(task355);

// 3.56. Gauti tik tekstus (string), kurie turi raidę t.
let task356 = arr.filter(item => isNaN(item) && item.includes('t'));
console.log(task356);

// 3.57. Gauti tik tekstus (string), kurie turi raidę y.
let task357 = arr.filter(item => isNaN(item) && item.includes('y'));
console.log(task357);

// 3.58. Gauti tik tekstus (string), kurie turi raides e arba a.
let task358 = arr.filter(item => isNaN(item) && (item.includes('e') || item.includes('a')));
console.log(task358);

// 3.59. Gauti tik tekstus (string), kurie turi raides t ir i.
let task359 = arr.filter(item => isNaN(item) && (item.includes('t') && item.includes('i')));
console.log(task359);

// 3.60. Gauti tik tekstus (string), kurie turi raide t, bet neturi raidės k.
let task360 = arr.filter(item => isNaN(item) && (item.includes('t') && item.includes('k')));
console.log(task360);

// 3.61. Gauti tik tekstus (string), kurie turi raide a, bet neturi raidės s.
let task361 = arr.filter(item => isNaN(item) && (item.includes('a') && !item.includes('s')));
console.log(task361);

// 3.62. Gauti tik tekstus (string), kurie turi daugiau nei vieną raidę t.
let task362 = arr.filter(item => {
  if (isNaN(item)) {
    let wordLetters = item.split(''); // split metodas suskaido string'ą pagal pateiktą reikšmę. Jeigu pateikiami tušti skliaustai, tai string'ą suskaido raidėmis
    let sameLettersArray = wordLetters.filter(letter => letter === 't');

    if (sameLettersArray.length > 1) {
      return item;
    }
  }
});
console.log(task362);

// 3.63. Gauti tik tekstus (string), kurie turi raidžių junginį st.
let task363 = arr.filter(item => isNaN(item) && item.includes('st'));
console.log(task363);

// 3.64. Gauti tik tekstus (string), kurie turi raidžių junginį nd.
let task364 = arr.filter(item => isNaN(item) && item.includes('nd'));
console.log(task364);

// 3.65. Gauti tik tekstus (string), kurie neturi raidės s.
let task365 = arr.filter(item => isNaN(item) && !item.includes('s'));
console.log(task365);

// 3.66. Gauti tik tekstus (string), kurie neturi raidės t.
let task366 = arr.filter(item => isNaN(item) && !item.includes('t'));
console.log(task366);

// 3.67. Gauti tik tekstus (string), kurie neturi raidės r ir l.
let task367 = arr.filter(item => isNaN(item) && !item.includes('r') && !item.includes('l'));
console.log(task367);

// 3.68. Gauti tik tekstus (string), kurie prasideda skaičiumi.
let task368 = arr.filter(item => isNaN(item) && !isNaN(item[0]));
console.log(task368);

// 3.69. Gauti tik tekstus (string), kurie prasideda raide s.
let task369 = arr.filter(item => isNaN(item) && item.startsWith('s'));
console.log(task369);

// 3.70. Gauti tik tekstus (string), kurie prasideda raide o.
let task370 = arr.filter(item => isNaN(item) && item.startsWith('o'));
console.log(task370);

// 3.70. Gauti tik tekstus (string), kurie baigiasi raide d.
let task3701 = arr.filter(item => isNaN(item) && item.endsWith('d'));
console.log(task3701);

// 3.71. Gauti tik tekstus (string), kurie baigiasi raide s.
let task371 = arr.filter(item => isNaN(item) && item.endsWith('s'));
console.log(task371);

// 3.72. Gauti tik tekstus (string), kurie turi daugiau nei 4 simbolius ir turi raidę o.
let task372 = arr.filter(item => isNaN(item) && item.length > 4 && item.includes('o'));
console.log(task372);

// 3.73. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
let task373 = arr.filter(item => isNaN(item) && item.length >= 5 && item.includes('a'));
console.log(task373);

// 3.74. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
let task374 = arr.filter(item => isNaN(item) && item.length >= 5 && item.includes('a'));
console.log(task374);

// 3.75. Gauti tik tekstus (string), kurie turi porinį simbolių skaičių.
let task375 = arr.filter(item => isNaN(item) && item.length % 2 === 0);
console.log(task375);

// 3.76. Gauti tik tekstus (string), kurie turi neporinį simbolių skaičių ir turi raidę s.
let task376 = arr.filter(item => isNaN(item) && item.length % 2 !== 0 && item.includes('s'));
console.log(task376);

// 3.77. Gauti tik tekstus (string), kurių trečias simbolis yra a.
let task377 = arr.filter(item => isNaN(item) && item[2] === 'a');
console.log(task377);

// 3.78. Gauti tik tekstus (string), kurių ketvirtas simbolis yra l.
let task378 = arr.filter(item => isNaN(item) && item[3] === 'l');
console.log(task378);

// 3.79. Gauti tik tekstus (string), kurių penktas simbolis nėra t ir kurie turi daugiau simbolių nei 4.
let task379 = arr.filter(item => isNaN(item) && item[4] !== 't' && item.length > 4);
console.log(task379);

// 3.80. Gauti tik tekstus (string), kurių pirmas simbolis nėra e, kurie turi mažiau simbolių nei 6 ir kurie neprasideda skaičiumi.
let task380 = arr.filter(item => isNaN(item) && item[0] !== 'e' && item.length < 6 && isNaN(item[0]));
console.log(task380);