
//call:
// let add = function(c){
//     console.log(this.a + this.b + c);
// }

// let obj = {
//     a: 10,
//     b: 20,
// };
// add.call(obj, 3);

// //every object in javascript has a prototype.

// let argsToArray = function(){
//     // console.log(arguments);
//    console.log( [].slice.call(arguments));
// }
// argsToArray(1,2,3);

// let mammal = function(legs){
//     this.legs = legs;
// };
// let cat = function(legs, isDomesticated){
// mammal.call(this, legs);
// this.isDomesticated = isDomesticated;
// };

// let lion = new cat(4, false);
// console.log(lion);


//Apply:
console.log(Math.min(1,2,3));
let numArray = [1,2,3];
console.log(Math.min.apply(null, numArray));

//Bind:
let button = function(content){
    this.content = content;
};
button.prototype.click = function(){
    console.log(`${this.content} clicked`)
};
let newButton = new button('add');

// let boundButton = newButton.click.bind(newButton);
// boundButton();

// let looseClick = newButton.click;
// looseClick();

let myObj = {
    asyncGet(cb){
        cb();
    },
    parse(){
        console.log('parse called')
    },
    render(){
        // let that = this;
        this.asyncGet(function(){
            // that.parse();
            this.parse();
        }.bind(this));
    }
};
myObj.render();
