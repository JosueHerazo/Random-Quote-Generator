const btn = document.getElementById("btn")
const contentEl = document.getElementById("quote")
const autorEl = document.getElementById("author")

const apiURL = "https://api.quotable.io/random"

async function  getQuote(){

    try {
     btn.innerText = "Loading..." 
     btn.disabled = true;  
     contentEl.innerText = "Updating...";
     autorEl.innerText = "Updating...";
    const response = await fetch(apiURL)
    const data = await response.json()
    const quote = data.content
    const author = data.author
    contentEl.innerText = quote
    autorEl.innerText =  "~ " + author
    btn.innerText = "Get a quote"
    btn.disabled = false;

    } catch (error) {
        console.log(error);
        contentEl.innerText = "An error happened, try again later"
        autorEl.innerText = "An error happened";
    }
    
}

getQuote()

btn.addEventListener("click", getQuote)