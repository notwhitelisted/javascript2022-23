'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//xml http request - old school AJAX

// const getcountryData = function(country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();
//     //console.log(request.responseText);

//     request.addEventListener('load', function() {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);

//         const html = `
//         <article class="country">
//         <img class="country__img" src="${data.flags.png}" />
//         <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population)}</p>
//             <p class="country__row"><span>🗣️</span>${data.languages}</p>
//             <p class="country__row"><span>💰</span>${data.currencies}</p>
//         </div>
//         </article>`;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//     })
// }

// getcountryData('portugal');
// getcountryData('usa');
// getcountryData('germany');




//////////////////callback hell. 
//function
const renderCountry = function(data, className = '') {
    const html = `
    <article class="country">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages}</p>
        <p class="country__row"><span>💰</span>${data.currencies}</p>
      </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};    


// //callback within callback
// const getCountryAndNeighbour = function(country) {

//     //ajax call country 1
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();

//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);  

//         //render country 1
//         renderCountry(data);

//         //get neighbor country 2
//         const [neighbor] = data.borders;

//         if (!neighbor) return;

//         //ajax call country 2
//         const request2 = new XMLHttpRequest();
//         request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbor}`);
//         request2.send();

//         request2.addEventListener('load', function() {
//             const [data2] = JSON.parse(this.responseText);
//             console.log(data2);

//             renderCountry(data2, 'neighbor');
//         })
//     });
// }

// getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('usa');

// //
// setTimeout(() => {
//     console.log('1 second passed');
//     setTimeout(() => {
//         console.log('2 second passed');
//         setTimeout(() => {
//             console.log('3 second passed');
//         }, 1000)
//     }, 1000);
// }, 1000);


///////////////////promises 
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

//fetch function - pass in url
// const request = fetch(`https://restcountries.com/v3.1/name/portugal`)
// console.log(request); //promise pending

/////////////////consuming promises
const getCountryData = function(country) {
    //country1
    fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(response) {
        //console.log(response);

      if (!response.ok) {
        throw new Error(`Country not found (${response.status})`);
      }

        return response.json();
    }).then(function(data) {
        //console.log(data);
        renderCountry(data[0]);

        //chaining promises
        const neighbour = data[0].borders[0]

        if (!neighbour) throw new Error('No neighbour found!');

        //country2
        return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
    }).then((response) => response.json())
    .then((data) => renderCountry(data, 'neighbour')).catch((err) => {
      console.error(`${err}`);
      renderError(`Something went wrong ${err.message}. Try again!`);
    }).finally(() => {
      countriesContainer.style.opacity = 1;
    })
};
// getCountryData('portugal');
// getCountryData('germany');

btn.addEventListener('click', function() {
  getCountryData('portugal');
})


/////////////////Coding Challenge #1
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`));
};
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);