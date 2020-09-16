const log = console.log;
//style - 1:
function isPrime(n) {
  if (n === 2) {
    return true;
  }
  if (!Number.isInteger(n) || n < 2 || !(n % 2)) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(n); i++, i++) {
      // for (let i = 3; i< n-1; i++, i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// let num = [1,11,20,3,7,15,9,23,17,12];
function getPrime(...num) {
  let primeNum = [];
  for (let i = 0; i <num.length; i++) {
    if (isPrime(num[i])) {
      primeNum.push(num[i]);
    }
  }
  log(`This is style - 1:`);
  console.log(`All the prime numbers presents in an array ==> ${primeNum}`);
  console.log(`Total of prime numbers ==> ${primeNum.length}`);
}
let num = [1, 11, 20, 3, 7, 15, 9, 23, 17, 12];
getPrime(...num);

//style - 2:
function isPrimeNum(num){

    if(num <= 1){
        return false;
    }
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}
// log(isPrimeNum(2));

function getPrimeNum(...numbers){
    let primeNumbers = [];
    for(let i = 0; i<numbers.length; i++){
        if(isPrimeNum(numbers[i])){
            primeNumbers.push(numbers[i]);
        }
    }
    log(`This is style - 2:`);
    console.log(`All the prime numbers presents in an array ==> ${primeNumbers}`);
  console.log(`Total of prime numbers ==> ${primeNumbers.length}`);
}
var allPrimeNums = [ 2, 3, 15, 17, 1, 13, 9, 23, 29, 10, 22];
getPrimeNum(...allPrimeNums);


//style - 3: squareRoot
function p(n){
//  let n = 16;
let prime = 1;
for(let i = 2; i*i <n; i++){
    if(n%i === 0){
        prime = 0;
    }
}
log(`This is style - 3:`);
if(prime){

    console.log(`number ${n} is prime number`)
}else{
    console.log(`number ${n} is not a prime number`)
}
return 0;
}
p(23);

//style - 4: using lable
log(`This is style - 4:`);
function p2(){
let num1 = 10;
let a = [];
nextPrime:
for (let i = 2; i <= num1; i++) { // for each i...
  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }
  a.push(i);
}
log(`All the prime numbers presents in an array ==> ${ a }`); // a prime
}
p2();




