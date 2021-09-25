'use strict';
var container = document.getElementById('container');

var newParagraph_1 = document.createElement('p');
var newParagraph_2 = document.createElement('p');

newParagraph_1.innerHTML = 'Some <a href="https://www.google.by/"> link 1 </a>, and one more <a href="https://www.youtube.com/" > link 2 </a>';
newParagraph_2.innerHTML = 'Some <a href="https://www.google.by/"> link 3</a>, and one more <a href="https://www.youtube.com/" > link 4 </a>';
container.appendChild(newParagraph_1);
container.appendChild(newParagraph_2);
var btn = document.getElementsByTagName('button')[0];
var linksP1 = newParagraph_1.children;
btn.addEventListener('click', function () {
	for (var i = 0; i < linksP1.length; i++) {
		linksP1[i].classList.add('change-link');
	}
});
newParagraph_2.onclick = function (event) {
	var target = event.target;
	if (target.tagName == 'A') {
		getLink(target);
	}
}

function getLink(a) {
	event.preventDefault();
	var key = a.textContent;
	if (localStorage.getItem(key) == null) {
		var value = JSON.stringify({ path: a.href });
		localStorage.setItem(key, value);
		alert('Информация о ссылке сохранена');
		a.href = '#';
	} else {
		var link = JSON.parse(localStorage[key]).path;
		alert(link);
	}
}
window.addEventListener('unload', function () {
	localStorage.clear();
});
// Практическое задание (продолжение предыдущего задания):
//       По кликам на ссылки второго абзаца проверять, если информации об этой ссылке нет в LS - записать ее туда. Ключом
//       должен быть текст ссылки, а значением объект вида { path: (путь ссылки) }. После записи изменить значение атрибута
//       href ссылки на "#" и выводить alert с уведомлением о том, что ссылка была сохранена.
//       Если же информация об этой ссылке уже записана в LS, выводить в alert путь ссылки из объекта из хранилища.
//       При загрузке страницы localStorage должен очищаться.
