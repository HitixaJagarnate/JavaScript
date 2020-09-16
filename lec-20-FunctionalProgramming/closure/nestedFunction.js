function f1() {
  console.log("Entering f1");
  var a = 10;
  var b = 20;
  function f2() {
    console.log("Entering f2");
    var c = 10;
    var d = 20;
    console.log(`c = ${c}`);
    console.log(`d = ${d}`);
    console.log("Leaving f2");
  }
  console.log(`a = ${a}`);
  console.log(`b = ${b}`);
  f2();
  console.log("Leaving f1");
}
f1();
