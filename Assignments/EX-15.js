
// let obj2 =
// {
//     countNotes: [1,2,3,'place for TotalMoney'],
//     totalMoney:0,
//     finalSumMoney:0
// };
// let obj1 =
// {
//     pankajBank : [2000,500,100],
//  __proto__ : obj2
//  };
//  function findTotalofMoney (notes)
//  {
//      console.log(notes)
//      for(i=0; i<obj1.pankajBank.length; i++)
// {
//     obj1.totalMoney = obj1.countNotes[i]*obj1.pankajBank[i];
//     obj1.finalSumMoney = obj1.finalSumMoney + obj1.totalMoney;
// }
// obj2.countNotes[3] = obj1.finalSumMoney;
// console.log ("Total sum of money is " + " " +obj2.countNotes[3]);
// console.log("All the counts of notes and total of money" + " " +obj2.countNotes);
// }
// findTotalofMoney(obj2.countNotes);

//An array of size 5 stores the name of 5 months in it. Print the number of days for each month 
//element of the array.

var lastDay = function(year,month){

     return  new Date(year, month +1, 0).getDate();
    }
    
    console.log(lastDay(2014,0));
    console.log(lastDay(2014,1));
    console.log(lastDay(2014,11));

/* An array has 4 elements. The first element stores the number of 2000Rs notes Pankaj has. 
The second element stores the number of 500Rs notes Pankaj has. The third element strores the number of 100Rs 
notes Pankaj has. Store in the fourth location the total amount of Rs. Pankaj has. */


 let m = [2000,500,100];
 let n = [4,2,3];
 let sum = 0;

 for(let i = 0; i<n.length; i++){
          sum += n[i]*m[i];
          m[3] = sum;         
 }
 console.log(sum);
 console.log(m);