const apiKey = "3945d5ffeed3814f174dc627b1d3bdcc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?appid=3945d5ffeed3814f174dc627b1d3bdcc&q=";
const weatherIcon = document.querySelector(".weather-icon");


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");


async function checkWeather(city){


    const response = await fetch(apiUrl + city + "&units=metric");

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c" ; 
        document.querySelector(".wind").innerHTML = data.wind.speed + "%";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " km/h";
        
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png"
        } 
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png"
        } 
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png"
        } 
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png"
        } 

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})