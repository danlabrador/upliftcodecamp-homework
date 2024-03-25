/**
 * This is the main file for the sorting homework.
 * You can run this file to test the sorting algorithms.
 * 
 * Please note that this sorts the strings in ASCII order, not in alphabetical
 * order, as per the homework prompt. Hence, the capital letters will come
 * before the lowercase letters.
 */

const bubbleSort = require('./bubbleSort');
const mergeSort = require('./mergeSort');
const quickSort = require('./quickSort');

// Case 1: Bubble sort
const pinoySuperHeroes1 = [
  "Zsazsa Zaturnnah",
  "Bagwis",
  "darna",
  "Mithi",
  "Super Inggo",
  "Pedro Penduko",
  "Alexandra Trese",
  "pepeng agimat",
  "Luzviminda",
  "Kalayaan",
];

console.log(`Sorted by Bubble`);
console.log(pinoySuperHeroes1); // Unsorted
const sortedByBubble = bubbleSort(pinoySuperHeroes1);
console.log(pinoySuperHeroes1); // Test if the original array is mutated
console.log(sortedByBubble); // Sorted

// Case 2: Merge sort
const pinoySuperHeroes2 = [
  "Zsazsa Zaturnnah",
  "Bagwis",
  "darna",
  "Mithi",
  "Super Inggo",
  "Pedro Penduko",
  "Alexandra Trese",
  "pepeng agimat",
  "Luzviminda",
  "Kalayaan",
];

console.log(`Sorted by Merge`);
console.log(pinoySuperHeroes2); // Unsorted
const sortedByMerge = mergeSort(pinoySuperHeroes2);
console.log(pinoySuperHeroes2); // Test if the original array is mutated
console.log(sortedByMerge); // Sorted

// Case 3: Quick sort
const pinoySuperHeroes3 = [
  "Zsazsa Zaturnnah",
  "Bagwis",
  "darna",
  "Mithi",
  "Super Inggo",
  "Pedro Penduko",
  "Alexandra Trese",
  "pepeng agimat",
  "Luzviminda",
  "Kalayaan",
];

console.log(`Sorted by Quick`);
console.log(pinoySuperHeroes3); // Unsorted
const sortedByQuick = quickSort(pinoySuperHeroes3);
console.log(pinoySuperHeroes3); // Test if the original array is mutated
console.log(sortedByQuick); // Sorted