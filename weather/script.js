/*async function FetchData(onclick) {
  try {
    const res = await fetch("https://openweathermap.org/");
    const data = await res.json();
    data.forEach((elements) => {
      const countryobject = {
        ...elements,
       weather: elements.weather
      };
      createCountryCard(countryobject);
    });
  } catch (error) {
    console.log(error);
  }
}*/


fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((element) => {
      const countryObject = {
        ...element,
        name: element.name.common,
        flags: element.flags.png,
        population: element.population,
        region: element.region,
        capital: element.capital,
        countryCode: element.cca3 ? element.cca3 : "no countrycode",
      };
      createCountryCard(countryObject);
    });
  })
  .catch((err) => console.log("error : ", err));



// fetch functionality
const weatherDiv = document.getElementById("weather-data")
async function getWeather(element){
// weather api
let response = await fetch("http://api.openweathermap.org/geo/1.0/zip?zip={zip code},{country code}&appid={a94ffc499d2af6ab159dd4fa9d796631}" ,{
  method: "GET",
});
  
    // fetch
    let data =  await response.json();
    weatherDiv.innerHTML = `${JSON.stringify(data)}`;
    forEach((element.name) =
      console.log(getWeather));
    // return
}



 

function createCountryCard(element) {
  document.body.innerHTML += `
          <div class="container">
          <img id="flag" src="${element.flags}" alt="${element.name}"/>
          <div class="info">
          <h2>${element.name}</h2>
          <p><span>Population : ${element.population}</span></p>
          <p><span>Region : ${element.region}</span></p>
          <p><span>Capital : ${element.capital}</span></p>
          <p><span>Country Code : ${element.countryCode}</span></p>
          <div id="weather-data"></div>
          <button onclick="${getWeather(element.name)}">get weather</button>
          </div>
          </div>
          `;
}