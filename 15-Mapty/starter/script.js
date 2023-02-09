'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

//class - architecture
class App {
    #map;
    #mapZoomLevel = 15;
    #mapEvent;
    #workouts = [];

    constructor() {
        //get user position
        this._getPosition();

        //get data from local storage
        this._getLocalStorage();

        //event handlers
        form.addEventListener('submit', this._newWorkout.bind(this));
        inputType.addEventListener('change', this._toggleElevationField);
        containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
    }

    _getPosition() {
    //geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function() {
            alert('Could not get your position');
        })
    }
    }

    _loadMap(position) {
        const {latitude} = position.coords;
        const {longitude} = position.coords;
        console.log(`http://www.google.pt/maps/@${latitude}, ${longitude}`);

        const coords = [latitude, longitude]
        this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);

        //handling clicks on map
        this.#map.on('click', this._showForm.bind(this));     

        this.#workouts.forEach(work => {
            this._renderWorkout(work);
            this._renderWorkoutMarker(work);
        })
    }

    _showForm(mapE) {
        this.#mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
    }

    _hideForm() {
        //Empty inputs
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
        form.style.display = 'none';
        form.classList.remove('hidden');
        setTimeout(() => (form.style.display = 'grid'), 1000);
    }

    _toggleElevationField() {
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
    }

    _newWorkout(e) {
        const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp));
        const allPositiveNums = (...inputs) => inputs.every(inp => inp > 0);

        e.preventDefault();
        
        /////////////////get data from form
        const type = inputType.value;
        const distance = +inputDistance.value;
        const duration = +inputDuration.value;
        const {lat, lng} = this.#mapEvent.latlng
        let workout; 


        /////////////////if activity is running, create running object
        if (type === 'running') {
            const cadence = +inputCadence.value;
            //check if data is valid
            if (!validInputs(distance, duration, cadence) || (!allPositiveNums(distance, duration, cadence))) {
                return alert('Inputs have to be positive numbers.')
            }

            workout = new Running([lat, lng], distance, duration, cadence)

        }

        /////////////////if activity is cycling, create cycling object
        if (type === 'cycling') {   
            const elevation = +inputElevation.value;
            //check if data is valid     
            if (!validInputs(distance, duration, elevation) || (!allPositiveNums(distance, duration))) {
                return alert('Inputs have to be positive numbers.')
            }

            workout = new Cycling([lat, lng], distance, duration, elevation)
        }

        /////////////////add new object to workout array
        this.#workouts.push(workout);

        /////////////////render workouts on map as marker
        this._renderWorkoutMarker(workout);

        /////////////////render workout on list 
        this._renderWorkout(workout);

        /////////////////hide form + clear in put fields
        this._hideForm();

        ////////////////set local storage to all workouts
        this._setLocalStorage();
    }

    _renderWorkoutMarker(workout) {
        //displaying marker
    
        L.marker(workout.coords).addTo(this.#map).bindPopup(L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: `${workout.type}-popup`,
        })
        )
        .setPopupContent(`${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`)
        .openPopup();        
    }

    _renderWorkout(workout) {
        var html = `
        <li class="workout workout--${workout.type}" data-id="${workout.id}">
            <h2 class="workout__title">${workout.description}</h2>
            <div class="workout__details">
                <span class="workout__icon">${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'}</span>
                <span class="workout__value">${workout.distance}</span>
                <span class="workout__unit">km</span>
            </div>
            <div class="workout__details">
                <span class="workout__icon">⏱</span>
                <span class="workout__value">${workout.duration}</span>
                <span class="workout__unit">min</span>
            </div>
        `;

        if (workout.type === 'running') 
            html += `
            <div class="workout__details">
                <span class="workout__icon">⚡️</span>
                <span class="workout__value">${workout.pace.toFixed(1)}</span>
                <span class="workout__unit">min/km</span>
            </div>
            <div class="workout__details">
                <span class="workout__icon">🦶🏼</span>
                <span class="workout__value">${workout.cadence}</span>
                <span class="workout__unit">spm</span>
            </div>
        </li>
        `;

        if (workout.type === 'cycling') 
            html += `
            <div class="workout__details">
                <span class="workout__icon">⚡️</span>
                <span class="workout__value">${workout.speed.toFixed(1)}</span>
                <span class="workout__unit">km/h</span>
            </div>
            <div class="workout__details">
                <span class="workout__icon">⛰</span>
                <span class="workout__value">${workout.elevationGain}</span>
                <span class="workout__unit">m</span>
            </div>
        </li>
        `;

        form.insertAdjacentHTML('afterend', html);
    }

    _moveToPopup(e) {
        const workoutEl = e.target.closest('.workout');
        console.log(workoutEl);

        if (!workoutEl) return;

        const workout = this.#workouts.find(work => work.id === workoutEl.dataset.id);

        this.#map.setView(workout.coords, this.#mapZoomLevel, {
            animate: true,
            pan: {
                duration: 1,
            },
        });

        //using public interface
        // workout.click();
    }

    //local storage API
    _setLocalStorage() {
        localStorage.setItem('workouts', JSON.stringify(this.#workouts));
    }

    _getLocalStorage() {
        const data = JSON.parse(localStorage.getItem('workouts'));
        console.log(data);

        if (!data) return;

        this.#workouts = data;

        this.#workouts.forEach(work => {
            this._renderWorkout(work);
        })
    }

    reset() {
        localStorage.removeItem('workouts');
        location.reload();
    }
}


//parent
class Workout {
    date = new Date();
    id = (Date.now() + '').slice(-10);
    clicks = 0;

    constructor(coords, distance, duration) {
        this.coords = coords;
        this.distance = distance; //in km
        this.duration = duration; //in min

    }

    _setDescription() {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

        this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`
    }

    click() {
        this.clicks++;
    }
}

//child1
class Running extends Workout {
    type = 'running';

    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration);
        this.cadence = cadence;
        this.calcPace();
        this._setDescription();
    }

    calcPace() {
        // mins/km
        this.pace = this.duration / this.distance;
        return this.pace 
    }
}

//child2
class Cycling extends Workout {
    type = 'cycling';

    constructor(coords, distance, duration, elevationGain) {
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        this.calcSpeed();
        this._setDescription();
    }

    calcSpeed() {
        // km/h
        this.speed = this.distance / (this.duration / 60);
        return this.speed
    }
}

const app = new App();


