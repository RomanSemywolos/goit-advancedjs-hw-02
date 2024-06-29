const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
  
let intervalId = null;
stopBtn.disabled = true;
  
function setRandomHexColor() {
    document.body.style.backgroundColor = 
    `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    intervalId = setInterval(() => {setRandomHexColor()}, 1000);
});
  
stopBtn.addEventListener('click', () => {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(intervalId);
});