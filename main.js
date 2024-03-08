
// Step one - get the data from the source

// let anime;
function value() {
    let name = document.getElementById("anime");
    let nameValue = name.value;
    return nameValue
}

function animeName() {
    let name = value();
    anime = "https://animechan.xyz/api/random/anime?title=" + name;
    return anime
}

const response = '';

const getData = async () => {
    let anime = animeName();
    let response = await fetch(anime)
                                    .then((response) => response.json())
                                    .then((quote) => {return quote.quote + 
                                        ' -' + quote.character + 
                                        ' from ' + quote.anime});
    const quote = document.createElement("h2");
    quote.innerHTML = response;
    document.getElementById("quote").append(quote);
    return response
}