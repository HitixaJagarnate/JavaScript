//Object Modelling - new:

function deposit(v) {
    this.balance = this.balance + v;
    this.lt = v;
  }
  
  function withdraw(v) {
    if (this.balance >= v) {
      this.balance = this.balance - v;
      this.lt = -v;
    }
  }
  
  function statement() {
    console.log("Balance = " + this.balance);
    console.log("Last Transction = " + this.lt);
  }

   function Piggybank(){  
          this.balance= 0;
          this.lt= 0;
          this.deposit= deposit;
          this.withdraw= withdraw;
          this.statement= statement;
  } 
  
  var pg1 = new Piggybank();
  
  pg1.deposit(100);
  pg1.statement();
  pg1.withdraw(50);
  pg1.statement();
  pg1.withdraw(10);
  pg1.statement();
  
  
  var pg2 = new Piggybank();
  
  pg2.deposit(200);
  pg2.statement();
  pg2.withdraw(100);
  pg2.statement();
  pg2.withdraw(50);
  pg2.statement();
  