let now = new Date();
let date = document.querySelector("#date");

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];

let hours = now.getHours();
let minutes = now.getMinutes();

if (hours < 10) {
    date.innerHTML = `${day} 0${hours}:${minutes}`;
  } else if (minutes < 10) {
    date.innerHTML = `${day} ${hours}:0${minutes}`;
  } else if (hours < 10 && minutes < 10) {
    date.innerHTML = `${day} 0${hours}:0${minutes}`;
  } else {
    date.innerHTML = `${day} ${hours}:${minutes}`;
  }

function searchCity(event) {
   event.preventDefault();
   let input = document.querySelector("#search-city");
   let city = document.querySelector("#change-city");
   city.innerHTML = `${input.value}`;
   let apiKey = "d0e8d1110078fa650d02bce7e788ef46";
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`;
       
   function showTemperature(response){
    let currentTemperature = document.querySelector("#temperature");
    currentTemperature.innerHTML = Math.round(response.data.main.temp);
  }

   axios.get(`${apiUrl}`).then(showTemperature);
}

let form = document.querySelector("#city");
form.addEventListener("submit", searchCity);


function showPosition (position){
  
  let apiKey = "d0e8d1110078fa650d02bce7e788ef46";
  let lat = position.coords.latitude;
  let long =  position.coords.longitude;
  let geoUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
  
  function getCurrentTemparature (response) {
    
    let city = document.querySelector("#change-city");
    city.innerHTML = response.data.name;
    let temp = document.querySelector("#temperature");
    temp.innerHTML = Math.round(response.data.main.temp);
  }
  
  axios.get(geoUrl).then(getCurrentTemparature);

  }
  
 


function getCurrentPosition(event){
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("#current-geolocation");
button.addEventListener("click", getCurrentPosition);















/*function convertToFahrenheit(event) {
    event.preventDefault();
    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = 66;
}

let fahrenheitTemperature = document.querySelector(".fahrenheit");
fahrenheitTemperature.addEventListener("click", convertToFahrenheit);

function convertToCelsius(event) {
    event.preventDefault();
    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = 12;
}

let celsiusTemperature = document.querySelector(".celsium");
celsiusTemperature.addEventListener("click", convertToCelsius);*/