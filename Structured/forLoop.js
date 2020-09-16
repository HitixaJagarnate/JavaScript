let myNum = [2, 2, 2, 5, 5, 7, 8, 2, 0];
let numToSearch = 2;
for (let i = 0; i < myNum.length; i++) {
  if (myNum[i] === numToSearch) {
    console.log(myNum[i] + " is found at index " + i);
  }
}

//find just first occurance:
console.log("------find just first occurance-----");
let myStr = "String of String";
let charToSearch = "S";
for (let i = 0; i <= myStr.length; i++) {
  if (myStr[i] === charToSearch) {
    console.log(myStr[i] + " is found at index " + i);
    break; // break keyword is used to exit from current function that we are in.
  }
}
