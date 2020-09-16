

// const filter = vowels.map((v) => {
//     return v.vowel
// })


function vowelsAndConsonants(s) {
  let vowels = ['a','e','i','o','u'];

  for(let v of s) {
      if(vowels.includes(v))
          console.log(v);
  }
  // for(let v of s) {
  //     if(!vowels.includes(v))
  //         console.log(v);
  // }
}
string = 'javascriptloops'
vowelsAndConsonants(string);
console.log(string);






 