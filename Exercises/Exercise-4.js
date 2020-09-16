/* 1--> write a JS function that returns a passed string with letters in alphabetical
order.
Exp: 'webmaster' 
output: 'abeemrstw'
*/
const alphabeticalOrder = (str) =>
    str.split('').sort((a,b) => a > b? 1: -1).join('');
    console.log(alphabeticalOrder('webmaster'));
    console.log(alphabeticalOrder('javascript'));