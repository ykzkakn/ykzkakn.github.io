fetch("https://morimorihoge.github.io/teu2022f/tweets.js").then(
    function(response){
      return response.json();
    }
).then(
    function (json){
      let answer0Html="";
      json.forEach(function (tweet){
        answer0Html　+=`<li>${tweet.name}</li>`;
      });
      document.querySelector("#answer").innerHTML=answer0Html;

    }
);