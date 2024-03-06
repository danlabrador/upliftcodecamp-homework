/**
 * Hide the name by hiding the middle characters of the first name and abbreviate
 * last name
 * @param {string} name - The name to be hidden
 * @returns {string} - The hidden name
 */
const hideName = (name) => {
  // Validate input: The input should be a string
  if (typeof name !== 'string') { 
    return `Input provided is not a valid name`;
  }
  
  // Validate string: The input should have at least 2 words and only contain
  // letters and spaces
  const words = name.split(' ');
  if (words.length < 2 || name.match(/[^a-zA-Z\s]/)) { 
    return `Input provided is not a valid name`;
  }

  // Split the name into words
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
 * Hides the first name by hiding the middle characters without modifying the
 * original string
 * @param {string} firstName - The first name to be hidden
 * @returns {string} - The hidden first name
 */
const hideFirstName = (firstName) => {
  return firstName.split(' ').map(word => {
    // If the word is 3 characters or less, return the word
    if (word.length <= 3) {
      return word;
    }

    // Start hiding the middle characters for words with 4 characters or more
    return word.split('').map((char, index) => {
      if (index > 1 && index < word.length - 1) {
        return '*';
      }
      return char;
    }).join('');
  }).join(' ').toUpperCase();
}

/**
 * Abbreviates the last name by returning the first character in uppercase and
 * adding a period at the end
 * @param {string} lastName - The last name to be hidden
 * @returns {string} - Abbreviated last name
 */
const hideLastName = (lastName) =>  {
  return lastName[0].toUpperCase() + '.';
}