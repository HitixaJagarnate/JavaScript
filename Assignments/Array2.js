const log = console.log;

// var array2 = [10,20,30];

// var lagest_element = Math.max(...array2);
// var Index = array2.indexOf(Math.max(...array2));
// console.log("The Greatest  element is " + lagest_element);
// console.log("Index of Greatest element is " + Index);

let arr = [5000,10500, 500000];
let greatestElement = arr[0];
let index = 0;
var sum = 0;
for (i = 0; i < arr.length; i++) {
  sum += arr[i];
  if (arr[i] > greatestElement) {
    greatestElement = arr[i];
    index = i;
  }
}  
  log(
    `The greatest element of given Array is --> ${greatestElement}.
Its Index position is --> ${index}.`);
  log(`Sum total of an array --> ${sum}`);



// if(arr[0] > arr[1] && arr[0] > arr[2]){
//   log(
//     `The greatest element of given Array is --> ${greatestElement} and index 0`)
// }else if(arr[1] > arr[2] && arr[1] > arr[0]){
//   log(
//     `The greatest element of given Array is --> ${greatestElement}  and index 1.`)
// }else if(arr[2]> arr[1] && arr[2] > arr[0]){
//   log(
//     `The greatest element of given Array is --> ${greatestElement} and index 2.`)
// }else {
//   log(`All the elements are equal!!!!!`)
// }



