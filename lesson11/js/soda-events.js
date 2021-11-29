const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })

    .then(function(jsonObject) {
        console.table(jsonObject); // temporary checking valid response and data parsing

        // store the data received into an variable
        const towns = jsonObject['towns'];
        console.log(towns);

        for (let i = 0; i < towns.length; i++) {

            if (towns[i].name == "Soda Springs") {
                let townEvents = document.createElement("ul");

                towns[i].events.forEach(event => {
                    let townEvent = document.createElement("li");
                    townEvent.textContent = event;

                    townEvents.appendChild(townEvent);
                });

                document.querySelector("div.events").appendChild(townEvents);
            }
            
        }
    })