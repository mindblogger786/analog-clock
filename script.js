const hour = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

function displayTime(){
    const date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    const hRotations = 30*hh + mm/2;
    const mRotations = 6*mm;
    const sRotations = 6*ss;

    hour.style.transform = `rotate(${hRotations}deg)`;
    min.style.transform = `rotate(${mRotations}deg)`;
    sec.style.transform = `rotate(${sRotations}deg)`;
}

setInterval(displayTime, 1000)