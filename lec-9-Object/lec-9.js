const log = console.log;

var obj = {
  a: 10,
  b: 20,
  m: {
      a: 10
  }
};
//extending an object:
 obj.c = 30;
 obj.d = 'Hello';
 obj.a = 'Mumbai';

log(typeof obj);
log(typeof obj.a);
log(typeof obj.b);
log(obj.a);
log(obj.b);
log(obj.c);
log(obj.d);
log(obj.m.a);
log(obj);

//delete the property of an object:
delete obj.m;
log(obj);

//Object composition:
const Obj = {
    a:10,
    b: 20
}
// Object.preventExtensions(amit);

// amit.a = 30;
// amit.c = 10;    //this wont extends the object and its called silent failure.
// log(amit);
Object.freeze(Obj);
Obj.a = 60;
Obj.m = 'JS';
delete Obj.a;
log(Obj);  //{ a: 10, b: 20 } { b: 20, m: 'JS' }
log(Object.isFrozen());
// Object.seal(amit);
// amit.a = 60;
// amit.m = 'JS';
// delete amit.a;
// log(amit);


