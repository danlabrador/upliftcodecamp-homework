/**
 * @func getGreatestSum() -This function takes a NxN array of numbers and returns the greatest sum of either a row or column.
 * @param {num[N][N]} arr - NxN array of numbers
 * @returns {number} - the greatest sum of either a row or column
 */

const getGreatestSum = (arr) => {
  // Check if input is invalid
  if (!checkIfIsValid(arr)) {
    return 'Invalid input';
  }

  // Get sums
  const rowSums = [];
  const colSums = [];

  for (let i = 0; i < arr.length; i++) {
    let rowSum = 0;
    let colSum = 0;

    for (let j = 0; j < arr.length; j++) {
      rowSum += arr[i][j];
      colSum += arr[j][i];
    }

    rowSums.push(rowSum);
    colSums.push(colSum);
  }
 
  // Return largest sum
  return Math.max(...rowSums, ...colSums);
}

// Validate input
const checkIfIsValid = (arr) => {
  // Return false if input is not an array
  if (!Array.isArray(arr)) { 
    return false;
  } 

  // Return false if input is not an NxN array
  if (!arr.every(el => el.length === arr.length)) {
    return false;
  }

  // Return false if input is not an array of numbers
  if (!arr.every(el => el.every(num => typeof num === 'number'))) {
    return false;
  }

  // Return true if input is valid
  return true;
}
