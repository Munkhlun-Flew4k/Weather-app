let unixNow = Math.floor(Date.now() / 1000);
const input = document.querySelector("#input");
input.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    if (document.getElementById("input").value == "esugen") {
      document.getElementById("city").innerHTML = "I like Esugen";
      document.getElementById("input").style.borderColor = "black";
      document.getElementById("status").innerHTML = "❤️❤️❤️";
      document.getElementById("date").innerHTML = "You are so beautiful esugen<3";
      document.getElementById("middle").style.background = "rgb(237 237 237)";
      document.getElementById("pic").src = "png/" + "heart" + ".png";
      document.getElementById("city").style.color = "black";
      document.getElementById("temperature").innerHTML = "❤️"
    } else {
      if (document.getElementById("input").value == "flew") {
        document.getElementById("city").innerHTML = "I am Flew4k";
        document.getElementById("temperature").innerHTML = "213";
        document.getElementById("input").style.borderColor = "black";
        document.getElementById("status").innerHTML = "Flew4k";
        document.getElementById("date").innerHTML = "4k means 4 times better than the normal Flew(Dulguun bagsh)";
        document.getElementById("middle").style.background = "rgb(237 237 237)";
        document.getElementById("pic").src = "png/" + "heart" + ".png";
        document.getElementById("city").style.color = "black";
      } else {
        getWeather(input.value);
      }
    }
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
  document.getElementById("input").style.borderColor = "black";
  document.getElementById("status").innerHTML = status;
  let today = new Date().toISOString().slice(0, 10);
  document.getElementById("date").innerHTML = today;
  if (unixNow >= sunrise && unixNow <= sunset) {
    document.getElementById("middle").style.background = "rgb(237 237 237)";
    document.getElementById("pic").src = "png/" + status + ".png";
    document.getElementById("city").style.color = "black";
  } else {
    document.getElementById("middle").style.background = "#111827";
    document.getElementById("pic").src = "png/" + status + "n.png";
    document.getElementById("city").style.color = "white";
  }
}

