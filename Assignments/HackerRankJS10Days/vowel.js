function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    // output vowels    
    for(let i = 0; i < s.length; i++) {
         if (vowels.indexOf(s.charAt(i)) > -1) {
              console.log(s.charAt(i));
         }
    }
    // output consonants
    // for(let i = 0; i < s.length; i++) {
    //      if (vowels.indexOf(s.charAt(i)) < 0) {
    //           console.log(s.charAt(i));
    //      }
    // } 

    // s = s.split('');
    // s.map((i) => {
    //     if(vowels.indexOf(i) > -1){
    //         console.log(i);
    //     }
    //     return i;
    // });

    // s.map((i) => {
    //     if(vowels.indexOf(i) < 0){
    //         console.log(i);
    //     }
    //     return i;
    // })
}
let i = vowelsAndConsonants('javascriptloops');
console.log(i);
