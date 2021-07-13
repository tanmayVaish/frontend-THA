let but = document.querySelector('.update');

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

document.getElementById('root').innerHTML = httpGet('https://api.thingspeak.com/apps/thinghttp/send_request?api_key=FRGBOR5WUJ2BXIOP');


but.addEventListener('click', () =>{
    window.location.href = '';
})