'use strict';
var btn = document.getElementsByTagName('button')[0];
var xhr = new XMLHttpRequest();
btn.onclick = function () {
	if (!userList) {
		xhr.open('GET', 'https://reqres.in/api/users?page=2');
		xhr.send();
	};
}

var tabsNav = document.querySelector('.tabs-nav');
var tabsContent = document.querySelector('.tabs-content')
var userList;
xhr.onload = function () {
	var statusType = Math.round(this.status / 100);
	if (statusType === 2) {
		userList = JSON.parse(this.response).data;
		for (var i = 0; i < userList.length; i++) {
			var user = document.createElement('div');
			user.setAttribute('data-tab', i);
			var userInfo = document.createElement('div');
			user.textContent = 'User ' + userList[i].id + ' ';
			userInfo.innerHTML = '<img src ="' + userList[i].avatar + '"><p>Email: ' + userList[i].email + '<br>First Name: ' + userList[i].first_name + '<br>Last name: ' + userList[i].last_name + '</p>';
			userInfo.classList.add('user-info');
			tabsNav.appendChild(user);
			tabsContent.appendChild(userInfo);
		}
		tabsNav.firstChild.classList.add('active');
		tabsContent.firstChild.classList.add('active');
	}
	else {
		tabsNav.innerHTML = '<h1>Данные не получены!</h1>';
		tabsNav.classList.add('error');
	}
}
var allTabs = document.getElementsByTagName('div');
var allUsersInfo = tabsContent.getElementsByTagName('div');
tabsNav.onclick = function (event) {
	var target = event.target;
	if (target.tagName == 'DIV') active(target);
};

function active(div) {
	for (var i = 0; i < allTabs.length; i++) {
		allTabs[i].classList.remove('active');
	}
	var ordinalNamber = div.getAttribute('data-tab');
	div.classList.add('active');
	allUsersInfo[ordinalNamber].classList.add('active')
}
