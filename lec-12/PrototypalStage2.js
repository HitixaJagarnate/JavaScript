let obj1 = { 
    a:10, 
    b:20,
};

let obj2 = {
    c:30, 
    d:40 
};

obj2.__proto__ = obj1;

console.log("OBJ1");
console.log(obj1.a);
console.log(obj1.b);
// console.log(obj1.c);
// console.log(obj1.d);

console.log("OBJ2");
obj2.a = 100;
console.log(obj2.a);
console.log(obj2.b);
console.log(obj2.c);
console.log(obj2.d);