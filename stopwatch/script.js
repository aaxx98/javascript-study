var tens = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var appendMinutes = document.getElementById("minutes");
var appendHours = document.getElementById("hours");
var buttonStart = document.getElementById("button-start");
var buttonLap = document.getElementById("button-lap");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");
var buttonAlarm = document.getElementById("button-alarm");
var lapList = document.getElementById('laps');
var lapCounter = 1;
var Interval;

getLaps();

buttonAlarm.onclick = function () {
    var audio = new Audio("Small Bell Jingle.mp3");
    audio.play();
}

buttonStart.onclick = function () { //시작 버튼 클릭시
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10); //1000: 1초
}

buttonStop.onclick = function () {
    clearInterval(Interval);
    storeLaps();
}

buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    appendTens.innerHTML = "00";
    appendSeconds.innerHTML = "00";
    appendMinutes.innerHTML = "00";
    appendHours.innerHTML = "00";
    lapList.innerHTML = "";
    lapCounter = 1;
    storeLaps();
}

buttonLap.onclick = function () {
    lapList.innerHTML += createList(lapCounter++, appendHours.innerHTML, appendMinutes.innerHTML, appendSeconds.innerHTML, appendTens.innerHTML);
    storeLaps();
}

function createList(cnt, hour, min, sec, ten) {
    return `<li>${cnt}. <span class="lap-hours">${hour}</span>:<span class="lap-minutes">${min}</span>:<span class="lap-secons">${sec}</span>:<span class="lap-tens">${ten}</span></li>`;
}

function startTimer() {
    tens++;
    if (tens <= 9) {
        appendTens.innerHTML = '0' + tens;
    }
    else if (tens <= 99) {
        appendTens.innerHTML = tens;
    }
    else {
        tens = 0;
        appendTens.innerHTML = "00";
        addSeconds();
    }
}

function addSeconds() {
    seconds++;
    if (seconds <= 9) {
        appendSeconds.innerHTML = "0" + seconds;
    }
    else if (seconds < 60) {
        appendSeconds.innerHTML = seconds;
    }
    else {
        seconds = 0;
        appendSeconds.innerHTML = "00";
        addMinutes();
    }
}

function addMinutes() {
    minutes++;
    if (minutes <= 9) {
        appendMinutes.innerHTML = "0" + minutes;
    }
    else if (minutes < 60) {
        appendMinutes.innerHTML = minutes;
    }
    else {
        minutes = 0;
        appendMinutes.innerHTML = "00";
        addHours();
    }
}

function addHours() {
    hours++;
    if (hours <= 9) {
        appendHours.innerHTML = "0" + hours;
    }
    else {
        appendHours.innerHTML = hours;
    }
}

function storeLaps() {
    window.localStorage.myLaps = lapList.innerHTML;
    window.localStorage.time = JSON.stringify({
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        tens: tens,
        counter: lapCounter,
        innerhours: appendHours.innerHTML,
        innerminutes: appendMinutes.innerHTML,
        innerseconds: appendSeconds.innerHTML,
        innertens: appendTens.innerHTML,
    });
}

function getLaps() {
    lapList.innerHTML = window.localStorage.myLaps;
    if (window.localStorage.time != null) {
        var data = JSON.parse(window.localStorage.time);
        tens = data.tens;
        seconds = data.seconds;
        minutes = data.minutes;
        hours = data.hours;
        lapCounter = data.counter;
        appendTens.innerHTML = data.innertens;
        appendSeconds.innerHTML = data.innerseconds;
        appendMinutes.innerHTML = data.innerminutes;
        appendHours.innerHTML = data.innerhours;
    }
}