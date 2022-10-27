`use strict`;

function mapf(n,start1,stop1,start2,stop2){
    var newval = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
    return newval
}

let days = ['sunnudagur','mánudagur','þriðjudagur','miðvikudagur','fimmtudagur','föstudagur','laugardagur']

function refreshTime() {
    const timeDisplay = document.getElementById("current-time");
//   const dateString = new Date().toLocaleString();
//   const formattedString = dateString.replace(", ", " - ");
//   timeDisplay.textContent = formattedString;
    let d = new Date()
    timeDisplay.textContent = d.getHours() + ':' + d.getMinutes()
    timeDisplay.textContent = d.toLocaleTimeString()
}
  setInterval(refreshTime, 1000);

const weekdayDisplay = document.getElementById("current-weekday");
let d = new Date()
weekdayDisplay.textContent = days[d.getDay()]

const dateDisplay = document.getElementById("current-date")
dateDisplay.textContent = d.toLocaleDateString()


function refreshTimeLine(){
    let minHours = 19;
    let maxHours = 23;
    let d = new Date();
    let dec = d.getMinutes()/60;
    let currentPos = d.getHours() + dec;

    let dagskra = document.getElementById('dagskra');
    let rect = dagskra.getBoundingClientRect();

    let newPos = mapf(currentPos,minHours,maxHours,rect.top,rect.bottom);
    let hr = document.getElementById('timalina');
    hr.style.top = newPos + 'px';

}

setInterval(refreshTimeLine, 1000);
