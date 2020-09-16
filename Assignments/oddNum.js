const log = console.log;
var arr = [1,2,3,4,5,6,7,8,9,10];
var oddNum1 = 0;
    for (let i = 0; i < arr.length; i++){
      if (arr[i] % 2 === 1){
        oddNum1++;
        console.log(arr[i]);        
      }
    }
    console.log("The count of odd numbers are " + oddNum1);

function oddNum(...num) {
    let oddNum = [];
    let sum = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 !== 0) {
        oddNum.push(num[i]);
        sum += num[i];
    }
}
  log(`All the Odd Elements presents in an array ==> ${oddNum}`);
  log(`Total number of Odd Elements ==> ${oddNum.length} `);
  log(`Sum total of All the Odd Elements ==> ${sum}`)
}
oddNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


