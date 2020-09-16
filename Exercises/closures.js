//the variable that are define outside of your scope/upper scope called lexical scoping in JS.
// let i = 1;
// const f = () => {
//     console.log(i);
// }
// f();

//what is the variable is not available outside/upper scope.

// if(true){
//     let i = 1;
//  const f = () => {
//     console.log(i);
// }
// }
// f();    //here you'll get f is not defined. lets solve this problem as follows:
// let f;
// if(true){
//     let i = 1;
//  f = () => {
//     console.log(i);
// }
// }
// console.dir(f);
// f();

//closure:
let f =()=> {
    let i = 1;
    let j = 1;
    return () =>{
        console.log(i);
        console.log(j);
    }
}
console.dir(f());

//closure inside a loop:
for(let i = 0; i<3; i++){
    const f = () =>{
        console.log(i);
    }
    f();
}

//closure inside a loop with outside the scope:
// for(let i = 0; i<3; i++){
//     setTimeout(() =>{
//         console.log(i);
//  },1000);
//  }
//  console.log('after the loop');
/* this is what happen when we use 'let':
i'll take new value every single time
 i = 0_ f(c:i(0));
 i = 1_ f(c:i(1));
 i = 2_ f(c:i(2));

 this is what happen when iwe use 'var':
 i'll just update the value on every iteration
 i = 3_ f(c:i(3));
    f(c:i(3));
    f(c:i(3));
    and you want you use var and still want to get different value on each iteration than see below:    
 */
for(var i = 0; i<3; i++){
    ((i) => {
    setTimeout(() =>{
        console.log(i);
 },1000);
 })(i); 
}
 console.log('after the loop');

