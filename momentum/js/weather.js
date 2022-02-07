
const API_KEY = "a20ad7d2707ca4dcf8f27e9d4e467b67";

function onGeoOk(position){ 
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    fetch(url)
        .then((response) => response.json()
        .then(data => {
        console.log(data.name,data.weather[0].main)
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.city;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;

    }));
}

function onGeoEr(){
    alert("Error!");
}

