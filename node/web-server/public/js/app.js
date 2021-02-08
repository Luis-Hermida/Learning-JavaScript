// DOM
const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const statusText = document.querySelector("#status-text");
const weatherText = document.querySelector("#weather-text");
const errorText = document.querySelector("#error-text");

// Initial State
weatherText.style.display = "none";
errorText.style.display = "none";

// Event Listener - Form Submit
weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();
  statusText.textContent = "Loading...";
  weatherText.textContent = null;
  weatherText.style.display = "none";
  errorText.textContent = null;
  errorText.style.display = "none";
  getWeather(search.value);
});

// Fetch Weather function
const getWeather = (location) => {
  fetch(`http://localhost:3000/weather?address=${location}`).then(
    (response) => {
      response.json().then((data) => {
        statusText.textContent = "";
        if (data.error) {
          errorText.style.display = "block";
          errorText.textContent = data.error;
        } else {
          weatherText.style.display = "block";
          weatherText.textContent = `Weather in ${data.location} is ${data.description} 
          with a temprature of ${data.temperature} C° that feels like ${data.feelslike} C°`;
        }
      });
    }
  );
};
