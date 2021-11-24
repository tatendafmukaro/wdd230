
// const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// // console.log(event.toLocaleDateString(undefined, options));


let dayNames = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
let d =new Date();
let dayName = dayNames[d.getDay()];
let monthName = months[d.getMonth()];
let fullDate = dayName + ", " + d.getDate() + " " + monthName + " "  + d.getFullYear();
document.getElementById("cd").textContent = fullDate;

function toggleMenu(){
    document.getElementById("menu").classList.toggle("mainNav");
}


    const list = document.querySelector('ul');
      const input = document.querySelector('input');
      const button = document.querySelector('button');

      button.onclick = function() {
        let myItem = input.value;
        input.value = '';

        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(listBtn);
        listBtn.textContent = 'Delete';
        list.appendChild(listItem);

        listBtn.onclick = function(e) {
          list.removeChild(listItem);
        }

        input.focus();
      }
