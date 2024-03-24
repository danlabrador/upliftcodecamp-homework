const swapElements = (strArr, idx1, idx2) => {
  const temp = strArr[idx1];
  strArr[idx1] = strArr[idx2];
  strArr[idx2] = temp;
}

module.exports = swapElements;