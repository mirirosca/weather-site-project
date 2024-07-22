const searchBox = document.querySelector("#city-Data-List");
const submitBtn = document.querySelector(".button");

$(".form-control").keypress(function(event){ 
  if(event.keyCode == 13){ 
    submitBtn.click(); 
    return false;
  }
});


async function checkWeather(city) {
  const apiUrl = `/weather?city=${city}`;
  try {
    const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      console.log(data);

      $("h3").html(data.name);
      $("#gradi").html(`${Math.floor(data.main.temp)}&#176C`);
      $("#temp-max").html(`Temp Max: ${Math.floor(data.main.temp_max)}&#176C`);
      $("#temp-min").html(`Temp Min: ${Math.floor(data.main.temp_min)}&#176C`);
      $("#humidity").html(`Humidity: ${data.main.humidity}%`);
      $("#wind").html(`Wind: ${data.wind.speed}km/h`);
      $("#description").html(`${data.weather[0].description} ${displayEmoji(data.weather[0].id)}`);

    } catch (error) {
      console.error(error.message);
      $("h3").html("city not found");
      $("#gradi").html("");
      $("#temp-max").html("Temp Max:");
      $("#temp-min").html("Temp Min:");
      $("#humidity").html("Humidity:");
      $("#wind").html("Wind");
      $("#description").html("");
    }
}


submitBtn.addEventListener("click", function(event){

  event.preventDefault();

  if ($("#city-Data-List").val().trim() === ""){
    $(".form-control")
    .attr("placeholder", "Please enter a city...")
    .css("border", "3px solid red",);

  }else{
    displaySearchStyle();
    checkWeather(searchBox.value);
  };
});

function displayEmoji(weatherId){
  switch(true){
    case(weatherId >= 200 && weatherId < 300):
      return "⛈️";
    case(weatherId >= 300 && weatherId < 400):
      return "🌧️";
    case(weatherId >= 500 && weatherId < 600):
      return "🌧️";
    case(weatherId >= 600 && weatherId < 700):
      return "❄️";
    case(weatherId >= 700 && weatherId < 800):
      return "🌬️";
    case(weatherId == 800):
      return "☀️";
    case(weatherId >= 801 && weatherId < 810):
      return "☁️";
    default:
      return "";
  }
}

function displaySearchStyle() {
  $(".question-form").css("height", "300px");
  $(".form-control").css("border", "none");

  setInterval(() => {
    $("header").animate({backgroundColor: "rgb(24, 50, 67, 0)"}, "slow");
    $("header p").css("color", "rgb(24, 50, 67)");
    $("h1").attr("id", "smaller-h1");
  },500)
};


