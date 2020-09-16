var a = [10, 20, 30, 40];
console.log(a);
console.log(a.length);
a[10]= 50;
a[20]='JavaScript';
console.log(a);


console.log('Printing for in loop');

for(i in a){
    console.log(i);
    console.log(a[i]);
}

console.log('Printing for of loop');
for(b of a){
    console.log(b);
}
