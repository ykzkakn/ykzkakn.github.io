let answer = document.querySelector("#answer");
let html = "<ul class='list-unstyled'>";

for (let i = 0; i < tweets.length; i++) {
  html += `<li><p><img src=${tweets[i].avatar} class="image_size"><b>${tweets[i].name}</b>:${tweets[i].message}<i>${tweets[i].tweetedAt}</i></p></li>`;
}

html += "</ul>";
answer.innerHTML = html;


function tweetAll() {
  let answer = document.querySelector("#answer");
  let html = "<ul class='list-unstyled'>";

  for (let i = 0; i < tweets.length; i++) {
    html += `<li><p><img src=${tweets[i].avatar} class="image_size"><b>${tweets[i].name}</b>:${tweets[i].message}<i>${tweets[i].tweetedAt}</i></p></li>`;
  }

  html += "</ul>";
  answer.innerHTML = html;
}


function tweetSaburo(){
  let Saburotweets=tweets.filter(function (element){
    return element.name==="三郎BOT"
  })

  let answer = document.querySelector("#answer");
  let html = "<ul class='list-unstyled'>";

  for (let i = 0; i < Saburotweets.length; i++) {
    html += `<li><p><img src=${Saburotweets[i].avatar} class="image_size"><b>${Saburotweets[i].name}</b>:${Saburotweets[i].message}<i>${Saburotweets[i].tweetedAt}</i></p></li>`;
  }
  html += "</ul>";
  answer.innerHTML = html;
}


function tweetJiro(){
  let Jirotweets=tweets.filter(function (element){
    return element.name==="次郎"
  })

  let answer = document.querySelector("#answer");
  let html = "<ul class='list-unstyled'>";

  for (let i = 0; i < Jirotweets.length; i++) {
    html += `<li><p><img src=${Jirotweets[i].avatar} class="image_size"><b>${Jirotweets[i].name}</b>:${Jirotweets[i].message}<i>${Jirotweets[i].tweetedAt}</i></p></li>`;
  }
  html += "</ul>";
  answer.innerHTML = html;
}


function  tweetTaro(){
  let Tarotweets=tweets.filter(function (element){
    return element.name==="太郎"
  })

  let answer = document.querySelector("#answer");
  let html = "<ul class='list-unstyled'>";

  for (let i = 0; i < Tarotweets.length; i++) {
    html += `<li><p><img src=${Tarotweets[i].avatar} class="image_size"><b>${Tarotweets[i].name}</b>:${Tarotweets[i].message}<i>${Tarotweets[i].tweetedAt}</i></p></li>`;
  }
  html += "</ul>";
  answer.innerHTML = html;

}