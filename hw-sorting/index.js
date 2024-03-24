const bubbleSort = require('./bubbleSort.js');
const mergeSort = require('./mergeSort.js');
const quickSort = require('./quickSort.js');

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

const sortedByBubble = bubbleSort(pinoySuperHeroes1);
console.log(`Sorted by Bubble`);
console.log(pinoySuperHeroes1);
console.log(sortedByBubble);

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
const sortedByMerge = mergeSort(pinoySuperHeroes2);
console.log(`Sorted by Merge`);
console.log(pinoySuperHeroes2);
console.log(sortedByMerge);

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
const sortedByQuick = quickSort(pinoySuperHeroes3);
console.log(`Sorted by Quick`);
console.log(pinoySuperHeroes3);
console.log(sortedByQuick);