/* //scoping issues with the keyword 'VAR':
--> when ever you define a variable with the keyword var. that variable gets a function scope.
--> what it really meand it meanswhen i define a function and a variable define in this function is available 
through out the function(refer to ex.1).
  */

  //ex.1
  var a = function(){
      var y = 1;
      console.log(y);
  }
//   console.log(y); here its not available.
  a();

  //ex.2
  var b = function(){
       if(true){ //this is block boundry and variable y should be accessible only in this block
    var y = 1;
    console.log(y);
}
console.log(y); //but you can access it from here to so its only respecting function boundry but not for/ifs..
}
//   console.log(y); here its not available.
b();

//ex.3 lexical scoping:
var c = function(){
    var y = 1;
    var z = function(){
        console.log(y);
    }
    z();
}
c();

//ex.4 Hoising:
var d = function(){
    console.log(y); //undefined- meaning i've defined a varible but i'vent assign any value to it.
    var y = 1;  //instead of var if use 'let' the error would be y is not defined.
}
d();

//ex.5 Lack of Constant: ES5 version:
// Object.defineProperty(window, 'PI', {
//     value: 10.5,
//     writable: false
// });
// PI = 10.34
// console.log(PI);

//ES6 version:
const PI = 3.14;
//PI = 10 //TypeError: Assignment to constant variable.
console.log(PI);

