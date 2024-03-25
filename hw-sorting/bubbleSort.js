/**
 * @func bubbleSort
 * Sorts an array of strings using the bubble sort algorithm.
 * This function mutates the original array.
 * @param { string[] } stringArr - array of strings
 * @returns { string[] } - sorted array of strings
 * 
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */

const swapElements = require('./swapElements');

const bubbleSort = (stringArr) => {
  // Implement the bubble sort algorithm
  let size = stringArr.length;

  // Iterate through the array
  for (let iteration = 0; iteration < size - 1; iteration++) {

    // Compare adjacent elements and swap if necessary
    for (let index = 0; index < size - iteration - 1; index++) {
      if (stringArr[index] > stringArr[index + 1]) {
        swapElements(stringArr, index, index + 1);
      }
    }
  }

  return stringArr;
};

module.exports = bubbleSort;