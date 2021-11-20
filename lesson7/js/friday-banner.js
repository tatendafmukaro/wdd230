// const pancakeAnnouncement = document.querySelector('.friday-banner');

// const dayOfWeek= todaysDate.getDay();

// if ( dayOfWeek == 3 ) {
//   pancakeAnnouncement.style.display = "block";
// }

// pancakeAnnouncement.onclick = function(e) {
//   pancakeAnnouncement.style.display = "none";
// }

let day = new Date().getDay();

function setDiv() {
    if (day == 5) {
        document.getElementById("friday-banner").style.display = "block";
 }
}