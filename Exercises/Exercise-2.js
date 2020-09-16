//4--> write a JS program to get the largest even number form an array of inrgers.
const largestEven = (arr) => Math.max(...arr.filter(num => num % 2 ===0 ));
console.log(largestEven([1,2,5,3,6,10,11]));
console.log(largestEven([1,2,5,33,6,8,11]));

//5--> write a JS program to replace the first digit in a string (should contain at least digit) with $ character.
const replaceFristDigit = (str) => str.replace(/\d/, '$'); // regular expression with globle:/[0-9]/g, '$' or /\d/, '$'
console.log(replaceFristDigit('ABcd6abcd'));
console.log(replaceFristDigit('ABc1234d6abcd'));

