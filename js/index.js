import {name, x, y, getSum} from './variables.js'; //функцию передаем в виде ее названия

console.log(x, y, name, getSum());

import Admin from './class.js';

var john = new Admin('John', 'Doe');

console.log('user', john);

//john.sayHi(); //метод Пользователя

import * as data from './variables.js';
console.log(data.x, data.y);

/*let {x, y} = data; //деструуктризация объекта ДАТА

console.log(x);*/

//x = 10; Константа

import {obj} from './variables.js'; //можно менять переменную только в объекте
console.log(obj);
obj.x = 10;
console.log(obj);

//----------------------------------------------------------------------//
import {
	$studentsList,
	$formUpdate,
	$btnDelete,
	$formCreate
} from './variables.js';

import DB from './db.js';

let server = new DB('http://helloworld.filonitta.fe4.a-level.com.ua', 1);

server.getStudents().done(response => {
	console.log(response)
	response.forEach(student => {
		$('<a>')
			.appendTo($studentsList)
			.attr({'href': '', 'data-id': student.id})
			.addClass('list-group-item')
			.text(`${student.firstname} ${student.lastname}`);
	});
});

$('body').on('click', '[data-id]', function(event) {
	event.preventDefault();

	let studentId = $(this).data('id');
	console.log(studentId)

	server.getStudentById(studentId).done(response => {
		console.log('response', response);
		for(let key in response) {
			$formUpdate
				.find(`[name=${key}]`)
					.val(response[key])
		}
	});
})

$formUpdate.on('submit', function(event) {
	event.preventDefault();

	let studentId = $(this).find('[name=id]').val();

	console.log( $(this).serialize() ) //get строка из ссылки

	server.updateStudentById(studentId, $(this).serialize()) //при отправке меняется ссылка и посылаем на сервер новые данные
})

$btnDelete.on('click', function(event) {
	event.preventDefault();
	
	let studentId = $formUpdate.find('[name=id]').val();

	server.deleteStudentById(studentId);

	$formUpdate[0].reset();

	$(`[data-id=${studentId}]`).remove();
})

$formCreate.on('submit', function(event) {
	event.preventDefault();

	server.createStudent( $(this).serialize() ).done(response => {
		$('<a>')
		.appendTo($studentsList)
		.attr({'href': '', 'data-id': response.id})
		.addClass('list-group-item')
		.text(`${response.firstname} ${response.lastname}`);
	})
})