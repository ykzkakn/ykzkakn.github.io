let answer1=document.querySelector("#answer1");
let html="<ul1>";

let i=0;
while (i<tweets.length){
  html+=`<li1><b>${tweets[i].name}</b>: ${tweets[i].message}<i>${tweets[i].tweetedAt}</i></li1>`;
  i++;
}
html+="</il1>";
answer.innerHTML=html;

//for(let i=0; i<tweets.length;i++) {
//  html+=<li><b>${tweets[i].name}</b>:${tweets[i].message}<i>${tweets[i].tweetedAt}</i></li>;
//}
//html +="</ul>";
//answer.innerHTML=html;