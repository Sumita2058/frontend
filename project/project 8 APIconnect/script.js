const API_BASE_URL = "https://restcountries.com/v3.1";
const currentPage = document.body.id;
//function to displays countries on the home page
if (currentPage === "index") {
  const countriesContainer = document.getElementById("contries-container");
  fetch(`${API_BASE_URL}/all`)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((country) => {
        const countryCard = document.createElement("div");
        countryCard.className = "country-card";
        countryCard.innerHTML = `
            <img class="flag" src="${country.flags.svg}" alt="${country.name.common}"/>
            <h2>${country.name.common}</h2>
            <p><strong> region:</strong>
            ${country.region}</p>
            <a href="country.html?name=${country.name.common}">View</a>
        `
        countriesContainer.appendChild(countryCard);
      });
    })
    .catch((error)=>console.error("error fetching data:",error));
}
