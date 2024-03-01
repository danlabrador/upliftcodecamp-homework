/**
 * @func getGreatestSum() - This function takes a 3x3 array of numbers and returns the greatest sum of either a row or column.
 * @param {arr[3][3]} arr - 3x3 array of numbers
 * @returns {number} - the greatest sum of either a row or column
 */

const getGreatestSum = (arr) => {
  // Check if input is invalid
  if (!checkIfIsValid(arr)) {
    return 'Invalid input';
  }

  // Get sums
  const rowSums = arr.map(el => el.reduce((acc, curr) => acc + curr, 0));
  const colSums = arr[0].map(
    (_, i) => arr.reduce(
      (acc, curr) => acc + curr[i], 0 // Loop through each column and sum
    ) 
  ); 
 
  // Return largest sum
  return Math.max(...rowSums, ...colSums);
}

// Validate input
const checkIfIsValid = (arr) =>
  Array.isArray(arr) &&  // Check if input is an array
  arr.length === 3 &&    // Check if input has 3 elements
  arr.every((el) =>      // Check if each element is an array with 3 numbers
    Array.isArray(el) &&
    el.length === 3 &&
    el.every((el) => typeof el === "number")
  );