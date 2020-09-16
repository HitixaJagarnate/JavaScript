//globleThis
// console.log(globalThis);

//Promise.allSettled();
// const p1 = new Promise((resolve, reject) => setTimeout(resolve, 200));
// const p2 = new Promise((resolve, reject) => setTimeout(reject, 300));
// const p3 = new Promise((resolve, reject) => setTimeout(resolve, 4000));

// Promise.allSettled([p1,p2,p3]).then(results => results.forEach(result => console.log(result)));

//Nullish Coalescing Operator(??);
let x = {
    profile:{
        // name:'john',
        name: '', //instead of empty string you'll still get john.
        age: 0
    }
};
// console.log(x.profile.name || 'john');
// console.log(x.profile.age || '21');

// console.log(x.profile.name ?? 'john');
// console.log(x.profile.age ?? '21');

//Optional Chaining Operator(?.)
let y = {
    //  profile:{
    //     name:'john',
    // }
};
//console.log(y.profile.age); //TypeError: Cannot read property 'age' of undefined
console.log(y && y.profile && y.profile.name); // udefined
//console.log(y && y.profile && y.profile.name); //john
console.log(y?.profile?.name);//undefined

//BigInt
const max = Number.MAX_SAFE_INTEGER;
console.log(max); //9007199254740991

const bigOne = 1n;
//console.log(bigOne+1);//TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(bigOne+2n);

const bigTwo = BigInt('1');
console.log(bigTwo);