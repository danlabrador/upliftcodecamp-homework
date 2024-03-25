/**
 * Swaps two elements in an array.
 * 
 * @param { string[] } strArr - array of strings
 * @param { number } idx1 - index of the first element to swap
 * @param { number } idx2 - index of the second element to swap
 * 
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

const swapElements = (strArr, idx1, idx2) => {
  const temp = strArr[idx1];
  strArr[idx1] = strArr[idx2];
  strArr[idx2] = temp;
}

module.exports = swapElements;