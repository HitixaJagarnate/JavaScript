class PiggyBank {
    constructor(){
        if(PiggyBank.count === undefined) PiggyBank.count = 0;
        PiggyBank.count++;
    }
    static balance = 0;
    static lt = 0;
    
   static deposit(v){
        if(v > 0 ){
            this.balance += v;
            this.lt = v;
        }
    }

   static withdraw(v){
        if(v > 0 && v <= this.balance){
            this.balance -= v;
            this.lt = v;
        }
    }

   static statement(){
        console.log(`Balance : ${this.balance}`);
        console.log(`Last Transaction  ${this.lt}`);
    }

    static printObjectCount(){
        console.log(`This is a Static Method`);
        console.log(`Object Count =  ${PiggyBank.count}`);
    }
}

var pg1 = new PiggyBank();
PiggyBank.deposit(100);
PiggyBank.statement();
// pg1.deposit(100);
// pg1.deposit(50);
// pg1.statement();
PiggyBank.withdraw(25);
PiggyBank.statement();

PiggyBank.printObjectCount();
