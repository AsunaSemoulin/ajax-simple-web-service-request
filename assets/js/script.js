let quote = document.getElementById("quote");
let author = document.getElementById("author");
fetch("https://thatsthespir.it/api")
    .then(response => response.json())
    .then(data => {
        quote.innerHTML = data.quote;
        author.innerHTML = data.author;
    })
    .catch(error => quote.innerHTML = error);
