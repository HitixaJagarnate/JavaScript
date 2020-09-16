const log = console.log;

let arr = [1,1,1,1,5,5,5,2,9,9,9,7,7];
// log(arr.length);
let uniqe = [];
let freq = [];

let i=0, j=0, k=0;

while(i < arr.length){
    if(uniqe.indexOf(arr[i]) < 0){
        uniqe[j] = arr[i];
        j++;
    }
}
   
log(uniqe);

// log(freq);