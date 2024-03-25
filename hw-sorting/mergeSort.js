/**
 * @function mergeSort
 * Sorts an array of strings using the merge sort algorithm.
 * This function mutates the original array.
 * @param { string[] } stringArr - array of strings
 * @returns { string[] } - sorted array of strings
 * 
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */

// Merge two sorted arrays into one sorted array
const merge = (result, left, right) => {
  let leftIndex = 0;
  let rightIndex = 0;

  // Combine left and right arrays into the result array in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result[leftIndex + rightIndex] = left[leftIndex];
      leftIndex++;
    } else {
      result[leftIndex + rightIndex] = right[rightIndex];
      rightIndex++;
    }
  }

  // Add any remaining elements from the left array
  while (leftIndex < left.length) {
    result[leftIndex + rightIndex] = left[leftIndex];
    leftIndex++;
  }

  // Add any remaining elements from the right array
  while (rightIndex < right.length) {
    result[leftIndex + rightIndex] = right[rightIndex];
    rightIndex++;
  }
};

// Implement the merge sort algorithm
const mergeSort = (stringArr) => {
  // Base case: if the array has 1 or 0 elements, it is already sorted
  if (stringArr.length <= 1) {
    return stringArr;
  }

  // Split the array into two halves
  let middle = Math.floor(stringArr.length / 2);
  let leftArr = stringArr.slice(0, middle);
  let rightArr = stringArr.slice(middle);

  // Recursively sort the left and right halves
  mergeSort(leftArr);
  mergeSort(rightArr);

  // Merge the sorted left and right halves into the original array
  merge(stringArr, leftArr, rightArr);

  return stringArr;
};

module.exports = mergeSort;