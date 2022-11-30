function doLoop(){
  let answer=document.querySelector("#answer");

  let i=0;
  let sum=0;
  while (i<=10000){
    sum=sum+i;//sum +=iでもおｋ
    i++;
  }
  answer.innerHTML=sum;
}


function doLoop1(){
  let answer1=document.querySelector("#answer1");

  let i=0;
  let sum1=0;
  while (true){
    sum1+=i;
    if(sum1>=50000){
      break;
    }
    i++;
  }
  answer1.innerHTML=sum1;
}
function doFizzBuzz(){
  let answer2=document.querySelector("#answer2");
  let message="";

  let i=1;
  while (i<=100) {
    if (i % 3 == 0 && i % 5 == 0){
      message += `FizzBuzz<br/>`;
  }else if(i%3==0){
    message+=`Fizz<br/>`;
  }else if (i%5==0){
    message+=`Buzz<br/>`;
  }else{
    message+=`${i}<br/>`;
  }
  i++;
}
answer2.innerHTML=message;
}