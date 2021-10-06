let quote = document.getElementById("quote");

fetch("https://thatsthespir.it/api")
    .then(response => response.json())
    .then(data => quote.innerHTML = data.quote)
    .catch(error => quote.innerHTML = error);