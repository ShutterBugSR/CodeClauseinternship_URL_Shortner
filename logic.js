let btn = document.getElementById("shorten");
btn.addEventListener('click', short);
async function short(){
    let longURL = document.getElementById("long-url").value;
    let shortURL = document.getElementById("short-url");
    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${longURL}`); 
    const data = await result.json();
    shortURL.value = data.result.short_link2;
    console.log(data.result.short_link2);
}