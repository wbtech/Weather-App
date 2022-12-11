let weather = {
  apiKey: "108318f98d78c2e6d314cf7a3a79aae4",
  fetchWeather: function (city) {
    fetch(
      "https//api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },

  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity, current } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = `Weather in ${name}`;
    document.querySelector(".icon").src =
      "https//openweathermap.org/img/wn" + icon + "png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + ".C";
    document.querySelector(".current").innerText = " " + current + ".C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind Speed " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?)" + name + " ')";
  },

  //searching for weather
  search: function () {
    this.fetchWeather(document.querySelector(".searchBar").value);
  },
};

document
  .querySelector(".searchBar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

//default weather

weather.fetchWeather("Nairobi");

// fetch("https://ig-food-menus.herokuapp.com/burgers")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// let API =
//   "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relativehumidity_2m,windspeed_10m";

// let apiKeys = {
//   latitude: 52.52,
//   longitude: 13.419998,
//   elevation: 44.8125,
//   //   "hourly": {
//   //     "time":["2022-07-01T00:00","2022-07-01T01:00", ...],
//   //     "windspeed_10m":[3.16,3.02,3.3,3.14,3.2,2.95, ...],
//   //     "temperature_2m":[13.7,13.3,12.8,12.3,11.8, ...],
//   //     "relativehumidity_2m":[82,83,86,85,88,88,84,76, ...],
//   //   }
// };
// console.log(API);
// var profileDeep = { account: { number: 47574416 } };
