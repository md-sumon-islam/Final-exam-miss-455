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
}