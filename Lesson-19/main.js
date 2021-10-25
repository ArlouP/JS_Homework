'use strict';

let mainBtn = document.getElementById('main-button');
let timerBlock = document.getElementById('timer');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let mSec = document.getElementById('m-sec');
let wrap = document.getElementById('wrap');
let btnSave = document.createElement('button');
btnSave.innerText = 'Save';
let btnReset = document.createElement('button');
btnReset.innerText = 'Reset';
let blockResalts = document.createElement('ol');

btnReset.addEventListener('click', function () {
	if (timerBlock.dataset.state !== 'end') {
		clearInterval(timerId);
		wrap.removeChild(btnSave);
	}
	if (timerBlock.dataset.state === 'end') {
		mainBtn = document.createElement('button');
		wrap.appendChild(mainBtn);

	}
	timerBlock.dataset.state = 'initial';
	min.innerText = '00';
	sec.innerText = '00';
	mSec.innerText = '00';
	wrap.removeChild(btnReset);
	blockResalts.innerText = "";
	mainBtn.innerText = 'Start';
	oneMsec = 1;
	tenMsec = 0;
	oneSec = 0;
	tenSec = 0;
	oneMin = 0;
	tenMin = 0;
});

let timerId;
mainBtn.addEventListener('click', function () {
	if (timerBlock.dataset.state === 'initial') {
		mainBtn.innerText = 'Stop';
		timerBlock.dataset.state = 'stop';
		wrap.appendChild(btnSave);
		wrap.appendChild(btnReset);
	} else if (timerBlock.dataset.state === 'stop') {
		timerId = setInterval(startCounting, 10);
		mainBtn.innerText = 'Run';
		timerBlock.dataset.state = 'run';
	} else if (timerBlock.dataset.state === 'run') {
		clearInterval(timerId);
		mainBtn.innerText = 'Stop';
		timerBlock.dataset.state = 'stop';
	}
});

btnSave.addEventListener('click', function () {
	wrap.appendChild(blockResalts);
	blockResalts.insertAdjacentHTML('afterBegin', `<li> ${min.innerText}:${sec.innerText}:${mSec.innerText}</li>`)

});

let oneMsec = 1,
	tenMsec = 0,
	oneSec = 0,
	tenSec = 0,
	oneMin = 0,
	tenMin = 0;

function startCounting() {
	mSec.innerText = `${tenMsec}${oneMsec}`;
	sec.innerText = `${tenSec}${oneSec}`;
	min.innerText = `${tenMin}${oneMin}`;
	oneMsec++;
	if (oneMsec === 10) {
		oneMsec = 0;
		tenMsec++;
	}
	if (tenMsec === 10) {
		tenMsec = 0;
		oneSec++;
	}
	if (oneSec === 2) {
		oneSec = 0;
		tenSec++;
	}
	if (tenSec === 2) {
		tenSec = 0;
		oneMin++;
	}
	if (oneMin === 1) {
		oneMin = 0;
		tenMin++;
	}
	if (tenMin === 2) {
		timeIsOver();
	}
}
function timeIsOver() {
	clearInterval(timerId);
	wrap.removeChild(btnSave);
	wrap.removeChild(mainBtn);
	timerBlock.dataset.state = 'end';
}

