function reverse_a_number(n) {
  n = n + "";
  return n.split("").reverse().join("");
}
console.log(reverse_a_number(32243));

function quick_Sort(origArray) {
  if (origArray.length <= 1) {
    return origArray;
  } else {
    var left = [];
    var right = [];
    var newArray = [];
    var pivot = origArray.pop();
    var length = origArray.length;

    for (var i = 0; i < length; i++) {
      if (origArray[i] <= pivot) {
        left.push(origArray[i]);
      } else {
        right.push(origArray[i]);
      }
    }
    return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
  }
}

var myArray = [300, 0, 222, 50, -1, 4, 115];


console.log("Original array: " + myArray);
var sortedArray = quick_Sort(myArray);
console.log("Sorted array: " + sortedArray);

var arr1=[-3,8,7,6,5,-4,3,2,1];
var arr2=[];
var min=arr1[0];
var pos;
var max=arr1[0];
for (i=0; i<arr1.length; i++)
{
        if (max<arr1[i]) max=arr1[i];
}

for (var i=0;i<arr1.length;i++)
{
        for (var j=0;j<arr1.length;j++)
        {
                if (arr1[j]!="x")
                {
                        if (min>arr1[j]) 
                        {
                                min=arr1[j];
                                pos=j;
                        }
                }
        }
        arr2[i]=min;
        arr1[pos]="x";
        min=max;
}
console.log(arr2);

var j = [10,20];
j[2] = 8;
 var k = j.map(function(i){return i});
 console.log(k);


a = [1, 2, 3];
b = a.map(function(x) { return x*x; });
console.log(b);

a = [5, 4, 3, 2, 1];
a.filter(function(x) { return x < 3 });
console.log(a.filter(function(x,i) { return i%2!=0 }));



