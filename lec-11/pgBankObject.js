let pg1 = {
    balance:0,
    lt:0
};

function deposit(v)
{
    if(v > 0)
    {
        pg1.balance += v;
        pg1.lt = v;
    } 
}

function withdraw(v)
{
    if(v > 0 && v <= pg1.balance)
    {
        pg1.balance -= v;
        pg1.lt = -v;
    }
}

function statement()
{
    console.log("Balance: " + pg1.balance);
    console.log("Last Transaction: " + pg1.lt);
}

deposit(100);
statement();
withdraw(50);
statement();
withdraw(60);
statement();
