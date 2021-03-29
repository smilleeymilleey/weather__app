let weatherDateEl = document.getElementsByClassName("card-title");
let temperatureEl = document.getElementById("temp");
let humidityEl = document.getElementById("humidity");
let selectedCityEl = document.getElementsByClassName("card-body");
let selectedCityTempEl = document.getElementById("temperature__Placeholder");
let selectedCityWindEl = document.getElementById("wind__Placeholder");
let selectedCityUvEl = document.getElementById("UV__Placeholder");
let cityButtons = document.getElementsByClassName("city");
let selectedCityNameEl = document.getElementById("city__Placeholder");



const apiKey = "a2f6fce88cfc4a69918f36922a1be74b";





async function getWeatherData(city){
  const url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=' + apiKey;
  
  fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let lat = data.city.coord.lat
    let lon = data.city.coord.lon
    
    console.log('weather!!');
    console.log(data);
    
    getWeeklyForecast(lat,lon);
  });
}
// api to get weekly forecast is located below

async function getWeeklyForecast(lat, lon){
  const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=' + apiKey;
  
  fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    
    console.log('weekly forecast');
    console.log(data);
    accessWeatherData(data);
    });
}
// click event for search bar 
  let form = document.getElementById("form");
  form.addEventListener("submit", getSearchBarValue)
  console.log(form)
  
// get value from user input
  
function getSearchBarValue(event) {
  event.preventDefault();
  let searchCityItem = document.getElementById("search").value;
  let cityText = document.createTextNode(searchCityItem);
  let searchCityDiv = document.createElement('div');
  let searchCityHeader = document.createElement("h1");
  let cityContainer = document.getElementById("cityBox");

  searchCityDiv.id = searchCityItem;
  searchCityHeader.id = "headerId"
  
  cityContainer.appendChild(searchCityDiv);
  searchCityDiv.appendChild(searchCityHeader)
  searchCityHeader.appendChild(cityText)

  getWeatherData(searchCityItem);
}

// use api to get specific data and display to html

function accessWeatherData(data) {
  // getting name data and displaying 
// //  let nameValue = data.city.name 
//  let nameText = document.createTextNode(nameValue)
//  let addHeaderToDiv = selectedCityEl[0].appendChild(selectedCityNameEl)
  
//  addHeaderToDiv.appendChild(nameText);

  // getting Temperature data ~for the day~ and displaying 
 let tempValue = data.current.temp 
 let tempText = document.createTextNode(tempValue)
 let addTempToDiv = selectedCityEl[0].appendChild(selectedCityTempEl)

  addTempToDiv.appendChild(tempText)

  // getting wind speed ~for the day~ and displaying 

 let windValue = data.current.wind_speed
 let windText = document.createTextNode(windValue)
 let addWindToDiv = selectedCityEl[0].appendChild(selectedCityWindEl)
  
  addWindToDiv.appendChild(windText)

  //getting UV Index ~for that day~ and displaying 
    let uv = data.current.uvi;
    let uvText = document.createTextNode(uv)
    selectedCityUvEl.appendChild(uvText);
  // looping through the api for list 

  for (let i = 0; i < 5; i++) {
    let forecastTempValue = data.daily[i].temp.day;
    let unixTimeStamp = data.daily[i].dt;
    let date = new Date(unixTimeStamp * 1000);
    let humidity = data.daily[i].humidity;

    let cardDate = document.getElementsByClassName("card-title")[i];
    let cardTemp = document.getElementsByClassName("card-temp")[i];
    let cardHumidity = document.getElementsByClassName("card-text")[i];

    cardDate.textContent = date;
    cardTemp.textContent = "Temp(F): " + forecastTempValue;
    cardHumidity.textContent = "Humidity: " + humidity;





    console.log(cardHumidity);

  
  }
 
}















       









 