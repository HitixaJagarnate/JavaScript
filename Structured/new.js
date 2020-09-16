var arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
var counted = [], count = [];
var i = 0, j = 0, k = 0;
while (k < arr.length) {
    if (counted.indexOf(arr[k]) < 0) {
        counted[i] = arr[k];
        count[i] = 0;
        for (j = 0; j < arr.length; j++) {
            if (counted[i] == arr[j]) {
                count[i]++;
            }
        }
        i++;
    } else {
        k++;
    }
}

console.log(counted);
console.log(count);


