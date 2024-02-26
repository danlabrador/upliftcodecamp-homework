/**
 * Hide the name by hiding the middle characters of the first name and abbreviate
 * last name
 * @param {string} name - The name to be hidden
 * @returns {string} - The hidden name
 */
const hideName = (name) => {
  // Validate the input
  if (!isValidInput(name)) {
    return `Input provided is not a valid name`;
  }

  // Split the name into words
  const words = name.split(' ');
  const numWords = words.length;
  const labeledWords = {
    first: words.slice(0, numWords - 1).map((word) => word.split('')),
    last: words[numWords - 1].split(''),
  };

  // Hide names
  const transformedFirstName = hideFirstNameArray(labeledWords.first);
  const transformedLastName = hideLastName(labeledWords.last);

  // Return the result
  return `${transformedFirstName} ${transformedLastName}`;
}


/**
 * Check if the name is valid - it should be at least 2 words long and should not
 * contain any special characters or numbers
 * @param {string} name - The name to be validated
 * @returns {boolean} - True if the name is valid, otherwise false
 */
const isValidInput = (name) => {
  // Validate Input: Check if the name is a string
  if (typeof name !== 'string') {
    return false;
  }

  // Validate Input: Check if the name is at least 2 words long
  if (name.split(' ').length < 2) {
    return false;
  }

  // Validate Input: Check if the name has no special characters or numbers
  if (name.match(/[^a-zA-Z\s]/)) {
    return false;
  }

  return true;
}


// Hide the array of first names without modifying the original array and return the result in uppercase
const hideFirstNameArray = (firstNameArr) => {
  const firstNameArrCopy = [...firstNameArr];

  firstNameArrCopy.map(word => {
    // If the word is 3 characters or less, return the word
    if (word.length <= 3) {
      return word
    }

    // If the word is 4 characters or more, hide the middle characters
    const numChars = word.length;
    const startHideIndex = 2;
    const endHideIndex = numChars - 1;

    for (let i = startHideIndex; i < endHideIndex; i++) {
      word[i] = '*';
    }

    return word;
  })

  // Join the words and return the result in uppercase
  return firstNameArr.map(word => word.join('')).join(' ').toUpperCase();
}

// Hide the last name without modifying the original array  and return the result in uppercase
const hideLastName = (lastName) => lastName[0].toUpperCase() + `.`;

// Test
console.log(hideName("Anonas Mayaman")); // should return AN***S M.
console.log(hideName("catalina Bongga")); // should return CA*****A B.
console.log(hideName("Maria Josefina Alvarez")); // should return MA**A JO*****A A.
console.log(hideName("Dan Labrador")); // should return RI**L M.
console.log(hideName("Xe Pueblos")); // should return RI**L M.
console.log(hideName("Jose Protacio Mercado Rizal")); // should return RI**L M.
console.log(hideName("Rizal")); // should return "Input provided is not a valid name"
console.log(hideName("aj3j3j3")); // should return "Input provided is not a valid name"
console.log(hideName("MinD_ContRoL~!")); // should return "Input provided is not a valid name"
console.log(hideName(143)); // should return "Input provided is not a valid name"