async function getWeather() {
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=617eb6c2335841d4a12124351231503&q=Manila');
    const data = await response.json();
    const temperature = data.current.temp_c;
    const humidity = data.current.humidity;
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `Temperature: ${temperature}°C | Humidity: ${humidity}%`;
  }
  
  getWeather(); // call the function to load the weather info on page load
  
  // update the weather info every 30 minutes
  setInterval(getWeather, 30 * 60 * 1000);
  