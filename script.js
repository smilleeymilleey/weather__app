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
      accessWeatherData(data);
      console.log('weather!!');
      console.log(data);
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
 let nameValue = data.city.name 
 let nameText = document.createTextNode(nameValue)
 let addHeaderToDiv = selectedCityEl[0].appendChild(selectedCityNameEl);
  addHeaderToDiv.appendChild(nameText);

  // getting Temperature data ~for the day~ and displaying 
 let tempValue = data.list[0].main.temp 
 let tempText = document.createTextNode(tempValue)
 let addTempToDiv = selectedCityEl[0].appendChild(selectedCityTempEl)

 addTempToDiv.appendChild(tempText)
 
}















       









 