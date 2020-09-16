function sum (arg1, arg2){
    let total = (arg1+arg2);
    console.log(`Total of a and b is : ${total}`)
}

// let user = {
//     a: 10,
//     b: 20,
//     findSum: findMysum,
// }

let user1 = {
    a: 30,
    b: 40,
    findSum: function(){
        sum(this.a,this.b)
    },
    __proto__: {
        x: 70,
        y: 10
    }
}

// function findMysum(){
//     sum(this.a,this.b)
//     // console.log(sum)
// }
user1.findSum();