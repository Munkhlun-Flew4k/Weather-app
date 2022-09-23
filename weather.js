let unixNow = Math.floor(Date.now() / 1000);
const input = document.querySelector("#input");
input.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    getWeather(input.value);
  }
});
async function getWeather(city) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=85ee9c1d5cb2b98810f203862c878979`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      displayData(
        data.name,
        data.main.temp,
        data.weather[0].main,
        data.sys.sunrise,
        data.sys.sunset
      );
    });
}

function displayData(cityName, tempK, status, sunrise, sunset) {
  document.getElementById("city").innerHTML = cityName;
  const tempC = tempK - 273;
  document.getElementById("temperature").innerHTML = Math.floor(tempC) + "°";
  document.getElementById("status").innerHTML = status;
  if (unixNow >= sunrise && unixNow <= sunset) {
    document.getElementById("middle").style.background = "rgb(230 230 230)";
    document.getElementById("pic").src = status + ".png";
    document.getElementById("city").style.color = "black";
  } else {
    document.getElementById("middle").style.background = "#111827";
    document.getElementById("pic").src = status + "n.png";
    document.getElementById("city").style.color = "white";
  }
}