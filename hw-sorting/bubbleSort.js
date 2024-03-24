/**
 * @func bubbleSort
 * Sorts an array of strings using the bubble sort algorithm.
 * This function mutates the original array.
 * @param { string[] } stringArr - array of strings
 * @returns { string[] } - sorted array of strings
 */
const bubbleSort = (stringArr) => {
  // Implement the bubble sort algorithm
  let size = stringArr.length;
  for (let iteration = 0; iteration < size-1; iteration++) {
    for (let index = 0; index < size-iteration-1; index++) {
      if (stringArr[index] > stringArr[index+1]) {
        let temp = stringArr[index];
        stringArr[index] = stringArr[index+1];
        stringArr[index+1] = temp;
      }
    }
  }
  return stringArr;
};

module.exports = bubbleSort;