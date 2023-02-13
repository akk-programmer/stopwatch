let seconds = 0;
let minutes = 0;
let hours = 0;

let timerStarted = false;

setInterval(() => {
    if (timerStarted) {
        updateSeconds();
    }
}, 1000);

document.querySelector('#start').addEventListener('click', () => {
    const button = document.querySelector('#start');
    if (button.innerHTML === 'Start') {
        timerStarted = true;
        button.innerHTML = 'End';
        button.classList = 'red';
    } else if (button.innerHTML === 'End') {
        timerStarted = false;
        button.innerHTML = 'Reset';
        button.classList = 'green';
    } else {
        button.innerHTML = 'Start';
        button.classList = 'grey';
        seconds = 0;
        document.querySelector('#seconds').innerHTML = '00';
        minutes = 0;
        document.querySelector('#minutes').innerHTML = '00';
        hours = 0;
        document.querySelector('#hours').innerHTML = '00';
    }
})

document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        if (item.innerHTML === 'Light') {
            document.querySelector('body').style.backgroundColor = 'white';
            document.querySelector('.container').style.color = 'black';
            document.querySelector('nav').style.color = 'black';
        } else if (item.innerHTML === 'Dark') {
            document.querySelector('body').style.backgroundColor = 'grey';
            document.querySelector('.container').style.color = 'white';
            document.querySelector('nav').style.color = 'white';
        } else {
            document.querySelector('body').style.backgroundColor = 'black';
            document.querySelector('.container').style.color = 'aqua';
            document.querySelector('nav').style.color = 'aqua';
        }
    })
});

function updateSeconds() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        document.querySelector('#seconds').innerHTML = `0${seconds}`;
        updateMinutes();
    } else {
        if (String(seconds).length === 1) {
            document.querySelector('#seconds').innerHTML = `0${seconds}`
        } else {
            document.querySelector('#seconds').innerHTML = seconds;
        }
    }
}

function updateMinutes() {
    minutes++;
    if (minutes === 60) {
        minutes = 0;
        document.querySelector('#minutes').innerHTML = `0${minutes}`;
        updateHours();
    } else {
        if (String(minutes).length === 1) {
            document.querySelector('#minutes').innerHTML = `0${minutes}`;
        } else {
            document.querySelector('#minutes').innerHTML = minutes;
        }
    }
}

function updateHours() {
    hours++;
    if (String(hours).length === 1) {
        document.querySelector('#hours').innerHTML = `0${hours}`
    } else {
        document.querySelector('#hours').innerHTML = hours;
    }
}