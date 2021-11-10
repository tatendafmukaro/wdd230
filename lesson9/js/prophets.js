const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++ ) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let para1 = document.createElement('p'); // Updates
      let para2 = document.createElement('p'); // Updates
      let image = document.createElement('img') // Updates

      h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
      para1.textContent = "Date of Birth:" + ' ' + prophets[i].birthdate; // Updates
      para2.textContent = "Place of Birth:" + ' ' + prophets[i].birthplace; // Updates
      image.setAttribute('src', prophets[i].imageurl);
      image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' ' + "-" + ' ' + prophets[i].order); // Updates
        

      card.appendChild(h2);
      card.appendChild(para1);
      card.appendChild(para2);
      card.appendChild(image);

      document.querySelector('div.cards').appendChild(card);
  }
  
});