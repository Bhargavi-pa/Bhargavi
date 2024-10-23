window.onload = resultoftheplayer();
var finalresult = "";
//var storeresult = resultoftheplayer;

function resultoftheplayer() {
  var res1 = randomgenerator1();
  var res2 = randomgenerator2();
  console.log(res1);
  console.log(res2);
  if (res1 > res2) {
    finalresult = document.querySelector(".header").textContent =
      "Player1 is the winner";
  } else if (res1 < res2) {
    finalresult = document.querySelector(".header").textContent =
      "Player2 is the winner";
  } else {
    finalresult = document.querySelector(".header").textContent = "Draw";
  }

  return finalresult;
}

function randomgenerator1() {
  var result = Math.floor(Math.random() * 6 + 1);
  var imgres = "images" + "/dice" + result + ".png";
  image1 = document.querySelectorAll("img")[0].setAttribute("src", imgres);
  return result;
}

function randomgenerator2() {
  var result = Math.floor(Math.random() * 6 + 1);
  var imgres = "images" + "/dice" + result + ".png";
  image2 = document.querySelectorAll("img")[1].setAttribute("src", imgres);
  return result;
}
