/**
 * @func quickSort
 * Sorts an array of strings using the quick sort algorithm.
 * This function mutates the original array.
 * @param { string[] } stringArr - array of strings
 * @returns { string[] } - sorted array of strings
 */

// Implement the quick sort algorithm
const quickSort = (stringArr) => {
  // Base case: if the array has 1 or 0 elements, it is already sorted
  if (stringArr.length <= 1) {
    return stringArr;
  }

  // Choose a pivot element
  let pivot = stringArr[0];
  let leftArr = [];
  let rightArr = [];

  // Partition the array into elements less than the pivot and elements greater than the pivot
  for (let index = 1; index < stringArr.length; index++) {
    if (stringArr[index] < pivot) {
      leftArr.push(stringArr[index]);
    } else {
      rightArr.push(stringArr[index]);
    }
  }

  // Recursively sort the left and right partitions
  leftArr = quickSort(leftArr);
  rightArr = quickSort(rightArr);

  // Combine the sorted left and right partitions with the pivot
  stringArr.length = 0; // Clear the original array
  Array.prototype.push.apply(stringArr, leftArr); // Add the sorted left partition
  stringArr.push(pivot); // Add the pivot
  Array.prototype.push.apply(stringArr, rightArr); // Add the sorted right partition

  return stringArr;
};

module.exports = quickSort;