const log = console.log;

var marks = [95,75,80,90]
function sum3(p,c,m,b) {
    let pcm = p+c+m;
    let percentage = (pcm * 100 )/300;
    log(`total of pcm -> ${pcm} and percentage --> ${percentage}`);

    let pcb = p+c+b;
    percentage = (pcb *100)/300
    log(`total of pcb -> ${pcb} and percentage --> ${percentage}`);
}
sum3(...marks);