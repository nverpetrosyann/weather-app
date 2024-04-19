let apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
let apiKey = `497c276982044af6fac6df82e01eb7f5`;
let weatherIcon = document.querySelector("#weather-icon")
let searchInp = document.querySelector("#search-input")
let searchBtn = document.querySelector("#search-button")


async function checkWeather(city) {
    let response = await fetch(apiUrl + city + "&appid=" + apiKey)
    let data = await response.json()

    if (response.status == 404) {
        document.querySelector("#error").style.display = "block"
        document.querySelector("#list").style.display = "none"
    } else {

        document.querySelector("#list-h1").innerHTML = Math.round(data.main.temp) + "°C"
        document.querySelector("#list-h2").innerHTML = data.name
        document.querySelector("#details-p1").innerHTML = data.main.humidity + "%"
        document.querySelector("#details-p2").innerHTML = data.wind.speed + "km/h"
        
        if (data.weather[0].main === "Rain") {
            weatherIcon.src = "images/rain.png"
        } else if (data.weather[0].main === "Snow") {
            weatherIcon.src = "images/snow.png"
        } else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "images/mist.png"
        } else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "images/drizzle.png"
        } else if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "images/clouds.png"
        } else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "images/clear.png"
        }
        document.querySelector("#error").style.display = "none"
        document.querySelector("#list").style.display = "block"

    }
    
}

searchInp.addEventListener("keypress",function (e){
    if(e.key === "Enter") {
        checkWeather(searchInp.value)

    }
})

searchBtn.addEventListener("click",function (){
    checkWeather(searchInp.value)
})
