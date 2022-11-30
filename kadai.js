let answer=document.querySelector("#answer");
let html="<ul>";

let i=0;
while (i<tweets.length){
  html+=`<li><b>${tweets[i].name}</b>: ${tweets[i].message}<i>${tweets[i].tweetedAt}</i></li>`;
  i++;
}
html+="</il>";
answer.innerHTML=html;