let clock = document.getElementById('clock')
let hrs = document.getElementById('hrs')
let mins = document.getElementById('mins')
let secs = document.getElementById('secs')
let amOrPm = document.getElementById('amOrPm')

setInterval(function () {
    let time = new Date();
    let newDate = time.toLocaleTimeString();

    let hours = time.getHours();
    let currHrs = hours < 10 ? '0' + hours : hours;

    let min = time.getMinutes();
    let currMin = min < 10 ? '0' + min : min;

    let currSec = time.getSeconds();

    let amPm = hours < 12 ? 'AM' : 'PM';

    hrs.innerText = currHrs;
    mins.innerText = currMin;
    secs.innerText = currSec;
    amOrPm.innerText = amPm;

}, 1000)
