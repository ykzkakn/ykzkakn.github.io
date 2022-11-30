fetch("https://morimorihoge.github.io/teu2022f/tweets.json").then(
    function(response){
      return response.json();
    }
).then(
    function (json){
      let answerHtml="";
      json.forEach(function (tweet){
        answerHtml　+=`<li>${tweet.name}</li>`;
      });
      document.querySelector("#answer").innerHTML=answerHtml;

    }
);

fetch("https://zipcloud.ibsnet.co.jp/api/search?zipcode=7830060.json").then(
    function(response){
      return response.json();
    }
).then(
    function (json){
      console.log(json);
      let answer0Html="";
      json.result.forEach(function (living){
        answer0Html　+=`<li>${living.adress1}${result.adress2}${result.adress3}</li>`;
      });
      document.querySelector("#adress").innerHTML=answer0Html;

    }
);