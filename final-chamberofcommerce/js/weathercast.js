
// //Get the days of the week
// const daysShort = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

// function CheckDay(day){
//     if(day + d.getDay() > 6){
//         return day + d.getDay() - 7;
//     }
//     else{
//         return day + d.getDay();
//     }
// }

//     for(i = 0; i<5; i++){
//         document.getElementById("day" + (i+1)).innerHTML = daysShort[CheckDay(i)];
//     }


// //Get the temperatures, icons and description for the next 5 days

// var forecastAPI = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&exclude=minutely,hourly,alerts&units=imperial&appid=761705f2fff2232362c92545f641006c';

// fetch(forecastAPI)
//   .then((response) => response.json())
//   .then((jsObject) => {
//       const time = jsObject.list.filter(t => t.dt_txt.includes('18:00:00'));
//       console.log(time);
      
//       for (i = 0; i < time.length; i++) {
//           const desc = time[i].weather[0].description;
//           document.getElementById("day" + (i+1) + "Temp").textContent = time[i].main.temp.toFixed(0); // temperature
//           document.getElementById("img" + (i+1)).src = "https://openweathermap.org/img/wn/" + time[i].weather[0].icon + '@2x.png'; // icons
//           document.getElementById("img" + (i+1)).setAttribute('alt', desc); // description
//     }

// });
const weatherCall =
  "https://api.openweathermap.org/data/2.5/onecall?lat=-17.8251657&lon=31.03351&exclude=minutely,hourly&appid=761705f2fff2232362c92545f641006c&units=imperial";

fetch(weatherCall)
  .then((response) => response.json())
  .then((jsObject) => {

    let alert = jsObject;

    if ("alerts" in jsObject) {
      document.getElementById("alert").style.display = "block";

      function postAlerts(alerts) {
        let i = 0;
        alerts.forEach((alert) => {
          let div = document.getElementById("alert");

          let btn = document.createElement('button');
          btn.setAttribute('id', 'close');
          btn.setAttribute('onclick', "document.getElementById('alert').style.display='none'");
          btn.innerHTML = '\u00D7';

          let event = document.createElement("p");
          event.innerHTML = `${alert.event}`;

          let desc = document.createElement("p");
          desc.innerHTML = `${alert.description}`;

          div.appendChild(btn);
          div.appendChild(event);
          div.appendChild(desc);
        });
      }

      const alerts = jsObject["alerts"];
      postAlerts(alerts);

    
    }

    document.getElementById("currentTemp").textContent = Math.round(
      jsObject.current.temp
    );
    const imagesrc =
      "https://openweathermap.org/img/w/" +
      jsObject.current.weather[0].icon +
      ".png";
    const desc = jsObject.current.weather[0].description;

    let currcond = document.getElementById('currentcond');

    let img = document.createElement('img');
    img.setAttribute('src', imagesrc);
    img.setAttribute('alt', desc);
    img.setAttribute('id', 'currentimg');

    let cond = document.createElement('span');
    cond.setAttribute('id', 'condition');
    cond.innerHTML = jsObject.current.weather[0].main;
    document.getElementById("humidity").textContent = jsObject.current.humidity;

    currcond.appendChild(img);
    currcond.appendChild(cond);

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    for (let i = 1; i < 4; i++) {
      let div = document.getElementById("day" + i);

      let day = document.createElement("p");
      day.innerHTML = days[i];

      let img = document.createElement("img");
      img.src =
        "https://openweathermap.org/img/w/" +
        jsObject.daily[i].weather[0].icon +
        ".png";
      img.alt = jsObject.daily[i].weather[0].description;

      let temp = document.createElement("p");
      temp.innerHTML = Math.round(jsObject.daily[i].temp.day) + "\u00B0F";

      let h4 = document.createElement("h4");
      h4.innerHTML = jsObject.daily[i].weather[0].main;

      div.appendChild(day);
      div.appendChild(temp);
      div.appendChild(img);
      div.appendChild(h4);
    }
  });