const log = console.log;
log(`All the Even Elements present in an array!!!!!!!!!!`);



function evenNum(...num) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      log(num[i]);
    }
  }
}
evenNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
