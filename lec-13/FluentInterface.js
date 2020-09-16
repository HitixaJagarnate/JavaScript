//Method Chaining - Fluent Interface:

// function deposit(v) {
//   this.balance = this.balance + v;
//   this.lt = v;
//   return this;
// }

// function withdraw(v) {
//   if (this.balance >= v) {
//     this.balance = this.balance - v;
//     this.lt = -v;
//   }
//   return this;
// }

// function statement() {
//   console.log("Balance = " + this.balance);
//   console.log("Last Transction = " + this.lt);
//   return this;
// }

// function PiggyBank() {
//   this.balance = 0;
//   this.lt = 0;
// }

// PiggyBank.prototype.deposit = deposit;
// PiggyBank.prototype.withdraw = withdraw;
// PiggyBank.prototype.statement = statement;
// console.log("Behold the chaining");

// console.log("-----------Pg1-----------");
// var pg1 = new PiggyBank();
// pg1.deposit(100).statement().withdraw(50).statement().withdraw(10).statement();

// console.log("-----------Pg2-----------");
// var pg2 = new PiggyBank()
// .deposit(200).statement().withdraw(100).statement().withdraw(50).statement();

// console.log("-----------Pg3-----------");
// var pg3 = new PiggyBank();
// pg3.deposit(300).statement().withdraw(200).statement().withdraw(100).statement();

function PiggyBank() {
  this.balance = 0;
  this.lt = 0;
  this.str = ''
}
function deposit(v) {
  this.balance += v;
  this.lt = v;
  this.str = 'deposit'
  return this;
}
function withdraw(v) {
  if(this.balance >= v){
    this.balance -= v;
    this.lt = v;
    this.str = 'withdrawal'
  }
  return this;
}
function statment() {
  console.log(`Balance : ${this.balance}`);
  console.log(`Last Transaction : ${this.str } ${this.lt}`);
  return this;
  
}

PiggyBank.prototype.deposit = deposit;
PiggyBank.prototype.withdraw = withdraw;
PiggyBank.prototype.statment = statment;

console.log("-----------Pg1-----------");
var pg1 = new PiggyBank();
pg1.deposit(100).withdraw(10).statment();

console.log("-----------Pg2-----------");
var pg2 = new PiggyBank();
pg2.deposit(20).statment().deposit(200).statment().withdraw(50).statment();

