console.log("Welcome to Grader");
console.log("-----------Variant 1------------");
let marks1 = 60;
if (marks1 >= 80) {
  console.log("Distinction");
}
if (marks1 >= 60 && marks1 < 80) {
  console.log("First Class");
}
if (marks1 >= 35 && marks1 < 60) {
  console.log("Passed");
}
if (marks1 < 35) {
  console.log("Failed");
}

console.log("-----------Variant 2------------");
let marks2 = 80;
if (marks2 >= 80) {
  console.log("Distinction");
} else {
  if (marks2 >= 60 && marks2 < 80) {
    console.log("First Class");
  } else {
    if (marks2 >= 35 && marks < 60) {
      console.log("Passed");
    } else {
      console.log("Failed");
    }
  }
}

console.log("-----------Variant 3------------");
let marks3 = 38;
if(marks3 >= 80){
    console.log('Distinction');
}else if(marks3 >= 60 && marks3 < 80){
    console.log('First Class');
}else if(marks3 >= 35 && marks3 < 60){
    console.log('Passed');
}else{
    console.log('Failed');
}

console.log("-----------Variant 4------------");
let marks4 = 111;
if(marks4 <= 100 && marks4 >= 80){
    if(marks4 >= 80){
        console.log('Distinction');
    }else if(marks3 >= 60 && marks3 < 80){
        console.log('First Class');
    }else if(marks3 >= 35 && marks3 < 60){
        console.log('Passed');
    }else{
        console.log('Failed');
    }
}
else{
    console.log('Wrong Values');
}
