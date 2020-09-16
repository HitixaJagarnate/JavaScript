/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    if (typeof s !== "string") {
        console.log("s.split is not a function");
    }
 
    if (typeof s === "string") {
        s = s.split('').reverse().join('');
    }
 
    console.log(s);
}

// function reverseString(s) {
//     try{
//         s = s.split('').reverse().join('');
//     }catch(e){
//         console.log('s.split is not a function');
//     }
//     console.log(s);
// }


function main() {
    // const s = 'hello';
    const s = '12345';
    
    reverseString(s);
}
main();