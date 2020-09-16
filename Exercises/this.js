
'use strict';
//1. this inside globle scope
this.table = 'window table';
// console.log(window.table);
//4. this inside function
const cleanTable = function(soap){
    console.log(`cleaning ${this.table} using ${soap}`);
    // // var that = this;
    //         // const innerFunction = function(_soap){
    //         const innerFunction = (_soap) => {
    //             console.log(`cleaning ${this.table} using ${soap}`);
    //         }
    //         // innerFunction.call(this,soap);
    //         // innerFunction.bind(this)(soap);
    //         innerFunction(soap);
};

//4. 'call' function to rescue
// cleanTable.call(this, 'some soap');

this.garage = {
    table: 'garage table',
    // cleanTable(){
    //     console.log(`cleaning ${this.table}`);
    // }
};
// this.garage.cleanTable();

//2. this inside an object:
// let johnsRoom = {
//     table: 'johns table',
    //3. this inside method
    // cleanTable(){
    //     console.log(`cleaning ${this.table}`);
    // }
// }

//5. this inside a constructor:
// let createRoom = function(name){
//     this.table = `${name}s table`
// }
// const jillsRoom = new createRoom('jill');
// const johnsRoom = new createRoom('john');

// createRoom.prototype.cleanTable = function(soap){
//     console.log(`cleaning ${this.table} using ${soap}`);
// }
// cleanTable.call(johnsRoom, 'some soap');
// cleanTable.call(jillsRoom, 'some soap');
// jillsRoom.cleanTable('some soap');
// johnsRoom.cleanTable('some soap');

//6. this inside the class:
class createRoom{
    constructor(name){
        this.table =  `${name}s table`
    }
    cleanTable(soap){
        console.log(`cleaning ${this.table} using ${soap}`);
    }
}
const jillsRoom = new createRoom('jill');
const johnsRoom = new createRoom('john');
jillsRoom.cleanTable('some soap');
johnsRoom.cleanTable('some soap');

// console.log(johnsRoom.table);
// johnsRoom.cleanTable();
// cleanTable.call(this.garage, 'some soap');
// cleanTable.call(johnsRoom, 'some soap');
// cleanTable.call(jillsRoom, 'some soap');
