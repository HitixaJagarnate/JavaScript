//1--> Given a year, report if its a leap year.
//Given an array, its first element stores a year between 1900 and 2000. Find whether the year is a leap year and store result in the second element of the array.

const isLeapYear = (year) => year % 4  === 0;

/* 2--> write a JS program to compare two objects to determine if the first one contains the same properties as the
second one (which may also have additional propetries) */
const objA = {a:1, b:2,c:1};
const objB = {a:1, b:1,c:1};
const objC = {a:1, b:1,d:1};
const objectsEqual = (a,b) => //{
    // console.log(Object.keys(a));
    // console.log(Object.keys(b));
    Object.keys(a).every(key => b[key]);

//}
console.log(objectsEqual(objA,objB));
console.log(objectsEqual(objA,objC));
console.log(objectsEqual(objB,objC));

/* 3--> write a JS program to convert a comma-separated values (csv) string to a 2D array. A new line 
indicated a new row in the Array. */
const parseCSV = (csvString) => 
    csvString.split('\n').map(row => row.split(','));

const str =`abc,def,ghi
jkl,mno,pqr
stu,vwx,yz`;
console.log(parseCSV(str));

//4--> write a JS program to generate a random hexadecimal color code.
const getRandomHexNumber = () =>
Math.floor(Math.random()*16).toString(16);
console.log(getRandomHexNumber());

const getRandomHexColor = () => '#' + Array.from(
    {length: 6}).map(getRandomHexNumber).join('');

console.log(getRandomHexColor());
console.log(getRandomHexColor());
console.log(getRandomHexColor());

/* 5--> write a JS program function that returns true if the provided predicate function returns
true for all elements in a collection, false otherwise. */
console.log([1,2,3,5,46,6].every(x => x> 0)); //higher order function:

const isEveryElement = (arr, fn) => {
    for(let i = 0 ; i<arr.length; i++){
        if(!fn(arr[i])){
            return false;
        }
    }
    return true;
}
console.log(isEveryElement([1,2,3,5,46,6],(x => x> 3)));