const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");
const chkbal = document.getElementById("chkbal");
const savbal = document.getElementById("savbal");
const credbal = document.getElementById("credbal");
const minCoffeeBtn = document.getElementById("mincoffee");
let chkAmount = 5000;
let coffee = 5.99;
let savAmount = 2000;
let credAmount = 250;
let rent = 1100;

// Get Quotes From API
let apiQuotes = [];

// show loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}
// Hide loading
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// Show New Quotes
function newQuote() {
  loading();
  //Pick a random Quote from api quotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  //check author field
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }
  // check quote length for style
  if (quote.text.length > 75) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  // Set quote hide loader
  quoteText.textContent = quote.text;
  complete();
}
async function getQuotes() {
  loading();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    console.log(error); //Catch error here
  }
}
function minCoffee() {
  chkAmount = chkAmount - coffee;
  console.log(chkAmount);
  chkbal.innerHTML = "$" + chkAmount.toFixed(2).toString();
  alert("Coffe place has taken out");
}
function payRent() {
  chkAmount = chkAmount - rent;
  chkbal.innerHTML = "$" + chkAmount.toFixed(2).toString();
  console.log(chkAmount);
  alert("Rent has been paid!");
}

// Event listener
newQuoteBtn.addEventListener("click", newQuote);
minCoffeeBtn.addEventListener("click", minCoffee);
// On load
getQuotes();
chkbal.innerHTML = "$" + chkAmount.toString();
savbal.innerHTML = "$" + savAmount.toString();
credbal.innerHTML = "$" + credAmount.toString();

setTimeout(payRent, 60000);
