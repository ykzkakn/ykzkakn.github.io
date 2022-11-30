function checkAge(){
  let age=Number(document.querySelector("#age").value);
  let answer=document.querySelector("#answer");
  let message;
  if(age<=0) {
    message = "エラー";
  }else if (age<20) {
    message = "未成年";
  }else if(age<65){
    message="成人";
  }else{
    message="高齢者"
  }
  //数直線的考え方。少ない数から除外していく。

answer.innerHTML=message;
}

function checkYear(){
  let year=Number(document.querySelector("#year").value);
  let answer1=document.querySelector("#answer1");
  let message1;

  if(year % 400==0){
    message1="閏年";
  }else if(year % 100==0){
    message1="平年";
  }else if(year % 4==0){
    message1="閏年";
  }else{
    message1="平年";
  }
  //数学の集合的考え方。広い範囲から絞っていく。

  answer1.innerHTML=message1;
}