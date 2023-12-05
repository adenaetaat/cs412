// Problem 1 (PS1.P1.js)


const reverseAlphabetical = str => {
  // Remove punctuation and numbers from the string
  const cleanedStr = str.replace(/[^a-zA-Z]/g, '');

  // Convert the string to an array of characters
  const charArray = Array.from(cleanedStr);

  // Sort the array in reverse alphabetical order
  const sortedArray = charArray.sort((a, b) => b.localeCompare(a));

  // Join the sorted array back into a string
  const reversedStr = sortedArray.join('');

  return reversedStr;
}

// Test the function
const inputString = 'supercalifragilisticexpialidocious';
const inputString2 = 'exioi';
const result = reverseAlphabetical(inputString);
const result2 = reverseAlphabetical(inputString2);
console.log(result);
console.log(result2);


