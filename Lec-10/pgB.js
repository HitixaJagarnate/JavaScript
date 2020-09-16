// Hiral Kanakia3:
// /* Knowing Responsibility */
var nBalance = 0;
var nLastTransaction = 0;
var strTransation = "";

function statement()
{
    console.log("balance = " + nBalance);
    console.log("last transaction = " + strTransation + " " + nLastTransaction);
}

function deposit(nDepositAmount)
{
    nBalance += nDepositAmount;
    nLastTransaction = nDepositAmount;
    strTransation = "deposit";
    //statement();
}
function withdrawal(nWithdrawalAmount)
{
    nLastTransaction = nWithdrawalAmount}


