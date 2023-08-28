let newURL = document.getElementById("short-url");
let coptButton = document.getElementById("copy");

coptButton.onclick = ()=>{
    newURL.select();
    window.navigator.clipboard.writeText(newURL.value);
}