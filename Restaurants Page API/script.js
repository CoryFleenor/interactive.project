const flipCard = document.getElementById("flip-card");
const flipCardInner = document.getElementById("flip-card-inner");
const flipCardFront = document.getElementById("flip-card-front");
const flipCardBack = document.getElementById("flip-card-back");
const busImg = document.getElementById("restimg");

const apiUrl =
  "https://iskarr.github.io/austindonovan.github.io/api/business.json";

window.onload = () => {
  cardMaker();
};

const cardMaker = () => {
  fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      populateData(data);
    });
};

populateData = (business) => {
  for (let i = 0; (i) => business.length; i++) {
    document.getElementById(
      `name${[i]}`
    ).innerText = `${business.business[i].name}`;
    document.getElementById(
      `description${[i]}`
    ).innerText = `${business.business[i].description}`;
    document.getElementById(
      `address${[i]}`
    ).innerText = `${business.business[i].address}`;
    document.getElementById(
      `restimg${[i]}`
    ).src = `${business.business[i].imageurl}`;
  }
};
