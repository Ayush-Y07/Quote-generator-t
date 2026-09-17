const quote = document.getElementById("quote");
const author = document.getElementById("author");
const quoteBtn = document.getElementById("quoteBtn");
const loading = document.getElementById("loading");


function getQuote() {

    loading.textContent = "Loading...";

    fetch("https://dummyjson.com/quotes/random")

        // Step 1: API response
        .then(function(response) {

            return response.json();

        })

        // Step 2: JSON data
        .then(function(data) {

            quote.textContent = `"${data.quote}"`;

            author.textContent = `— ${data.author}`;

            loading.textContent = "";

        })

        // Step 3: Error handling
        .catch(function(error) {

            console.log(error);

            quote.textContent =
                "Unable to load quote.";

            author.textContent = "";

            loading.textContent = "";

        });
}


// Button click
quoteBtn.addEventListener("click", getQuote);