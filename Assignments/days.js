
function getDaysInMonth(year,month){

    date =  new Date(month,year,0).getDate();
    return date;
}
console.log(getDaysInMonth(2,2020));
console.log(getDaysInMonth(1,2008));
console.log(getDaysInMonth(2,1985));
console.log(getDaysInMonth(8,2020));
console.log(getDaysInMonth(2020,9));