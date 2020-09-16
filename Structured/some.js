const log = console.log;

var arr = [2, 5, 5, 2, 2, 2, 5, 2, 2, 9, 4];
var counted = [], count = [];
var i = 0, j = 0, k = 0;
while (k < arr.length) {
    log('while k --> '+ k);
    if (counted.indexOf(arr[k]) < 0) {
        log('indexOf(arr[k]) --> '+ arr[k]);

        counted[i] = arr[k];
        log('counted[i] --> '+ counted[i]);
        log('arr[k] --> '+ arr[k]);

        count[i] = 0;
        log('count[i] --> '+ count[i]);

        // for (j = 0; j < arr.length; j++) {
        //     if (counted[i] == arr[j]) {
        //         log('counted[i] --> '+ counted[i]);
        //         log('arr[j] --> '+ arr[j]);

        //         count[i]++;
        //         log('count[i]++ --> '+ count[i]);
        //     }
        // }
        i++;
        log('i++ --> '+ i);
    } 
    else {
        k++;
        log('k++ --> '+ k);
    }
}
log(counted);
log(count);

function longestString() {
    var longest = '';
    for (var i=0; i < arguments.length; i++) {
      if (arguments[i].length > longest.length) {
        longest = arguments[i];
      }
    }
    return longest;
  }
  
  let m = longestString('java', 'javaScript', 'python', 'c#');
  log(m);

  