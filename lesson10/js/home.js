const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
     // console.table(jsonObject);
      const towns = jsonObject['towns'];

      const threeTowns = towns.filter((towns) => towns.name === 'Soda Springs' || towns.name === 'Fish Haven' || towns.name === 'Preston');
      
      threeTowns.sort(function(a, b) {
        return parseFloat(b.currentPopulation) - parseFloat(a.currentPopulation);
    });


      threeTowns.forEach((xtown) => {

        let townCard = document.createElement('section');
        let div = document.createElement('div');
        let image = document.createElement('img');
        let name = document.createElement('h3');
        let motto = document.createElement('h4');
        let year = document.createElement('p');
        let pop = document.createElement('p');
        let rain = document.createElement('p');



        // image.setAttribute('src', `lesson9/images/towns/${xtown.photo}`);
        image.setAttribute('src', `images/${xtown.photo}`);
        image.setAttribute('alt', `nature photo in ${xtown.name}`);
        div.className = 'town-info';
        name.textContent = `${xtown.name}`;
        motto.textContent = `${xtown.motto}`;
        year.textContent = `Year Founded: ${xtown.yearFounded}`;
        pop.textContent = `Population: ${xtown.currentPopulation}`;
        rain.textContent = `Annual Rain Fall ${xtown.averageRainfall}`;

        townCard.appendChild(image);
        townCard.appendChild(div);
    
    
        div.appendChild(name);
        div.appendChild(motto);
        div.appendChild(year);
        div.appendChild(pop);
        div.appendChild(rain);
        
        document.querySelector('div.town-data').appendChild(townCard);
        
      });
  });