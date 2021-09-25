'use strict';
var axisX = document.getElementById('X');
var axisY = document.getElementById('Y');
var btn = document.getElementsByTagName('button')[0];
var container = document.getElementsByTagName('body')[0];
var script = document.getElementsByTagName('script')[0];
var board = document.createElement('div');



axisX.addEventListener('keyup', function () {
	if (axisX.value.trim() && axisY.value.trim()) btn.removeAttribute('disabled');
});
axisY.addEventListener('keyup', function () {
	if (axisX.value.trim() && axisY.value.trim()) btn.removeAttribute('disabled');
});
axisX.addEventListener('input', function () {
	if (!axisX.value.trim()) btn.setAttribute('disabled', 'disabled');
});
axisY.addEventListener('input', function () {
	if (!axisY.value.trim()) btn.setAttribute('disabled', 'disabled');
});

btn.addEventListener('click', function () {
	event.preventDefault();
	if (axisX.value > 10 || axisX.value < 1 || !(axisX.value % 1 == 0)) {
		alert('неверное значение в поле X, введите число от 1 до 10');
		axisX.value = '';
		btn.setAttribute('disabled', 'disabled');
	}
	if (axisY.value > 10 || axisY.value < 1 || !(axisY.value % 1 == 0)) {
		alert('неверное значение в поле Y, введите число от 1 до 10');
		axisY.value = '';
		btn.setAttribute('disabled', 'disabled');
	}
	if (axisX.value < 10 && axisX.value > 1 && axisY.value < 10 && axisY.value > 1) {
		createTableFirstBlack(axisX.value, axisY.value);
	}

});

function createTableFirstBlack(valueX, valueY) {
	board.innerHTML = null;
	board.classList.add('board');
	container.insertBefore(board, script);
	for (var i = 0; i < valueY; i++) {
		var row = document.createElement('div');
		row.classList.add('row');
		for (var j = 0; j < valueX; j++) {
			var cell = document.createElement('div');
			cell.classList.add('cell');
			if (i % 2 == j % 2) {
				cell.classList.add('blackCell');
				row.appendChild(cell);
			} else {
				row.appendChild(cell);
			}

		}
		board.appendChild(row);
	}
}

board.onclick = function (event) {
	var target = event.target;
	if (target.tagName == 'DIV') {
		changeColor(target);
	}
}

function changeColor(div) {
	var allCell = document.getElementsByClassName('cell');
	for (var i = 0; i < allCell.length; i++) {
		allCell[i].classList.toggle('blackCell');
	}
}