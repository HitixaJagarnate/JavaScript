// Procedural Modelling - Reuse
var pg1 = {
    balance: 0,
    lt: 0,
};

var pg2 = {
    balance: 0,
    lt: 0,
};

function deposit(pg,v)
{
    pg.balance = pg.balance + v;
    pg.lt = v;
}
function withdraw(pg,v)
{
    if (pg.balance >= v)
    {
        pg.balance = pg.balance - v;
        pg.lt = -v;
    }
}
function statement(pg)
{
    console.log("Balance = " + pg.balance);
    console.log("Last Transction = " + pg.lt);
}


deposit(pg1,100);
statement(pg1);
withdraw(pg1,50);
statement(pg1);
withdraw(pg1,10);
statement(pg1);

console.log(`--------------------------------`);
deposit(pg2,200);
statement(pg2);
withdraw(pg2,10);
statement(pg2);
withdraw(pg2,50);
statement(pg2);
