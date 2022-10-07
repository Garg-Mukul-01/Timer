let cntTimer = document.getElementById("container-timer");
let cntShowTimer = document.getElementById("show-timer-container");
let minSpan = document.getElementById("mn");
let colSpan = document.getElementById("colon");
let secSpan = document.getElementById("sc");
let sound = new Audio("tt1.mp3");
cntShowTimer.style.display = "none";
function start() {
  let min = +document.getElementById("min").value;
  let sec = +document.getElementById("sec").value;
  if ((min >= 0 && min <= 60) && (sec >= 0 && sec <= 60)) {
    cntTimer.style.display = "none";
    cntShowTimer.style.display = "inherit";
    let setTimer = setInterval(() => {
      minSpan.innerText = min;
      secSpan.innerText = sec;
      if ((min > 0 && sec == 1) || (sec === 0 && min != 0)) {
        min--;
        if(min==0){
            minSpan.style.display="none";
            colSpan.style.display="none";
            console.log("testing");
        }
        sec = 61;
        sec--;
      }
      if (sec > 0) sec--;
      else sound.play();
    }, 1000);
  } else {
    alert("Invalid Inputs .");
  }
}

function reset() {
  window.location.reload();
  cntShowTimer.style.display = "none";
}
