
//Get the days of the week
const daysShort = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)).innerHTML = daysShort[CheckDay(i)];
    }


//Get the temperatures, icons and description for the next 5 days

var forecastAPI = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&exclude=minutely,hourly,alerts&units=imperial&appid=761705f2fff2232362c92545f641006c';

fetch(forecastAPI)
  .then((response) => response.json())
  .then((jsObject) => {
      const time = jsObject.list.filter(t => t.dt_txt.includes('18:00:00'));
      console.log(time);
      
      for (i = 0; i < time.length; i++) {
          const desc = time[i].weather[0].description;
          document.getElementById("day" + (i+1) + "Temp").textContent = time[i].main.temp.toFixed(0); // temperature
          document.getElementById("img" + (i+1)).src = "https://openweathermap.org/img/wn/" + time[i].weather[0].icon + '@2x.png'; // icons
          document.getElementById("img" + (i+1)).setAttribute('alt', desc); // description
    }

});




// let temp = parseFloat(document.querySelector('#current').textContent);
// let speed = parseFloat(document.querySelector('#speed').textContent);

// let windchill;
// if (temp <= 50 && speed > 3) {
//     f = 35.74 + (0.6215 * temp) - (35.75 * (speed ** 0.16))+ (0.4275 * temp * (speed ** 0.16));
//     windchill = `${f.toFixed(0)} \u00B0F`;
// }
// else {
//     windchill = 'N/A';
// }

// document.querySelector('#wind').textContent = windchill;

var apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=761705f2fff2232362c92545f641006c';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    
    document.getElementById('current').textContent = jsObject.main.temp.toFixed(1);
    document.getElementById('description').textContent = jsObject.weather[0].description;
    document.getElementById('description').style.textTransform = "capitalize";
    document.getElementById('high').textContent = jsObject.main.temp_max.toFixed(1);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('speed').textContent = jsObject.wind.speed;
  });

  