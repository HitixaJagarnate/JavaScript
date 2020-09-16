let arr = [500, 100];

if (arr[0] > arr[1]) {
  console.log(`Element ${arr[0]} is greatest and it's available at index 0`);
} else if (arr[0] < arr[1]) {
  console.log(`Element ${arr[1]} is greatest and it's available at index 1`);
} else {
  log(`Both the elemnets are equal`);
}

console.log();

//Given an Array that has two element. Find the greater element. Print the element and it's index position.
function fnGreaterNum(...arrPar) {
  if (arrPar.length > 0) {
    let result = {
      maxVal: arrPar[0],
      indxPos: 1,
    };

    for (let i = 1; i <= arrPar.length; i++) {
      if (arrPar[i] > result.maxVal) {
        result.maxVal = arrPar[i];
        result.indxPos = i + 1;
      }
    }

    return result;
  }
}

function print(printVal) {
  console.log("The greatest element is --> " + printVal.maxVal);
  console.log("The greatest element index position is --> " + printVal.indxPos);
}
var arrVal = [105, 85];
print(fnGreaterNum(...arrVal));

var arrVal1 = [105, 85, 250, 850, 9, 10, 65, 78];
print(fnGreaterNum(...arrVal1));
