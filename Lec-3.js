
function percentage(p, c, m){
    var marks = p+c+m;
    var percent = (marks*100)/300;
    return percent;
}

var result1 = percentage(75,85,90);
var result2 = percentage(60,70,80);
var result3 = percentage(50,55,65);
console.log('Result1 = '+ result1);
console.log('Result2 = '+ result2);
console.log('Result3 = '+ result3);



