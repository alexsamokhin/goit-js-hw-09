import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtn = document.querySelector('button[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

let selectedDate = null;
let convObj = {};
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      Notify.failure('Please choose a date in the future');
    } else {
      selectedDate = selectedDates[0].getTime();
      startBtn.removeAttribute('disabled');
    }
  },
};

flatpickr('#datetime-picker', options);

startBtn.addEventListener('click', onTimerStart);

function onTimerStart() {
  const timerId = setInterval(() => {
    const value = selectedDate - Date.now();
    if (value < 1000) {
      clearInterval(timerId);
      startBtn.setAttribute('disabled', true);
    }
    convObj = convertMs(value);
    setTimer();
  }, 1000);
}

function setTimer() {
  days.textContent = addLeadingZero(convObj.days);
  hours.textContent = addLeadingZero(convObj.hours);
  minutes.textContent = addLeadingZero(convObj.minutes);
  seconds.textContent = addLeadingZero(convObj.seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, [0]);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
