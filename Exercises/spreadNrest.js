var x = (...n) => {
    console.log(n);
}
// x(1,5,9,4,33);

var m = [1,3,6,5];
var n = [5,56,786,45];
m.push(...n);
// console.log(m);