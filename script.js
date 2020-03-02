const BACKGROUND = document.querySelector(".main");
const FACE = document.querySelector(".face");
const BORDERFACE = document.querySelector(".border-face");
const OUTERCIRCLE = document.querySelector(".circle");
const HOURMARKSCIRCLE = document.querySelector(".hour-marks");
const MIDCIRCLE = document.querySelector(".mid-circle");

const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

const HOURHANDCOLOR = document.querySelector(".hour-arm");
const MINUTEHANDCOLOR = document.querySelector(".minute-arm");
const SECONDHANDCOLOR = document.querySelector(".second-arm");



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


function clock1() {
  BACKGROUND.setAttribute("style","background-color: white;");

  OUTERCIRCLE.setAttribute("style", "stroke: black;");
  FACE.setAttribute("style", "fill: white")
  BORDERFACE.setAttribute("style", "fill: white;");
  HOURMARKSCIRCLE.setAttribute("style", "stroke: black;");

  MIDCIRCLE.setAttribute("style", "fill: black;");
  HOURHANDCOLOR.setAttribute("style", "stroke: red;");
  MINUTEHANDCOLOR.setAttribute("style", "stroke: black;");
  SECONDHANDCOLOR.setAttribute("style", "stroke: black;");
}

function clock2() {
  BACKGROUND.setAttribute("style","background-color: black;");

  OUTERCIRCLE.setAttribute("style", "stroke: white;");
  FACE.setAttribute("style", "fill: rgb(13, 141, 216)")
  BORDERFACE.setAttribute("style", "fill: black;");

  HOURMARKSCIRCLE.setAttribute("style", "stroke: #66ff33;");

  MIDCIRCLE.setAttribute("style", "fill: white;");
  HOURHANDCOLOR.setAttribute("style", "stroke: Yellow;");
  MINUTEHANDCOLOR.setAttribute("style", "stroke: orange;");
  SECONDHANDCOLOR.setAttribute("style", "stroke: white;");
}

function clock3() {
  BACKGROUND.setAttribute("style","background-color: #85C1E9;");

  OUTERCIRCLE.setAttribute("style", "stroke: #154360;");
  BORDERFACE.setAttribute("style", "fill: #1F618D;");
  FACE.setAttribute("style", "fill: #D6EAF8;")

  HOURMARKSCIRCLE.setAttribute("style", "stroke: #154360;");

  MIDCIRCLE.setAttribute("style", "fill: #154360;");
  HOURHANDCOLOR.setAttribute("style", "stroke: Yellow;");
  MINUTEHANDCOLOR.setAttribute("style", "stroke: orange;");
  SECONDHANDCOLOR.setAttribute("style", "stroke: #154360;");
}
