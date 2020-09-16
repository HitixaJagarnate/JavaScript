/*1-->String manipulation:
 Write a JS program to create a new string from a given string
taking the first 3 characters and last 3 characters of STRING 
adding them together. The string length must be 3 or more,
if not, the original string is returned.  */

const makeNewString = (str) =>
  str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

console.log(makeNewString("abcklsdklasjdklhask"));
console.log(makeNewString("ijk"));
console.log(makeNewString("yx"));

//2--> Write a JS program to extract the first half of a string of even length.
const firstHalf = (str) => str.slice(0, str.length / 2);

console.log(firstHalf("temp"));
console.log(firstHalf("firstHalf"));
console.log(firstHalf("temp firstHalf"));
console.log(firstHalf("temp firstHalf temp"));

//3-->  Write a JS program to concatenate 2 strings excepts their first character.

const concatenate = (str1, str2) => str1.slice(1) + str2.slice(1);

console.log(concatenate("hello", "world"));
console.log(concatenate("java", "javascript"));

//4--> Given 2 values, write a JS program to fine out which one is nearest to 100.

const nearestTo100 = (a, b) => (100 - a < 100 - b ? a : b);

console.log(nearestTo100(95, 70));
console.log(nearestTo100(65, 85));

//5--> write a JS program to check a given string contains 2 to 4 occurences of a specified character.
const countChar = (str, char) => 
str.split('').filter(ch => ch === char).length;

console.log(countChar('aeiouakjshkjsa', 'a'));

const contains2TO4 = (str, char)=>
countChar(str, char) >= 2 && countChar(str, char) <= 4;

console.log(contains2TO4('aeiouakjshkjsa', 'a'));
console.log(contains2TO4('ooohhhhh', 'h'));

