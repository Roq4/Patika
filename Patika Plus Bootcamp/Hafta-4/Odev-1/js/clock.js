// methods
let nameDOM = document.querySelector("#myName");
let clockDOM = document.querySelector("#myClock");

// prompt
let person = prompt("Please enter your name:", "Unknown");

// time & weekday function
function time() {
  let currentDate = new Date();
  let s = currentDate.getSeconds();
  let m = currentDate.getMinutes();
  let h = currentDate.getHours();
  let d = currentDate.getUTCDay();
  let daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDay = daylist[d];
  clockDOM.innerHTML = `${h}:${m}:${s}, ${currentDay} `;
}

setInterval(time, 1000);

// DOM manipulation
nameDOM.innerHTML = `${person}`;
