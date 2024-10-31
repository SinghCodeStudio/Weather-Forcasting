const apiKey = "44f056e111msheb577f781d2f80bp171d31jsn0351d62cbc0e";
const cityNameElement = document.getElementById("cityName");
const submitButton = document.getElementById("submit");
const cityInput = document.getElementById("city");

async function fetchWeatherData(city) {
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${encodeURIComponent(
    city
  )}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    cityNameElement.innerHTML = city;
    const response = await fetch(url, options);
    const result = await response.json();

    document.getElementById("wind_mph").innerHTML = result.current.wind_mph;
    document.getElementById("wind_kph").innerHTML = result.current.wind_kph;
    document.getElementById("wind_degree").innerHTML =
      result.current.wind_degree;
    document.getElementById("wind_dir").innerHTML = result.current.wind_dir;
    document.getElementById("pressure_mb").innerHTML =
      result.current.pressure_mb;
    document.getElementById("pressure_in").innerHTML =
      result.current.pressure_in;
    document.getElementById("precip_mm").innerHTML = result.current.precip_mm;
    document.getElementById("precip_in").innerHTML = result.current.precip_in;
    document.getElementById("humidity").innerHTML = result.current.humidity;
    document.getElementById("cloud").innerHTML = result.current.cloud;
    document.getElementById("feelslike_c").innerHTML =
      result.current.feelslike_c;
    document.getElementById("temp_c").innerHTML = result.current.temp_c;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (city) {
    fetchWeatherData(city);
  } else {
    alert("Please enter a city");
  }
});
const commonPlaces = [
  "Ahmedabad",
  "Mumbai",
  "Russia",
  "Florida",
  "Dubai",
  "Egypt",
];

async function fetchCommonPlacesWeather() {
  for (let place of commonPlaces) {
    try {
      const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${encodeURIComponent(
        place
      )}`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": apiKey,
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        },
      };

      const response = await fetch(url, options);
      const result = await response.json();
      document.querySelector(`#${place} .humidity`).innerHTML =
        result.current.humidity;
      document.querySelector(`#${place} .pressure`).innerHTML =
        result.current.pressure_mb;
      document.querySelector(
        `#${place} .temp`
      ).innerHTML = `${result.current.temp_c}°C`;
    } catch (error) {
      console.error(`Error fetching weather data for ${place}:`, error);
    }
  }
}

fetchCommonPlacesWeather();
