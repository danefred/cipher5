const apiUrl = "https://api.weatherapi.com/v1/forecast.json?key=617eb6c2335841d4a12124351231503&q=Manila&days=1&aqi=no&alerts=no";

async function getWeatherData() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
}

async function displayWeatherData() {
  const weatherData = await getWeatherData();
  const temperature = weatherData.current.temp_c;
  const condition = weatherData.current.condition.text;
  document.getElementById("temperature").innerHTML = `Temperature: ${temperature} °C`;
  document.getElementById("condition").innerHTML = `Condition: ${condition}`;
}

displayWeatherData();
