var arr = [5,5,5,2,2,2,2,2,9,4];
var unique = [];

var i = 0, j=0, k=0;
let val = [];
let len = arr.length;
for(let i = 0; i<len; i++)
    if(val.indexOf(arr[i]) === -1){
        val.push(arr[i])
        return val;
    }

console.log(unique);