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
     <div class="map">
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d593982.0245516009!2d-36.9023897!3d-54.44101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbecb0d04d60d1019%3A0xde9df3c446380561!2sSouth%20Georgia%20Island!5e0!3m2!1sen!2snp!4v1736810011030!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <a href="{$https://goo.gl/maps/rqWyfUAt4xhvk1Zy9}">View </a>
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
