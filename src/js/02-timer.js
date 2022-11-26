import { Notify } from 'notiflix/build/notiflix-notify-aio';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('[data-start]');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRefs = document.querySelector('[data-minutes]');
const secondsREfs = document.querySelector('[data-seconds]');

let userSelectedDates = 0;
startBtn.setAttribute('disabled', false);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    onChange(selectedDates[0].getTime());
  },
};
flatpickr('#datetime-picker', options);

function onChange(setDate) {
  const selectedDateValue = setDate - Date.now();

  if (selectedDateValue > 0) {
    startBtn.removeAttribute('disabled', true);
    return (userSelectedDates = setDate);
  } else {
    startBtn.setAttribute('disabled', false);
    Notify.failure('Please choose a date in the future');
  }
}

function onStartBtnClick() {
  startTimer();
  startBtn.setAttribute('disabled', false);
}

startBtn.addEventListener('click', onStartBtnClick);

function startTimer() {
  const intervalId = setInterval(() => {
    const currentTime = Date.now();

    let timerValue = userSelectedDates - currentTime;

    const time = convertMs(timerValue);
    // console.log(time);

    if (timerValue <= 1000) {
      return clearInterval(intervalId);
    }

    updateTimerFace(time);
  }, 1000);
}

function updateTimerFace({ days, hours, minutes, seconds }) {
  daysRef.textContent = `${days}`;
  hoursRef.textContent = `${hours}`;
  minutesRefs.textContent = `${minutes}`;
  secondsREfs.textContent = `${seconds}`;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
