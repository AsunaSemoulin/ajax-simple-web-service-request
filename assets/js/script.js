let quote = document.getElementById("quote");
let author = document.getElementById("author");
let authorImg = document.getElementById("authorImg");

fetch("https://thatsthespir.it/api")
    .then(response => response.json())
    .then(data => {
        quote.innerHTML = data.quote;
        author.innerHTML = data.author;
        authorImg.setAttribute("src", data.photo);
    })
    .catch(error => quote.innerHTML = error);
