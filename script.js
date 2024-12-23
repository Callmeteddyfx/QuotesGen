
function getQuote() {
    fetch("https://zenquotes.io/api/random")
    .then(response => {
        console.log(response);
       return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

    
