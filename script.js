const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

setInterval(() => {
  var date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  console.log(date);
  console.log(hour+" "+minutes+" "+seconds);

  let secondpos =seconds*(360/60);
  let minutepos =minutes*(360/60)+secondpos/60;
  let hourpos =hours*(360/12) + minutepos/12;


  HOURHAND.style.transform = "rotate("+hourpos+"deg)";
  MINUTEHAND.style.transform = "rotate("+minutepos+"deg)";
  SECONDHAND.style.transform = "rotate("+secondpos+"deg)";
}, 1000);