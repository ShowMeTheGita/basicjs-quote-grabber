
const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

//adding my own twist to consume an API, instead of martelating the quotes, without jQuery
function displayQuote() {

    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://type.fit/api/quotes", true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === XMLHttpRequest.DONE) {
            var status = xhttp.status;
            if (status === 0 || status >= 200 && status < 400) {
                let allQuotes = JSON.parse(xhttp.responseText); //there are A LOT of quotes, this is really bad
                let quotesLength = allQuotes.length;
                let randomQuote = allQuotes[Math.floor(Math.random()*quotesLength)];
                quoteAuthor.innerHTML = randomQuote.author;
                quote.innerHTML = randomQuote.text;
            } else {
                console.log("Something went wrong");
            }
        }
    }

    xhttp.send();
    
}