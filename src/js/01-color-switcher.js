const refs = {
btnStart: document.querySelector('[data-start]'),
btnStop: document.querySelector('[data-stop]'),
body: document.body,
};

let isActive = false;
let intervalId = null;


onBtnStopClick();

refs.btnStart.addEventListener('click', onBtnStartClick);
refs.btnStop.addEventListener('click', onBtnStopClick);

function onBtnStartClick() { 
   refs.btnStart.disabled = !isActive;
   refs.btnStop.disabled = isActive;

	intervalId = setInterval(() => {
      refs.body.style.backgroundColor = getRandomHexColor();
      console.log(refs.body.style.backgroundColor = getRandomHexColor());
   }, 1000);
};

function onBtnStopClick(e) {
   clearInterval(intervalId);

   refs.btnStop.disabled = !isActive;
   refs.btnStart.disabled = isActive;
};

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}