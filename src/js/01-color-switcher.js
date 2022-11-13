const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let timerId;

startBtn.addEventListener('click', () => {
  startBtn.setAttribute('disabled', '');
  stopBtn.removeAttribute('disabled');
  document.body.style.backgroundColor = getRandomHexColor();
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  stopBtn.setAttribute('disabled', '');
  startBtn.removeAttribute('disabled');
  clearInterval(timerId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
