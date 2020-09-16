function PiggyBank() {
    this.balance =0;
    this.lt = 0;
}

PiggyBank.prototype.deposit = function (v){
    if(v > 0){
        this.balance += v;
        this.lt = v;
    }
};

PiggyBank.prototype.withdraw = function(v){
    if(v>0 && v <= this.balance){
        this.balance -= v;
        this.lt = v;
    }
};

PiggyBank.prototype.statement = function (){
    console.log(`Balance : ${this.balance}`);
    console.log(`Last Transaction : ${this.lt}`);
};

var pg1 = new PiggyBank();
pg1.deposit(100);
pg1.deposit(75);
pg1.deposit(200);
pg1.statement();
pg1.withdraw(200);
pg1.statement();


//Practice with jayeshbhai:
function f1() {
    
}

console.log(f1);
f1.prototype.name='Hitixa';
console.log(f1.prototype);

var obj = {

}
obj.greetings = 'hello';
console.log(obj);

console.log();