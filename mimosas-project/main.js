// www.thecocktaildb.com/api/json/v1/1/random.php

document.querySelector("button").addEventListener("click", getDrink);

function getDrink() {
  let drink = document.querySelector("input").value;

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.drinks[0]);

      document.querySelector("img").src = data.drinks[0].strDrinkThumb;
      document.querySelector(".drinkName").innerText = data.drinks[0].strDrink;
      document.querySelector(".instructions").innerText =
        data.drinks[0].strInstructions;
      document.querySelector(".ingredients").innerText =
        data.drinks[0].strIngredient1;
      document.querySelector(".ingredients2").innerText =
        data.drinks[0].strIngredient2;
      document.querySelector(".ingredients3").innerText =
        data.drinks[0].strIngredient3;
      document.querySelector(".ingredients4").innerText =
        data.drinks[0].strIngredient4;
      document.querySelector(".ingredients4").innerText =
        data.drinks[0].strIngredient5;
      document.querySelector(".ingredients4").innerText =
        data.drinks[0].strIngredient6;
      // video player functionality
      let video = data.drinks[0].strVideo;
      let noVideo = "";
      let embededVideo = video.replace("watch?v=", "embed/");
      document.querySelector("iframe").src = embededVideo;
      if (video === "") {
        let video = noVideo;
      } else {
        let video = video;
      }
    })
    // error handling
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

// enter key functionality

document.querySelector("#input").addEventListener("keypress", key);

function key(e) {
  const input = document.querySelector("#input");
  if (e.keyCode === 13) {
    e.preventDefault();
    getDrink();
  }
}
