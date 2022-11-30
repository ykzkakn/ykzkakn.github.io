function showModal(){
  console.log("showModal()の実行テスト");
  let modal=document.querySelector("#modal");
  modal.innerHTML="ボタンが押されました";
}
function showZero(){
  let modal=document.querySelector("#modal");
  modal.innerHTML= 0;
}
function  changeRed(){
  console.log("赤実行");
  let modal=document.querySelector("#modal");
  modal.style.backgroundColor="#FF2009";
}
function  changeYellow(){
  console.log("黄色実行");
  let modal=document.querySelector("#modal");
  modal.style.backgroundColor="yellow";
}
function  changeGreen(){
  console.log("緑実行");
  let modal=document.querySelector("#modal");
  modal.style.backgroundColor="green";
}

function appendCircle(){
  console.log("circle実行")
  let modal=document.querySelector("#modal");
  modal.innerHTML +="〇";
}
function appendCross(){
  console.log("cross実行")
  let modal=document.querySelector("#modal");
  modal.append("×");
}

function plusOne(){
  let modal=document.querySelector("#modal");
  modal.innerHTML= Number(modal.innerHTML) +1;
}
function plusFive(){
  let modal=document.querySelector("#modal");
  modal.innerHTML= Number(modal.innerHTML) +5;
}
function plusTen(){
  let modal=document.querySelector("#modal");
  modal.innerHTML= Number(modal.innerHTML) +10;

}