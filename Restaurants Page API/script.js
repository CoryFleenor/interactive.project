const flipCard = document.getElementById("flip-card");
const flipCardInner = document.getElementById("flip-card-inner");
const flipCardFront = document.getElementById("flip-card-front");
const flipCardBack = document.getElementById("flip-card-back");
const busImg = document.getElementById("restimg");

const business = [];
let arr = [];

const API =
  "https://iskarr.github.io/austindonovan.github.io/api/business.json";

fetch(API)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("No Response");
    }
  })
  .then((data) => {
    displayBusiness(data);
  });

function displayBusiness(data) {
  arr = data.business;
  console.log(arr);
}

console.log(business);
