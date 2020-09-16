
var arr = [2,5,4,7,6,8,7,2,5];

for(var m = 0; m<arr.length-1; m++){
    console.log(m);

    if(arr[m]>arr[m+1]){

        var temp = arr[m];
        arr[m]=arr[m+1];
        arr[m+1] = temp;
        m =-1;
        // console.log(m);
    }
    
}
// console.log(j);

function count() {
    array_elements = [2,5,4,7,6,8,7,2,5];
  
    for (var j = 0; j < array_elements.length-1; j++) { 

        if (array_elements[j] > array_elements[j+1]) { 
            var temp = array_elements[j]; 
            array_elements[j] = array_elements[j + 1]; 
            array_elements[j + 1] = temp; 
            j = -1; 
        } 
    }

     console.log(array_elements);


    var current = null;
    var cnt = 0;
    
    for (var i = 0; i < array_elements.length; i++) {
         
            if (array_elements[i] != current) {
                if (cnt > 0) {
                    console.log(current + ' comes --> ' + cnt + ' times<br>');
                }
                current = array_elements[i];
                cnt = 1;
            } else {
                cnt++;
            }
        
    }
        if (cnt > 0) {
            console.log(current + ' comes --> ' + cnt + ' times');
        } 
 }

count();
