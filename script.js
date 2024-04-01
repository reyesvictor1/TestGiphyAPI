const img = document.querySelector("img");
const input = document.querySelector("input");
const btn = document.querySelector("button");

const fetchURL = "https://api.giphy.com/v1/gifs/translate";
const API_KEY = "3ZDdDLc2PSQTZFQEvu5Uz278CUyd16s0";
let searchTerm = "cat";

searchGIF();

// ============================= functions =============================

async function searchGIF() {
    const response = await fetch(`${fetchURL}?api_key=${API_KEY}&s=${searchTerm}`, {mode: 'cors'});
    const reponseJSON = await response.json();
    img.src = reponseJSON.data.images.original.url;
}

btn.addEventListener("click", () => {
    if (!input.value.trim()) return alert("Search bar is empty!");
    searchTerm = input.value;
    searchGIF();
});