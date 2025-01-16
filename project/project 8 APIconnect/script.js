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
            <a class="button" href="country.html?name=${country.name.common}">View detail</a>
        `;
        countriesContainer.appendChild(countryCard);
      });
    })
    .catch((error) => console.error("error fetching data:", error));
}
if (currentPage === "country") {
  const countryDetailsContainer = document.getElementById("country-details");
  const countryNameElement = document.getElementById("country-name");
  const urlParams = new URLSearchParams(window.location.search);
  const countryName = urlParams.get("name");
  if (countryName) {
    fetch(`${API_BASE_URL}/name/${countryName}`)
      .then((response) => response.json())
      .then((data) => {
        const country = data[0];
        console.log(country);
        const population =
          country.population.toLocaleString() +
          country.population.toLocaleString();
        countryNameElement.textContent = country.name.common;
        countryDetailsContainer.innerHTML = `
      <img src="${country.flags.svg}" alt="${country.name.common}"/>
    
      <p><strong>name<strong>${country.name.common}</p>
      <p><strong>languages<strong>${country.languages.eng}</p>
      <p><strong>Capital<strong>${country.capital}</p>
      <P><strong>population<strong>${population}</P> 
      <p><strong>Region<strong>${country.region}</p>
      <p><strong>Region<strong> ${Object.values(country.currencies).map(
        (c) => c.name
      )}</p>
    <a href="${country.maps.googleMaps}" target="_blank">View Map</a>
      `;
      })
      .catch((error) => {
        console.error("Error fetching:", error);
        countryDetailsContainer.innerHTML = "<p>error fetching</p>";
      });
  } else {
    countryDetailsContainer.innerHTML = "<p>country name found</p>";
  }
}
