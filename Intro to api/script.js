const site =
  "https://iskarr.github.io/austindonovan.github.io/api/business.json";

fetch(site)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });
