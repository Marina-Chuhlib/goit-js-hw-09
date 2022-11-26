function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let timerId = null;

const onStartBtnClick = () => {
  timerId = setInterval(() => {
    const color = getRandomHexColor();
    document.body.style.background = color;
  }, 1000);

  startToggle();
};

const onStopBtnClick = () => {
  stopToggle();

  clearInterval(timerId);
};

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

const startToggle = () => {
  startBtn.setAttribute('disabled', true);
  stopBtn.removeAttribute('disabled');
};

const stopToggle = () => {
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', true);
};
