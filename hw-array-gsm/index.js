/**
 * @func getGreatestSum() -This function takes a NxN array of numbers and returns the greatest sum of either a row or column.
 * @param {num[N][N]} matrix - NxN array of numbers
 * @returns {number} - the greatest sum of either a row or column
 */

const getGreatestSum = (matrix) => {
  // Check if input is invalid
  if (!checkIfIsValid(matrix)) {
    return 'Invalid input';
  }

  // Get sums
  const rowSums = [];
  const colSums = [];

  for (let i = 0; i < matrix.length; i++) {
    let rowSum = 0;
    let colSum = 0;

    for (let j = 0; j < matrix.length; j++) {
      rowSum += matrix[i][j];
      colSum += matrix[j][i];
    }

    rowSums.push(rowSum);
    colSums.push(colSum);
  }
 
  // Return largest sum
  return Math.max(...rowSums, ...colSums);
}

// Validate input
const checkIfIsValid = (matrix) => {
  // Return false if input is not an array
  if (!Array.isArray(matrix)) { 
    return false;
  } 

  // Return false if input is not an NxN array
  if (!matrix.every(row => row.length === matrix.length)) {
    return false;
  }

  // Return false if input is not an array of numbers
  if (!matrix.every(row => row.every(element => typeof element === 'number'))) {
    return false;
  }

  // Return true if input is valid
  return true;
}
