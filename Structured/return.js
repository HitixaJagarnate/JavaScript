const log = console.log;

	
function sum(a,b)
{
  log("Entering function");
  let r = a + b;
  log("Leaving function");
  return r;
}

let v1 = sum(1,2);
let v2 = sum(v1,sum(3,4));
let v3 = sum(sum(1,2),sum(sum(1,2),sum(1,2)));
let v4 = v3 + sum(1,1) + sum(v2,sum(sum(4,5),sum(6,7)));

log("The value of v1 is --> ",v1);
log("The value of v2 is --> ",v2);
log("The value of v3 is --> ",v3);
log("The value of v4 is --> ",v4);



