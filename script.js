const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
const FACE = document.querySelector("#face");
const HOURMARKS = document.querySelector("#hour-marks");
const MIDCIRCLE = document.querySelector("#mid-circle");

var date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
console.log(date);
console.log(hour+" "+minutes+" "+seconds);

let secondpos = seconds*(360/60);
let minutepos = minutes*(360/60)+secondpos/60;
let hourpos = hours*(360/12) + minutepos/12;

setInterval(() => {
  secondpos = secondpos + 6; // (360/60);
  minutepos = minutepos + (.1); //(1/60)*6;
  hourpos = hourpos + (1/120); //(30/3600)

  HOURHAND.style.transform = "rotate("+hourpos+"deg)";
  MINUTEHAND.style.transform = "rotate("+minutepos+"deg)";
  SECONDHAND.style.transform = "rotate("+secondpos+"deg)";
}, 1000);
