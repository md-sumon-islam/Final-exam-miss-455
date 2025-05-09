function searchCountry() {
    const input = document.getElementById("searchInput").value.trim();
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // Clear previous results
  
    if (!input) {
      resultDiv.innerHTML = "<p>Please enter a country name.</p>";
      return;
    }
  
    fetch(`https://restcountries.com/v3.1/name/${input}`)
      .then(response => {
        if (!response.ok) throw new Error("Country not found");
        return response.json();
      })
      .then(data => {
        const country = data[0];
        const name = country.name.common;
        const capital = country.capital?.[0] || "N/A";
        const flag = country.flags.svg;
        const currency = Object.values(country.currencies || {})[0]?.name || "N/A";
        const population = country.population;
        const region = country.region;
        const languages = Object.values(country.languages || {}).join(", ");
  
        resultDiv.innerHTML = `
          <h2>${name}</h2>
          <img src="${flag}" alt="Flag of ${name}" />
          <p><strong>Capital:</strong> ${capital}</p>
          <p><strong>Currency:</strong> ${currency}</p>
          <p><strong>Population:</strong> ${population.toLocaleString()}</p>
          <p><strong>Region:</strong> ${region}</p>
          <p><strong>Languages:</strong> ${languages}</p>
        `;
      })
      .catch(error => {
        resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
      });
  }
  