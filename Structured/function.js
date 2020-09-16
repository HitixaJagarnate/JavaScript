const log = console.log;

//stage - 1
log("-----------Satge 1-----------");
function f1() {
  //line 1 is head
  log("Entering function"); //what ever between line 1-5 is body.
  log("Leaving function");
} //line 1-5 called function definition. definition in programming mean creation.

f1(); //line 7 is function call/invocation.
//when ever a function is created a block of memory gets created.

//stage - 2
log("-----------Satge 2-----------");
function sum1(a, b) {
  //here function head is holding formal parameters.
  log("Entering function");
  let sum = a + b;
  log("The sum of a & b is --> " + sum);
  log("Leaving function");
}
sum1(5, 5); //here function call is passing actual parameters/argument.

//stage - 3
log("-----------Satge 3-----------");
function sum2(a, b) {
  //sum(a=10,b) The sum of a & b is --> NaN. because 10+undefined thats why its NaN.
  log("Entering function");
  let sum = a + b;
  log("The sum of a & b is --> " + sum);
  log("Leaving function");
}
sum2(5, 5);

//Stage - 4 (Spread Operator)
log("-----------Stage 4 (Spread Operator)-----------");

let a = [10, 20, 30, 40];
function sum3(a, b) {
  log("Entering function");
  let sum = a + b;
  log("The sum of a & b is --> " + sum);
  log("Leaving function");
}
sum3(...a); //3 dots(spread operator) will take the array a and slice it in to 2 parts 10, 20.

//stage - 5
log("-----------Satge 5-----------");

function sum(a, b) {
  log("Entering function");
  let r = a + b;
  log("Leaving function");
  return r; //when the flow of control enters into function it brought 10,60 and when its comingback its bringing 70.
}

let result = sum(10, 60); //this line is called call site
log("The sum is --> " + result);

//stage - 6
log("-----------Satge 6-----------");
function sum() {
  log("Entering function");
  let r = arguments[0] + arguments[1]; //arguments is like array like structured in activation record.
  log("Leaving function");
  return r;
}
let res = sum(10, 60);
log("The sum is --> " + res);

//stage - 7
log("-----------Satge 7-----------");
function sum() {
  let r = 0;
  log("Entering function");
  for (let i = 0; i < arguments.length; i++) {
    r = r + arguments[i];
  }
  log("Leaving function");
  return r;
}

let resl = sum(10, 20, 30, 40);

console.log("The sum is --> " + resl);

//stage - 8 ( Rest Parameter )
log("-----------Satge 8 ( Rest Parameter )-----------");
function sum(...j) {
  let r = 0;
  log("Entering function");
  for (let i = 0; i < j.length; i++) {
    r = r + j[i];
  }
  log("Leaving function");
  return r;
}

let rslt = sum(10, 20, 30, 40, 50, 60);

log("The sum is --> " + rslt);
