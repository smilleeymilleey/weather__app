let weatherDateEl = document.getElementsByClassName("card-title");
let temperatureEl = document.getElementById("temp");
let humidityEl = document.getElementById("humidity");
let selectedCityEl = document.getElementById("city__Placeholder");
let selectedCityTempEl = document.getElementById("temperature__Placeholder");
let selectedCityWindEl = document.getElementById("wind__Placeholder");
let selectedCityUvEl = document.getElementById("UV__Placeholder");
let cityButtons = document.getElementsByClassName("city");



const apiKey = "a2f6fce88cfc4a69918f36922a1be74b";
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Dallas&appid=a2f6fce88cfc4a69918f36922a1be74b'
   

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('weather!!');
    console.log(data);

  });

 
  let form = document.getElementById("form");
  form.addEventListener("submit", getSearchBarValue)
  console.log(form)
  
 
  
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
  


  console.log(searchCityItem)
}
















  
//   // grabbing city names from the side bar 
//   console.log(cityButtons)
//   for (let i = 0; i < cityButtons.length; i++) {
//     let allCityButtons = cityButtons[i];
//      allCityButtons.addEventListener("click", function(event){
//      getCity(event) 
//   })

//   }; 
  
//   function getCity(event) {
//     let city = event.target.getAttribute("data-city");
// }
  
   
       









 