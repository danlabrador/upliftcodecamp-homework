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
    firstName: words.slice(0, numWords - 1).join(' '),
    lastName: words[numWords - 1],
  };

  // Hide names
  const transformedFirstName = hideFirstName(labeledWords.firstName);
  const transformedLastName = hideLastName(labeledWords.lastName);

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


/**
 * Hides the first name by hiding the middle characters without modifying the
 * original string
 * @param {string} firstName - The first name to be hidden
 * @returns {string} - The hidden first name
 */
const hideFirstName = (firstName) => {
  const firstName2DArr = firstName.split(' ').map(word => word.split(''));

  firstName2DArr.map(word => {
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
  return firstName2DArr.map(word => word.join('')).join(' ').toUpperCase();
}

/**
 * Abbreviates the last name by returning the first character in uppercase and
 * adding a period at the end
 * @param {string} lastName - The last name to be hidden
 * @returns {string} - Abbreviated last name
 */
const hideLastName = (lastName) =>  lastName[0].toUpperCase() + `.`;          