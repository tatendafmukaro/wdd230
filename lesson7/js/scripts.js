
// const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// // console.log(event.toLocaleDateString(undefined, options));


let dayNames = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
let d = new Date();
let dayName = dayNames[d.getDay()];
let monthName = months[d.getMonth()];
let fullDate = dayName + ", " + d.getDate() + " " + monthName + " "  + d.getFullYear();
document.getElementById("cd").textContent = fullDate;

function toggleMenu(){
    document.getElementById("menu").classList.toggle("mainNav");
}

// friday banner querry
//const fridayBanner = document.querySelector('#friday-banner')

// wind chill calculator
let temp = document.querySelector(".temperature").textContent;
let ws = document.querySelector(".windspeed").textContent;
let windchill_value = '34';

if ((temp <= 50) && (ws > 3)) {
    windchill_value = Math.round(35.74 + (0.6215 * temp ) - (35.75 * Math.pow(ws, 0.16)) + ((0.4275 * temp) * Math.pow(ws, 0.16)));
} 

document.querySelector(".windchill").textContent = windchill_value;

















