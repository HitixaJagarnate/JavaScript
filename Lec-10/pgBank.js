const log = console.log;

//knowing Responsiblity:
var previousBalance = 0;
var currentBalance = 0;

//Doing Responsiblity:
function deposit(amount) {
  previousBalance = currentBalance;
  currentBalance += amount;

  if (amount <= 0) {
    log("Deposit amount should be greater than 0. Thankyou!!!");
    return;
  }
}

function withdraw(amount) {
  previousBalance = currentBalance;
  currentBalance -= amount;

  if (amount <= 0) {
    log(`Withdraw amount should be greater than 0. Thankyou!!!`);
    return;
  } else if (amount > currentBalance) {
    log(`Insufficient Balance`);
    log(`Current balance is ${currentBalance}`);
    log(`You tried to withdraw Rs. ${amount}`);
  }
}

function statement() {
  // log(`previousBalance = ${previousBalance}`);
  log(`currentBalance = ${currentBalance}`);
  if (currentBalance > previousBalance) {
    log(
      `Last transaction was deposite of Rs. ${currentBalance - previousBalance}`
    );
  } else if (currentBalance < previousBalance) {
    log(
      `Last transaction was withdrawal of Rs. ${
        currentBalance - previousBalance
      }`
    );
  }
}

statement();
deposit(20);
statement();
deposit(40);
statement();
withdraw(70);
statement();
