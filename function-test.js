function logHello(){
  console.log("Hello");
}

function logHello2 (message){
  console.log(`logHello2: ${message}`);
}

function logHello3(message1,message2,message3){
  console.log(`logHello: ${message1},${message2},${message3}`);
}

function logHello4(message1,message2 ="Message2Default"){
  console.log(`logHello4: ${message1},${message2}`);
}


function logHello5(){
  return 2021*1010;
}

function multiply(a,b){
  return a*b;
}
function multiply1Digit(a,b){
  return(a*b)%10;
}
function  multiply2Digit(a,b){
  return Math.floor((a*b)/10)%10;
}

function hello(){
  console.log("こん～");
}
function helloSomeone(name){
  console.log(`ごきげんよう${name}さま`)
}
function helloCircleArea(radius){
  console.log(radius*radius*Math.PI);
}
function helloRectangleArea(width,height){
  console.log(width*height);
}
