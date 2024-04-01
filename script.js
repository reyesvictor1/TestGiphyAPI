const img = document.querySelector("img");
const input = document.querySelector("input");
const btn = document.querySelector("button");

const fetchURL = "https://api.giphy.com/v1/gifs/translate";
const API_KEY = "3ZDdDLc2PSQTZFQEvu5Uz278CUyd16s0";
let searchTerm = "cat";

searchGIF();

// ============================= functions =============================

function searchGIF() {
    fetch(`${fetchURL}?api_key=${API_KEY}&s=${searchTerm}`, {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        img.src = response.data.images.original.url;
    });
}

btn.addEventListener("click", () => {
    if (!input.value.trim()) return alert("Search bar is empty!");
    searchTerm = input.value;
    searchGIF();
});