'use strict';
// Задание 1:
var userEmail = 'name_surname-1234@gmail.com';
var reg = /^[a-z]{3,10}_[a-z]{3,10}(-\d{4})?@([0-9a-z]{2,10}(\.|-)?)[0-9a-z]{2,10}\.com$/i;
console.log(reg.test(userEmail));

// Задание 2:
var userPhoneNamber1 = '+375-25-777-77-77';
var userPhoneNamber2 = '375299999999';
var userPhoneNamber3 = '8-044-444-44-44';
var userPhoneNamber4 = '8033-6666666';

function validNamber(number) {
	var reg = /^\+?(375|8-?0)-?(25|44|33|17|29)-?[1-9]\d{2}(-?\d{2}){2}$/;
	return reg.test(number);
}
console.log(validNamber(userPhoneNamber1));
console.log(validNamber(userPhoneNamber2));
console.log(validNamber(userPhoneNamber3));
console.log(validNamber(userPhoneNamber4));

// Задание 3:
var anyWords = prompt('Введите любое слово', '');
function volwesCount(word) {
	var count = 0;
	var reg = /[aeiouауоыиэяюёе]/i;
	word.split('').forEach(function (element) {
		if (reg.test(element)) count++;
	});
	return count;
}
console.log('количество гласных букв в слове = ' + volwesCount(anyWords));
