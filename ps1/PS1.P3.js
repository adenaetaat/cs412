// Problem 3 PS1.P3.js

const applyDecorator = (inputString, decorator) => decorator(inputString);

// Function to break the string on 'c'
const breakOnC = str => {
    const fragments = str.split('c');
    const result = [];
  
    for (let i = 0; i < fragments.length; i++) {
      if (i === 0) {
        result.push(fragments[i]);
      } else {
        result.push('c' + fragments[i]);
      }
    }
  
    return result;
  };

// Function to replace 'a' with 'A' and return an object with required data
const replaceAndCountA = str => {
  const modifiedString = str.replace(/a/g, 'A');
  const numberReplaced = (modifiedString.match(/A/g) || []).length;

  return {
    originalString: str,
    modifiedString: modifiedString,
    numberReplaced: numberReplaced,
    length: modifiedString.length,
  };
};

// Test case 1
const string1 = 'supercalifragilisticexpialidocious';
const result1 = applyDecorator(string1, breakOnC);
console.log(result1);

// Test case 2
const string2 = 'supercalifragilisticexpialidocious';
const result2 = applyDecorator(string2, str => {
  const modifiedString = str.replace(/a/g, 'A');
  const numberReplaced = (modifiedString.match(/A/g) || []).length;

  return {
    originalString: str,
    modifiedString: modifiedString,
    numberReplaced: numberReplaced,
    length: modifiedString.length,
  };
});
console.table(result2);